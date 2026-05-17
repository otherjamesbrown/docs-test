import * as cheerio from 'cheerio';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import TurndownService from 'turndown';
import YAML from 'yaml';
import { z } from 'zod';
import { slugify } from './shared/slug';

const repoRoot = path.resolve(new URL('../../..', import.meta.url).pathname);
const siteDocsRoot = path.join(repoRoot, 'site/src/content/docs');
const assetsRoot = path.join(repoRoot, 'site/public/imported-assets');
const rawRoot = path.join(repoRoot, 'migration/raw');
const reportPath = path.join(repoRoot, 'migration/import-report.json');
const manifestPath = path.join(repoRoot, 'migration/manifest.json');
const linkMapPath = path.join(repoRoot, 'migration/link-map.json');
const basePath = '/docs-test';

type Area =
  | 'redstor'
  | 'titanhq-platform'
  | 'spamtitan-kb'
  | 'spamtitan-skellig'
  | 'spamtitan-legacy';

interface PageCandidate {
  area: Area;
  sourceId: string;
  sourceUrl: string;
  sourceHost: string;
  canonicalHost: string;
  title: string;
  route: string;
  outputPath: string;
  contentType: 'kb_article' | 'docs_page';
  breadcrumbs: string[];
  folder?: string;
  product: string;
  productStream?: string;
}

interface ImportReport {
  generatedAt: string;
  counts: Record<string, number>;
  pages: Array<{
    title: string;
    sourceUrl: string;
    route: string;
    outputPath: string;
    warnings: string[];
  }>;
  warnings: string[];
}

interface SourcesConfig {
  products: ProductSourceConfig[];
}

interface ProductSourceConfig {
  id: string;
  label: string;
  canonical_host: string;
  sources: {
    kb?: FreshdeskSourceConfig[];
    docs?: DocsSourceConfig[];
  };
}

interface FreshdeskSourceConfig {
  id: string;
  type: 'freshdesk_public';
  base_url: string;
  area: Area;
  folders: FreshdeskFolderConfig[];
  seeds?: string[];
  scoped_kb_roots?: string[];
  exclude_mirrors?: string[];
}

interface FreshdeskFolderConfig {
  folder: string;
  source_url: string;
  route_base: string;
  limit: number;
}

interface DocsSourceConfig {
  id: string;
  type: 'titanhq_static_docs_branch';
  base_url: string;
  area: Area;
  route_base: string;
  breadcrumbs: string[];
  seeds: DocsSeedConfig[];
  product_stream?: string;
  branch_label?: string;
  version_range?: string;
  preferred?: boolean;
}

type DocsSeedConfig =
  | string
  | {
      path?: string;
      url?: string;
      child_depth?: number;
    };

type AssetDownloader = (assetUrl: string, page: PageCandidate) => Promise<string>;

const areaSchema = z.enum(['redstor', 'titanhq-platform', 'spamtitan-kb', 'spamtitan-skellig', 'spamtitan-legacy']);

const freshdeskFolderSchema = z.object({
  folder: z.string().min(1),
  source_url: z.string().min(1),
  route_base: z.string().min(1),
  limit: z.number().int().positive(),
});

const freshdeskSourceSchema = z.object({
  id: z.string().min(1),
  type: z.literal('freshdesk_public'),
  base_url: z.string().min(1),
  area: areaSchema,
  seeds: z.array(z.string().min(1)).optional(),
  folders: z.array(freshdeskFolderSchema).min(1),
  scoped_kb_roots: z.array(z.string().min(1)).optional(),
  exclude_mirrors: z.array(z.string().min(1)).optional(),
});

const docsSeedSchema = z.union([
  z.string().min(1),
  z
    .object({
      path: z.string().min(1).optional(),
      url: z.string().min(1).optional(),
      child_depth: z.number().int().min(0).optional(),
    })
    .refine((seed) => seed.path || seed.url, 'Docs seed must include path or url'),
]);

const docsSourceSchema = z.object({
  id: z.string().min(1),
  type: z.literal('titanhq_static_docs_branch'),
  base_url: z.string().min(1),
  area: areaSchema,
  route_base: z.string().min(1),
  breadcrumbs: z.array(z.string().min(1)).min(1),
  seeds: z.array(docsSeedSchema).min(1),
  branch_label: z.string().min(1).optional(),
  product_stream: z.string().min(1).optional(),
  version_range: z.string().min(1).optional(),
  preferred: z.boolean().optional(),
});

const sourcesConfigSchema = z.object({
  products: z
    .array(
      z.object({
        id: z.string().min(1),
        label: z.string().min(1),
        canonical_host: z.string().min(1),
        sources: z.object({
          kb: sourceListSchema(freshdeskSourceSchema),
          docs: sourceListSchema(docsSourceSchema),
        }),
      }),
    )
    .min(1),
});

