import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { collectFiles, writeJson } from '../shared/files';
import { basePath, linkMapPath, manifestPath, rawPath, reportPath, repoRoot, siteDocsRoot } from '../shared/paths';
import { escapeMarkdownLinkText, titleCase } from '../shared/text';
import type { ImportReport, PageCandidate } from '../shared/types';
import { toManifest } from '../manifest';
import { convertDocsPage } from './docs-page';
import { convertFreshdeskArticle } from './freshdesk-article';
import { buildSourceLinkIndex } from './links';
import { frontmatter } from './markdown';

export async function convertAll(pages: PageCandidate[]) {
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

export async function clearGeneratedContent() {
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
      links: [
        { title: 'Knowledge Base', href: `${basePath}/titanhq/products/spamtitan/kb/` },
        { title: 'Docs', href: `${basePath}/titanhq/products/spamtitan/docs/` },
        { title: 'Skellig 9 Docs', href: `${basePath}/titanhq/products/spamtitan/docs/skellig-9/` },
        { title: 'Legacy 8 Docs', href: `${basePath}/titanhq/products/spamtitan/docs/legacy-8/` },
      ],
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
      links: [
        { title: 'Skellig 9', href: `${basePath}/titanhq/products/spamtitan/docs/skellig-9/` },
        { title: 'Legacy 8', href: `${basePath}/titanhq/products/spamtitan/docs/legacy-8/` },
      ],
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
    {
      route: 'titanhq/products/phishtitan',
      title: 'PhishTitan',
      description: 'Imported PhishTitan knowledge base and documentation.',
      pages: pages.filter((page) => page.product === 'PhishTitan'),
      links: [
        { title: 'Knowledge Base', href: `${basePath}/titanhq/products/phishtitan/kb/` },
        { title: 'Docs', href: `${basePath}/titanhq/products/phishtitan/docs/` },
        { title: 'Email Security Docs', href: `${basePath}/titanhq/products/phishtitan/docs/email-security/` },
      ],
    },
    {
      route: 'titanhq/products/phishtitan/kb',
      title: 'PhishTitan Knowledge Base',
      description: 'Imported PhishTitan knowledge base articles.',
      pages: pages.filter((page) => page.area === 'phishtitan-kb'),
    },
    {
      route: 'titanhq/products/phishtitan/docs',
      title: 'PhishTitan Docs',
      description: 'Imported PhishTitan documentation.',
      pages: pages.filter((page) => page.area === 'phishtitan-docs'),
      links: [{ title: 'Email Security', href: `${basePath}/titanhq/products/phishtitan/docs/email-security/` }],
    },
    {
      route: 'titanhq/products/phishtitan/docs/email-security',
      title: 'Email Security',
      description: 'Imported PhishTitan Email Security documentation.',
      pages: pages.filter((page) => page.area === 'phishtitan-docs'),
    },
  ];

  for (const collection of collections) {
    const outputPath = path.join(siteDocsRoot, collection.route, 'index.md');
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, await collectionIndexMarkdown(collection));
  }
}

async function collectionIndexMarkdown(collection: {
  title: string;
  description: string;
  pages: PageCandidate[];
  links?: Array<{ title: string; href: string }>;
}): Promise<string> {
  if (collection.links) {
    const links = collection.links.map((link) => `- [${escapeMarkdownLinkText(link.title)}](${link.href})`).join('\n');

    return `${frontmatter(collection.title, collection.description)}\n\n> Generated import index: ${collection.pages.length} pages\n\n${links}\n`;
  }

  const entries = await collectionIndexEntries(collection.pages);
  const grouped = groupBy(entries, (entry) => entry.page.folder ?? entry.page.productStream ?? entry.page.contentType);
  const groups = Object.entries(grouped).map(([label, entries]) => {
    const links = entries
      .sort((a, b) => a.label.localeCompare(b.label) || a.page.sourceId.localeCompare(b.page.sourceId))
      .map((entry) => `- [${escapeMarkdownLinkText(entry.label)}](${basePath}/${entry.page.route}/)`)
      .join('\n');
    return `## ${titleCase(label)}\n\n${links}`;
  });

  const indexSummary =
    entries.length === collection.pages.length
      ? `${collection.pages.length} pages`
      : `${collection.pages.length} pages; ${entries.length} listed after duplicate content consolidation`;

  return `${frontmatter(collection.title, collection.description)}\n\n> Generated import index: ${indexSummary}\n\n${groups.join('\n\n')}\n`;
}

function groupBy<T>(items: T[], key: (item: T) => string): Record<string, T[]> {
  return items.reduce<Record<string, T[]>>((groups, item) => {
    const value = key(item);
    groups[value] = groups[value] ?? [];
    groups[value].push(item);
    return groups;
  }, {});
}

export interface CollectionIndexEntry {
  page: PageCandidate;
  label: string;
  body: string;
  bodyHash: string;
}

export async function collectionIndexEntries(pages: PageCandidate[]): Promise<CollectionIndexEntry[]> {
  const markdownPages = await Promise.all(
    pages.map(async (page) => {
      const markdown = await fs.readFile(path.join(siteDocsRoot, page.outputPath), 'utf8');
      return { page, markdown };
    }),
  );
  return buildCollectionIndexEntries(markdownPages);
}