function sourceListSchema<T extends z.ZodType>(schema: T) {
  return z
    .preprocess((value) => {
      if (value === undefined) return undefined;
      return Array.isArray(value) ? value : [value];
    }, z.array(schema))
    .optional();
}

const turndown = new TurndownService({
  codeBlockStyle: 'fenced',
  headingStyle: 'atx',
  bulletListMarker: '-',
});

const paligoAdmonitionTypes = new Map([
  ['note', 'note'],
  ['tip', 'tip'],
  ['important', 'caution'],
  ['warning', 'caution'],
  ['caution', 'caution'],
]);

turndown.addRule('strikethrough', {
  filter: ['del', 's', 'strike'],
  replacement: (content) => `~~${content}~~`,
});

turndown.addRule('starlightAside', {
  filter: (node) =>
    node.nodeName === 'DIV' &&
    Boolean((node as unknown as { getAttribute?: (name: string) => string | null }).getAttribute?.('data-import-admonition')),
  replacement: (content, node) => {
    const element = node as unknown as { getAttribute?: (name: string) => string | null };
    const type = element.getAttribute?.('data-import-admonition') ?? 'note';
    const title = element.getAttribute?.('data-import-admonition-title');
    const label = title && title.toLowerCase() !== type ? `[${title.replace(/\]/g, '\\]')}]` : '';
    const body = content.trim();
    return body ? `\n\n:::${type}${label}\n${body}\n:::\n\n` : '';
  },
});

async function main() {
  const command = process.argv[2] ?? 'help';
  const args = process.argv.slice(3);

  if (command === 'help' || !['discover', 'fetch', 'convert', 'qa', 'all'].includes(command)) {
    console.log('Usage: npm run import:<discover|fetch|convert|qa|all> -- [--poc] [--limit N] [--force]');
    process.exit(command === 'help' ? 0 : 1);
  }

  if (command === 'qa') {
    await runQa();
    return;
  }

  const limit = getNumberArg(args, '--limit');
  const force = args.includes('--force');

  if (command === 'discover') {
    const pages = await discover(limit);
    await writeJson(manifestPath, toManifest(pages));
    console.log(`Discovered ${pages.length} pages.`);
    return;
  }

  const pages = await discover(limit);
  await writeJson(manifestPath, toManifest(pages));

  if (command === 'fetch') {
    await fetchAll(pages, force);
    console.log(`Fetched ${pages.length} pages.`);
    return;
  }

  if (command === 'convert' || command === 'all') {
    await fetchAll(pages, force);
    await clearGeneratedContent();
    await convertAll(pages);
    await runQa();
    return;
  }
}

async function discover(limit?: number): Promise<PageCandidate[]> {
  const config = await readSourcesConfig();

  const pages: PageCandidate[] = [];

  for (const { sourceUrl, options } of configuredFreshdeskFolders(config)) {
    const discovered = await discoverFreshdeskFolder(sourceUrl, options);
    pages.push(...discovered);
  }

  for (const { source, options } of configuredDocsSources(config)) {
    pages.push(...(await discoverDocs(source, options)));
  }

  const unique = dedupePages(pages);
  return typeof limit === 'number' ? unique.slice(0, limit) : unique;
}

async function discoverFreshdeskFolder(
  sourceUrl: string,
  options: {
    area: Area;
    sourceHost: string;
    canonicalHost: string;
    routeBase: string;
    folder: string;
    product: string;
    limit: number;
  },
): Promise<PageCandidate[]> {
  const html = await fetchText(sourceUrl);
  const $ = cheerio.load(html);
  const links: PageCandidate[] = [];

  const articleLinks = $(
    [
      '.fw-articles a[href*="/support/solutions/articles/"]',
      '.article-list a[href*="/support/solutions/articles/"]',
      '.c-article-row .article-title a[href*="/support/solutions/articles/"]',
      '.folder-body a[href*="/support/solutions/articles/"]',
    ].join(', '),
  );
  const candidates = articleLinks.length ? articleLinks : $('a[href*="/support/solutions/articles/"]');

  candidates.each((_, element) => {
    if (links.length >= options.limit) return;
    const href = $(element).attr('href');
    const title = cleanText($(element).find('.line-clamp-2').first().text()) || cleanText($(element).text());
    if (!href || !title) return;
    const source = new URL(href, sourceUrl).toString();
    const sourceId = extractFreshdeskId(source);
    if (!sourceId) return;
    const slug = slugify(stripArticleNumber(title));
    const route = `${options.routeBase}/${slug}`;
    links.push({
      area: options.area,
      sourceId,
      sourceUrl: source,
      sourceHost: options.sourceHost,
      canonicalHost: options.canonicalHost,
      title,
      route,
      outputPath: `${route}.md`,
      contentType: 'kb_article',
      breadcrumbs: [options.product, 'Knowledge Base', options.folder],
      folder: options.folder,
      product: options.product,
    });
  });

  return links;
}

async function discoverDocs(
  source: DocsSourceConfig,
  options: {
    area: Area;
    sourceHost: string;
    canonicalHost: string;
    routeBase: string;
    product: string;
    productStream?: string;
    breadcrumbs: string[];
  },
): Promise<PageCandidate[]> {
  const pages: PageCandidate[] = [];
  const processedDepth = new Map<string, number>();
  const emitted = new Set<string>();
  const queue = source.seeds.map((seed) => docsSeedQueueItem(seed, source.base_url));
  const sourceHost = new URL(source.base_url).hostname;

  while (queue.length > 0) {
    const item = queue.shift();
    if (!item) break;
    const sourceUrl = normaliseDocsPageUrl(item.sourceUrl);
    const sourceKey = sourceLinkKey(sourceUrl) ?? sourceUrl;
    const previousDepth = processedDepth.get(sourceKey);
    if (previousDepth !== undefined && previousDepth >= item.childDepth) continue;
    processedDepth.set(sourceKey, item.childDepth);

    const sourceId = docsSourceId(sourceUrl);
    const html = await fetchText(sourceUrl);
    const $ = cheerio.load(html, { xmlMode: false });
    const topicSection = $('#topic-content section').first();
    const title = docsPageTitle($, topicSection.length ? topicSection : $('#topic-content, article').first(), sourceId);
    if (!emitted.has(sourceKey)) {
      const route = `${options.routeBase}/${slugify(sourceId.replace(/^\d+-/, ''))}`;
      pages.push({
        area: options.area,
        sourceId,
        sourceUrl,
        sourceHost: options.sourceHost,
        canonicalHost: options.canonicalHost,
        title: title || sourceId,
        route,
        outputPath: `${route}.md`,
        contentType: 'docs_page',
        breadcrumbs: options.breadcrumbs,
        product: options.product,
        productStream: options.productStream,
      });
      emitted.add(sourceKey);
    }

    if (item.childDepth <= 0) continue;
    for (const child of docsSectionIndexItems(html, sourceId, sourceUrl)) {
      const url = new URL(child.href);
      if (url.hostname !== sourceHost || url.hash) continue;
      const childUrl = normaliseDocsPageUrl(url.toString());
      queue.push({ sourceUrl: childUrl, childDepth: item.childDepth - 1 });
    }
  }
  return pages;
}

function configuredFreshdeskFolders(config: SourcesConfig): Array<{
  sourceUrl: string;
  options: {
    area: Area;
    sourceHost: string;
    canonicalHost: string;
    routeBase: string;
    folder: string;
    product: string;
    limit: number;
  };
}> {
  return config.products.flatMap((product) => {
    const kb = product.sources.kb ?? [];
    return kb.flatMap((source) => {
      const sourceHost = new URL(source.base_url).hostname;
      return source.folders.map((folder) => ({
        sourceUrl: new URL(folder.source_url, source.base_url).toString(),
        options: {
          area: source.area,
          sourceHost,
          canonicalHost: product.canonical_host,
          routeBase: folder.route_base,
          folder: folder.folder,
          product: product.label,
          limit: folder.limit,
        },
      }));
    });
  });
}

function configuredDocsSources(config: SourcesConfig): Array<{
  source: DocsSourceConfig;
  options: {
    area: Area;
    sourceHost: string;
    canonicalHost: string;
    routeBase: string;
    product: string;
    productStream?: string;
    breadcrumbs: string[];
  };
}> {
  return config.products.flatMap((product) => {
    const docs = product.sources.docs ?? [];
    return docs.map((source) => {
      const sourceHost = new URL(source.base_url).hostname;
      return {
        source,
        options: {
          area: source.area,
          sourceHost,
          canonicalHost: product.canonical_host,
          routeBase: source.route_base,
          product: product.label,
          productStream: source.product_stream,
          breadcrumbs: source.breadcrumbs,
        },
      };
    });
  });
}

function docsSeedQueueItem(seed: DocsSeedConfig, baseUrl: string): { sourceUrl: string; childDepth: number } {
  if (typeof seed === 'string') {
    return { sourceUrl: new URL(seed, baseUrl).toString(), childDepth: 0 };
  }

  const url = seed.url ?? seed.path;
  if (!url) throw new Error(`Docs seed in ${baseUrl} must include path or url`);
  return { sourceUrl: new URL(url, baseUrl).toString(), childDepth: seed.child_depth ?? 0 };
}

function normaliseDocsPageUrl(url: string): string {
  const parsed = new URL(url);
  parsed.hash = '';
  return parsed.toString();
}

function docsSourceId(url: string): string {
  return path.basename(new URL(url).pathname).replace(/\.html$/, '');
}

async function fetchAll(pages: PageCandidate[], force: boolean) {
  await fs.mkdir(rawRoot, { recursive: true });
  for (const page of pages) {
    const file = rawPath(page);
    if (!force && (await exists(file))) continue;
    const html = await fetchText(page.sourceUrl);
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, html);
  }
}