export function buildCollectionIndexEntries(
  markdownPages: Array<{ page: PageCandidate; markdown: string }>,
): CollectionIndexEntry[] {
  const entries = markdownPages.map(({ page, markdown }) => {
    const body = normaliseMarkdownForIndex(markdown);
    return {
      page,
      label: page.title,
      body,
      bodyHash: createHash('sha256').update(body).digest('hex'),
    };
  });
  const uniqueEntries = removeDuplicateBodies(entries);
  const canonicalEntries = removeDuplicateTitleVariants(uniqueEntries);
  return labelDuplicateTitles(canonicalEntries);
}

export function normaliseMarkdownForIndex(markdown: string): string {
  return markdown
    .replace(/^---[\s\S]*?---\s*/, '')
    .split('\n')
    .filter(
      (line) =>
        !line.startsWith('> Source:') && !line.startsWith('> Product:') && !line.startsWith('> Imported content type:'),
    )
    .join('\n')
    .replace(/\/docs-test\/imported-assets\/[^)\s"']+/g, '/docs-test/imported-assets/{asset}')
    .replace(/\s+/g, ' ')
    .trim();
}

function removeDuplicateBodies(entries: CollectionIndexEntry[]): CollectionIndexEntry[] {
  const grouped = groupBy(entries, (entry) => `${entry.page.title.toLowerCase()}\n${entry.bodyHash}`);
  return Object.values(grouped)
    .map((duplicates) => selectCanonicalEntry(duplicates))
    .sort((a, b) => a.page.title.localeCompare(b.page.title) || a.page.sourceId.localeCompare(b.page.sourceId));
}

function removeDuplicateTitleVariants(entries: CollectionIndexEntry[]): CollectionIndexEntry[] {
  const grouped = groupBy(
    entries,
    (entry) => `${entry.page.title.toLowerCase()}\n${duplicateTitleQualifier(entry).toLowerCase()}`,
  );
  return Object.values(grouped)
    .map((duplicates) => selectCanonicalEntry(duplicates))
    .sort((a, b) => a.page.title.localeCompare(b.page.title) || a.page.sourceId.localeCompare(b.page.sourceId));
}

function selectCanonicalEntry(entries: CollectionIndexEntry[]): CollectionIndexEntry {
  return [...entries].sort(
    (a, b) =>
      numericRouteSuffixScore(a.page) - numericRouteSuffixScore(b.page) ||
      a.page.route.length - b.page.route.length ||
      a.page.sourceId.localeCompare(b.page.sourceId),
  )[0];
}

function numericRouteSuffixScore(page: PageCandidate): number {
  return /-\d+\/?$/.test(page.route) ? 1 : 0;
}

function labelDuplicateTitles(entries: CollectionIndexEntry[]): CollectionIndexEntry[] {
  const titleGroups = groupBy(entries, (entry) => entry.page.title.toLowerCase());

  return entries.map((entry) => {
    const duplicates = titleGroups[entry.page.title.toLowerCase()] ?? [];
    if (duplicates.length === 1) {
      return entry;
    }

    const qualifier = duplicateTitleQualifier(entry);
    const proposedLabel = `${entry.page.title} (${qualifier})`;
    const proposedLabelCount = duplicates.filter(
      (duplicate) => `${duplicate.page.title} (${duplicateTitleQualifier(duplicate)})` === proposedLabel,
    ).length;
    const uniqueQualifier = proposedLabelCount === 1 ? qualifier : `${qualifier}, source ${sourceIdLabel(entry.page)}`;

    return {
      ...entry,
      label: `${entry.page.title} (${uniqueQualifier})`,
    };
  });
}

function duplicateTitleQualifier(entry: CollectionIndexEntry): string {
  const body = entry.body.toLowerCase();
  const breadcrumbs = entry.page.breadcrumbs.join(' ').toLowerCase();
  const context = `${body} ${breadcrumbs} ${entry.page.route}`.toLowerCase();

  if (context.includes('msp level') || context.includes('as an msp') || context.includes('msp admin')) {
    return 'MSP level';
  }

  if (
    context.includes('customer level') ||
    context.includes('as a customer admin') ||
    context.includes('customer admin')
  ) {
    return 'Customer level';
  }

  if (
    context.includes('logged-in account') ||
    context.includes('authenticator phone app') ||
    context.includes('profile')
  ) {
    return 'Account setup';
  }

  const specificBreadcrumb = [...entry.page.breadcrumbs]
    .reverse()
    .find((breadcrumb) => breadcrumb.toLowerCase() !== entry.page.title.toLowerCase() && breadcrumb.length > 0);

  if (specificBreadcrumb) {
    return specificBreadcrumb;
  }

  return `source ${sourceIdLabel(entry.page)}`;
}

function sourceIdLabel(page: PageCandidate): string {
  const numericPrefix = page.sourceId.match(/^\d+/)?.[0];
  return numericPrefix ?? page.sourceId;
}