async function convertAll(pages: PageCandidate[]) {
  const report: ImportReport = {
    generatedAt: new Date().toISOString(),
    counts: {},
    pages: [],
    warnings: [],
  };
  const linkMap: Record<string, string> = {};
  const sourceLinkIndex = buildSourceLinkIndex(pages);

  for (const page of pages) {
    const warnings: string[] = [];
    const html = await fs.readFile(rawPath(page), 'utf8');
    const converted =
      page.contentType === 'kb_article'
        ? await convertFreshdeskArticle(page, html, warnings, sourceLinkIndex)
        : await convertDocsPage(page, html, warnings, sourceLinkIndex);

    const outputPath = path.join(siteDocsRoot, page.outputPath);
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, converted);
    linkMap[page.sourceUrl] = `${basePath}/${page.route}/`;
    report.counts[page.area] = (report.counts[page.area] ?? 0) + 1;
    report.pages.push({
      title: page.title,
      sourceUrl: page.sourceUrl,
      route: `${basePath}/${page.route}/`,
      outputPath: path.relative(repoRoot, outputPath),
      warnings,
    });
  }

  await writeCollectionIndexes(pages);
  await writeJson(reportPath, report);
  await writeJson(linkMapPath, linkMap);
  await writeJson(manifestPath, toManifest(pages));
  console.log(`Generated ${pages.length} Markdown pages.`);
  console.log(`Report: ${path.relative(repoRoot, reportPath)}`);
}

async function clearGeneratedContent() {
  const generatedMdx = await collectFiles(siteDocsRoot, '.mdx');
  const markdown = await collectFiles(siteDocsRoot, '.md');
  const generatedMarkdown: string[] = [];
  for (const file of markdown) {
    const content = await fs.readFile(file, 'utf8');
    if (content.includes('> Imported content type:') || content.includes('> Generated import index:')) {
      generatedMarkdown.push(file);
    }
  }
  await Promise.all([...generatedMdx, ...generatedMarkdown].map((file) => fs.rm(file)));
  await fs.rm(assetsRoot, { recursive: true, force: true });
}

async function writeCollectionIndexes(pages: PageCandidate[]) {
  const collections = [
    {
      route: 'redstor/kb',
      title: 'Redstor Knowledge Base',
      description: 'Imported Redstor knowledge base articles.',
      pages: pages.filter((page) => page.area === 'redstor'),
    },
    {
      route: 'redstor/kb/guides',
      title: 'Guides',
      description: 'Imported Redstor guide articles.',
      pages: pages.filter((page) => page.route.startsWith('redstor/kb/guides/')),
    },
    {
      route: 'redstor/kb/troubleshooting',
      title: 'Troubleshooting',
      description: 'Imported Redstor troubleshooting articles.',
      pages: pages.filter((page) => page.route.startsWith('redstor/kb/troubleshooting/')),
    },
    {
      route: 'redstor/kb/release-notes',
      title: 'Release Notes',
      description: 'Imported Redstor release notes.',
      pages: pages.filter((page) => page.route.startsWith('redstor/kb/release-notes/')),
    },
    {
      route: 'titanhq/platform/docs',
      title: 'TitanHQ Platform Docs',
      description: 'Imported TitanHQ Platform documentation.',
      pages: pages.filter((page) => page.area === 'titanhq-platform'),
    },
    {
      route: 'titanhq/products/spamtitan',
      title: 'SpamTitan',
      description: 'Imported SpamTitan knowledge base and documentation.',
      pages: pages.filter((page) => page.product === 'SpamTitan'),
    },
    {
      route: 'titanhq/products/spamtitan/kb',
      title: 'SpamTitan Knowledge Base',
      description: 'Imported SpamTitan knowledge base articles.',
      pages: pages.filter((page) => page.area === 'spamtitan-kb'),
    },
    {
      route: 'titanhq/products/spamtitan/docs',
      title: 'SpamTitan Docs',
      description: 'Imported SpamTitan documentation.',
      pages: pages.filter((page) => page.area === 'spamtitan-skellig' || page.area === 'spamtitan-legacy'),
    },
    {
      route: 'titanhq/products/spamtitan/docs/skellig-9',
      title: 'Skellig 9',
      description: 'Imported SpamTitan Skellig 9 documentation.',
      pages: pages.filter((page) => page.area === 'spamtitan-skellig'),
    },
    {
      route: 'titanhq/products/spamtitan/docs/legacy-8',
      title: 'Legacy 8',
      description: 'Imported legacy SpamTitan documentation.',
      pages: pages.filter((page) => page.area === 'spamtitan-legacy'),
    },
  ];

  for (const collection of collections) {
    const outputPath = path.join(siteDocsRoot, collection.route, 'index.md');
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, collectionIndexMarkdown(collection));
  }
}

function collectionIndexMarkdown(collection: {
  route: string;
  title: string;
  description: string;
  pages: PageCandidate[];
}): string {
  const grouped = groupBy(collection.pages, (page) => page.folder ?? page.productStream ?? page.contentType);
  const groups = Object.entries(grouped).map(([label, pages]) => {
    const links = pages
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((page) => `- [${escapeMarkdownLinkText(page.title)}](${basePath}/${page.route}/)`)
      .join('\n');
    return `## ${titleCase(label)}\n\n${links}`;
  });

  return `${frontmatter(collection.title, collection.description)}\n\n> Generated import index: ${collection.pages.length} pages\n\n${groups.join('\n\n')}\n`;
}

function groupBy<T>(items: T[], key: (item: T) => string): Record<string, T[]> {
  return items.reduce<Record<string, T[]>>((groups, item) => {
    const value = key(item);
    groups[value] = groups[value] ?? [];
    groups[value].push(item);
    return groups;
  }, {});
}

function titleCase(value: string): string {
  return value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function escapeMarkdownLinkText(value: string): string {
  return value.replace(/\[/g, '\\[').replace(/\]/g, '\\]');
}

export async function convertFreshdeskArticle(
  page: PageCandidate,
  html: string,
  warnings: string[],
  sourceLinkIndex: SourceLinkIndex,
  assetDownloader: AssetDownloader = downloadAsset,
): Promise<string> {
  const $ = cheerio.load(html);
  const article = $('.fw-content--single-article, article.article-body, #article-body').first();
  if (!article.length) {
    warnings.push('No Freshdesk article body found; converted main content fallback.');
  }
  const body = article.length ? article : $('#fw-main-content, #content').first();
  cleanupBody($, body);
  const title = cleanText($('.heading, h1, h2').first().text()) || page.title;
  const modified = cleanText($('p:contains("Modified on")').first().text()).replace(/^Modified on:\s*/, '');
  const htmlForMarkdown = await rewriteAssetsAndLinks($, body, page, warnings, sourceLinkIndex, assetDownloader);
  const markdown = normaliseMarkdown(turndown.turndown(htmlForMarkdown));
  const sourceNote = sourceBlock(page, modified);
  return `${frontmatter(title, `Imported from ${page.sourceHost}`)}\n\n${sourceNote}\n\n${markdown}\n`;
}

export async function convertDocsPage(
  page: PageCandidate,
  html: string,
  warnings: string[],
  sourceLinkIndex: SourceLinkIndex,
  assetDownloader: AssetDownloader = downloadAsset,
): Promise<string> {
  const $ = cheerio.load(html, { xmlMode: false });
  const body = $('#topic-content section').first();
  if (!body.length) {
    warnings.push('No Paligo topic section found; converted topic content fallback.');
  }
  const selected = body.length ? body : $('#topic-content, article').first();
  cleanupBody($, selected);
  const title = docsPageTitle($, selected, page.title);
  appendDocsSectionIndex($, selected, page);
  const htmlForMarkdown = await rewriteAssetsAndLinks($, selected, page, warnings, sourceLinkIndex, assetDownloader);
  const markdown = normaliseMarkdown(turndown.turndown(htmlForMarkdown));
  return `${frontmatter(title, `Imported from ${page.sourceHost}`)}\n\n${sourceBlock(page)}\n\n${markdown}\n`;
}

function docsPageTitle($: cheerio.CheerioAPI, body: cheerio.Cheerio<unknown>, fallback: string): string {
  const headings = body.find('h1.title, h2.title, h3.title, h4.title, h5.title, h6.title, h1, h2, h3, h4, h5, h6');
  for (const heading of headings.toArray()) {
    const title = cleanText($(heading).text());
    if (title && title.toLowerCase() !== 'in this section') return title;
  }
  return cleanText($('title').first().text()) || fallback;
}

export function docsContentTitle(html: string, fallback = ''): string {
  const $ = cheerio.load(`<main>${html}</main>`, { xmlMode: false });
  return docsPageTitle($, $('main'), fallback);
}

function appendDocsSectionIndex($: cheerio.CheerioAPI, body: cheerio.Cheerio<unknown>, page: PageCandidate) {
  const children = docsSectionIndexItems($.root().html() ?? '', page.sourceId, page.sourceUrl);
  if (children.length === 0) return;

  const section = $('<section data-imported-section-index="true"><h2>In this Section</h2><ul></ul></section>');
  const list = section.find('ul');
  for (const child of children) {
    const item = $('<li><a></a></li>');
    item.find('a').attr('href', child.href).text(child.text);
    list.append(item);
  }
  body.append(section);
}

export function docsSectionIndexItems(
  html: string,
  sourceId: string,
  sourceUrl: string,
): Array<{ href: string; text: string }> {
  const $ = cheerio.load(html, { xmlMode: false });
  const current = $(`aside.site-sidebar a[data-permalink="${sourceId}.html"]`).first();
  if (!current.length) return [];

  return current
    .closest('li')
    .children('ul')
    .children('li')
    .map((_, child) => {
      const link = $(child).children('a').first();
      const href = link.attr('href');
      const text = cleanText(link.text());
      return href && text ? { href: new URL(href, sourceUrl).toString(), text } : undefined;
    })
    .get()
    .filter((item): item is { href: string; text: string } => Boolean(item));
}

function cleanupBody($: cheerio.CheerioAPI, body: cheerio.Cheerio<unknown>) {
  body.find('script, style, noscript, form, button, iframe').remove();
  body.find('.print--remove, .solution-print--icon, .article-vote, #vote-feedback-container').remove();
  body.find('.footer-content, footer, .breadcrumb-container, .section-toc').remove();
  preservePaligoAdmonitions($, body);
  body.find('[style]').removeAttr('style');
  body.find('[class]').removeAttr('class');
  body.find('[data-origin-id], [data-publication-date], [data-permalink], [data-topic-level], [data-relative-prefix]').removeAttr(
    'data-origin-id data-publication-date data-permalink data-topic-level data-relative-prefix',
  );
  body.find('a[href^="#"]').each((_, element) => {
    const text = cleanText($(element).text());
    if (!text) $(element).remove();
  });
}

function preservePaligoAdmonitions($: cheerio.CheerioAPI, body: cheerio.Cheerio<unknown>) {
  body.find('div.note, div.tip, div.important, div.warning, div.caution').each((_, element) => {
    const classes = ($(element).attr('class') ?? '').split(/\s+/);
    const sourceType = classes.find((name) => paligoAdmonitionTypes.has(name));
    if (!sourceType) return;

    const type = paligoAdmonitionTypes.get(sourceType) ?? 'note';
    const wrapper = $(element);
    const title = cleanText(wrapper.children('h1.title, h2.title, h3.title, h4.title, h5.title, h6.title').first().text());
    wrapper.attr('data-import-admonition', type);
    if (title) wrapper.attr('data-import-admonition-title', title);
    wrapper.children('h1.title, h2.title, h3.title, h4.title, h5.title, h6.title').first().remove();
  });
}

export function htmlFragmentToMarkdown(html: string): string {
  const $ = cheerio.load(`<main>${html}</main>`, { xmlMode: false });
  const body = $('main');
  cleanupBody($, body);
  return normaliseMarkdown(turndown.turndown(body.html() ?? ''));
}

export async function rewriteAssetsAndLinks(
  $: cheerio.CheerioAPI,
  body: cheerio.Cheerio<unknown>,
  page: PageCandidate,
  warnings: string[],
  sourceLinkIndex: SourceLinkIndex,
  assetDownloader: AssetDownloader = downloadAsset,
): Promise<string> {
  const images = body.find('img').toArray();
  for (const image of images) {
    const src = $(image).attr('src');
    if (!src) continue;
    const absolute = new URL(src, page.sourceUrl).toString();
    try {
      const assetPath = await assetDownloader(absolute, page);
      $(image).attr('src', `${basePath}/${assetPath}`);
    } catch (error) {
      warnings.push(`Failed to download image ${absolute}: ${String(error)}`);
    }
  }

  body.find('a[href]').each((_, element) => {
    const href = $(element).attr('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:')) return;
    try {
      const absolute = new URL(href, page.sourceUrl).toString();
      const internal = resolveMigratedSourceHref(absolute, sourceLinkIndex);
      if (internal) {
        $(element).attr('href', internal);
      } else {
        if (sourceLinkKey(absolute)) {
          warnings.push(`Unresolved source-domain link: ${absolute}`);
          $(element).replaceWith($(element).text());
        } else {
          $(element).attr('href', absolute);
        }
      }
    } catch {
      warnings.push(`Could not normalise link: ${href}`);
    }
  });

  return body.html() ?? '';
}

async function downloadAsset(assetUrl: string, page: PageCandidate): Promise<string> {
  const response = await fetch(assetUrl);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const contentType = response.headers.get('content-type') ?? '';
  const ext = extensionFromUrl(assetUrl, contentType);
  const digest = crypto.createHash('sha256').update(buffer).digest('hex').slice(0, 12);
  const fileName = `${digest}${ext}`;
  const relative = path.posix.join('imported-assets', page.area, page.sourceId, fileName);
  const fullPath = path.join(repoRoot, 'site/public', relative);
  await fs.mkdir(path.dirname(fullPath), { recursive: true });
  await fs.writeFile(fullPath, buffer);
  return relative;
}

async function runQa() {
  const docs = await collectFiles(siteDocsRoot, '.mdx');
  const md = await collectFiles(siteDocsRoot, '.md');
  const files = [...docs, ...md];
  const blocked = [
    'Was this article helpful?',
    "Sorry we couldn't be helpful",
    'Require further support? Submit a ticket',
  ];
  const failures: string[] = [];
  const sourceLinkIndex = await buildSourceLinkIndexFromGeneratedFiles(files);
  for (const file of files) {
    const content = await fs.readFile(file, 'utf8');
    for (const phrase of blocked) {
      if (content.includes(phrase)) failures.push(`${path.relative(repoRoot, file)} contains "${phrase}"`);
    }
    for (const link of unrewrittenMigratedSourceLinks(content, sourceLinkIndex)) {
      failures.push(`${path.relative(repoRoot, file)} contains migrated source link that should have been rewritten "${link}"`);
    }
    for (const link of sourceDomainBodyLinks(content)) {
      failures.push(`${path.relative(repoRoot, file)} contains source-domain body link "${link}"`);
    }
  }
  if (failures.length > 0) {
    console.error(failures.join('\n'));
    process.exit(1);
  }
  console.log(`QA passed for ${files.length} content files.`);
}

async function readSourcesConfig(): Promise<SourcesConfig> {
  const file = path.join(repoRoot, 'migration/sources.yml');
  const content = await fs.readFile(file, 'utf8');
  return parseSourcesConfig(content);
}

export function parseSourcesConfig(content: string): SourcesConfig {
  const parsed = YAML.parse(content);
  const result = sourcesConfigSchema.safeParse(parsed);
  if (result.success) return result.data;

  const message = result.error.issues
    .map((issue) => `${issue.path.join('.') || '<root>'}: ${issue.message}`)
    .join('\n');
  throw new Error(`Invalid migration/sources.yml:\n${message}`);
}

async function fetchText(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'docs-platform-poc/0.1 (+https://github.com/otherjamesbrown/docs-test)',
    },
  });
  if (!response.ok) throw new Error(`Failed to fetch ${url}: HTTP ${response.status}`);
  return response.text();
}

function frontmatter(title: string, description: string): string {
  return `---\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(description)}\n---`;
}

function sourceBlock(page: PageCandidate, modified?: string): string {
  const lines = [
    `> Source: [${page.sourceHost}](${page.sourceUrl})`,
    `> Product: ${page.product}`,
    `> Imported content type: ${page.contentType}`,
  ];
  if (page.productStream) lines.push(`> Product stream: ${page.productStream}`);
  if (page.folder) lines.push(`> Source folder: ${page.folder}`);
  if (modified) lines.push(`> Modified: ${modified}`);
  return lines.join('\n');
}

export function normaliseMarkdown(markdown: string): string {
  return markdown
    .split(/(```[\s\S]*?```)/g)
    .map((section) => (section.startsWith('```') ? normaliseMarkdownCodeFence(section) : normaliseMarkdownText(section)))
    .join('')
    .trim();
}

function normaliseMarkdownCodeFence(markdown: string): string {
  return markdown.replace(/[ \t]+$/gm, '');
}

function normaliseMarkdownText(markdown: string): string {
  return markdown
    .replace(/\u00a0/g, ' ')
    .replace(/[ \t]+$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/^#{1}\s+/gm, '## ');
}

function cleanText(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

function stripArticleNumber(title: string): string {
  return title.replace(/^\d+\s*-\s*/, '');
}

function extractFreshdeskId(url: string): string | undefined {
  return new URL(url).pathname.match(/\/(?:a\/)?solutions\/articles\/(\d+)/)?.[1];
}

function rawPath(page: PageCandidate): string {
  return path.join(rawRoot, page.area, `${safeFileName(page.sourceId)}.html`);
}

function safeFileName(value: string): string {
  return value.replace(/[^a-zA-Z0-9._-]/g, '-');
}

function extensionFromUrl(url: string, contentType: string): string {
  const pathname = new URL(url).pathname;
  const ext = path.extname(pathname);
  if (ext && ext.length <= 6) return ext;
  if (contentType.includes('png')) return '.png';
  if (contentType.includes('jpeg') || contentType.includes('jpg')) return '.jpg';
  if (contentType.includes('gif')) return '.gif';
  if (contentType.includes('svg')) return '.svg';
  return '.bin';
}

function dedupePages(pages: PageCandidate[]): PageCandidate[] {
  const seenSources = new Set<string>();
  const seenRoutes = new Set<string>();
  const uniquePages: PageCandidate[] = [];

  for (const page of pages) {
    if (seenSources.has(page.sourceUrl)) continue;
    seenSources.add(page.sourceUrl);

    let route = page.route;
    let outputPath = page.outputPath;
    if (seenRoutes.has(route)) {
      const suffix = uniqueRouteSuffix(page.sourceId);
      route = `${page.route}-${suffix}`;
      outputPath = `${route}.md`;
    }
    let collision = 2;
    while (seenRoutes.has(route)) {
      route = `${page.route}-${uniqueRouteSuffix(page.sourceId)}-${collision}`;
      outputPath = `${route}.md`;
      collision += 1;
    }

    seenRoutes.add(route);
    uniquePages.push({ ...page, route, outputPath });
  }

  return uniquePages;
}

function uniqueRouteSuffix(sourceId: string): string {
  return slugify(sourceId.match(/^\d+/)?.[0] ?? sourceId).slice(0, 32);
}

function toManifest(pages: PageCandidate[]) {
  return pages.map((page) => ({
    source_key: `${page.sourceHost}:${page.sourceId}`,
    source_id: page.sourceId,
    source_host: page.sourceHost,
    source_url: page.sourceUrl,
    canonical_host: page.canonicalHost,
    product: page.product,
    product_stream: page.productStream,
    content_type: page.contentType,
    discovered_from: page.breadcrumbs.join(' > '),
    breadcrumbs: page.breadcrumbs,
    title: page.title,
    status: 'discovered',
    route: `${basePath}/${page.route}/`,
    warnings: [],
  }));
}

type SourceLinkIndex = Map<string, string>;

export function buildSourceLinkIndex(pages: Array<Pick<PageCandidate, 'sourceUrl' | 'route'>>): SourceLinkIndex {
  const index: SourceLinkIndex = new Map();
  for (const page of pages) {
    const key = sourceLinkKey(page.sourceUrl);
    if (key) index.set(key, `${basePath}/${page.route}/`);
  }
  return index;
}

export function resolveMigratedSourceHref(href: string, sourceLinkIndex: SourceLinkIndex): string | undefined {
  const key = sourceLinkKey(href);
  if (!key) return undefined;
  return sourceLinkIndex.get(key);
}

export function unrewrittenMigratedSourceLinks(content: string, sourceLinkIndex: SourceLinkIndex): string[] {
  const unrewritten = new Set<string>();
  for (const href of sourceDomainBodyLinks(content)) {
    if (resolveMigratedSourceHref(href, sourceLinkIndex)) unrewritten.add(href);
  }
  return [...unrewritten].sort();
}

export function sourceDomainBodyLinks(content: string): string[] {
  const body = stripFrontmatter(content)
    .split('\n')
    .filter((line) => !line.startsWith('> Source:'))
    .join('\n');
  const links = new Set<string>();
  const linkPattern = /\[[^\]]+\]\(([^\s)]+)(?:\s+["'][^"']+["'])?\)/g;
  for (const match of body.matchAll(linkPattern)) {
    const href = match[1];
    if (href && sourceLinkKey(href)) links.add(href);
  }
  const bareUrlPattern = /https?:\/\/[^\s)"'<>]+/g;
  for (const match of body.matchAll(bareUrlPattern)) {
    const href = match[0].replace(/[.,;:!?]+$/, '');
    if (sourceLinkKey(href)) links.add(href);
  }
  return [...links].sort();
}

async function buildSourceLinkIndexFromGeneratedFiles(files: string[]): Promise<SourceLinkIndex> {
  const pages: Array<Pick<PageCandidate, 'sourceUrl' | 'route'>> = [];
  for (const file of files) {
    const content = await fs.readFile(file, 'utf8');
    const sourceUrl = content.match(/^> Source: \[[^\]]+\]\(([^)]+)\)/m)?.[1];
    if (!sourceUrl) continue;
    pages.push({
      sourceUrl,
      route: path
        .relative(siteDocsRoot, file)
        .replace(/\\/g, '/')
        .replace(/(?:\/index)?\.mdx?$/, ''),
    });
  }
  return buildSourceLinkIndex(pages);
}

function sourceLinkKey(href: string): string | undefined {
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return undefined;
  }

  const freshdeskId = url.pathname.match(/\/(?:support\/)?(?:a\/)?solutions\/articles\/(\d+)/)?.[1];
  if (freshdeskId) return `${url.hostname}:freshdesk:${freshdeskId}`;

  const titanhqDocsId = url.pathname.match(/^\/en\/(\d+)-[^/]+\.html?$/)?.[1];
  if (titanhqDocsId) return `${url.hostname}:docs:${titanhqDocsId}`;

  return undefined;
}

function stripFrontmatter(content: string): string {
  return content.replace(/^---\n[\s\S]*?\n---\n?/, '');
}

async function writeJson(file: string, value: unknown) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, `${JSON.stringify(value, null, 2)}\n`);
}

async function exists(file: string): Promise<boolean> {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

async function collectFiles(dir: string, ext: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return collectFiles(full, ext);
      return entry.isFile() && entry.name.endsWith(ext) ? [full] : [];
    }),
  );
  return files.flat();
}

function getNumberArg(args: string[], name: string): number | undefined {
  const index = args.indexOf(name);
  if (index === -1) return undefined;
  const value = Number(args[index + 1]);
  return Number.isFinite(value) ? value : undefined;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
