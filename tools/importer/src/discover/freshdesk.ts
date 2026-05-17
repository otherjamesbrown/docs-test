import * as cheerio from 'cheerio';
import { fetchText } from '../shared/http';
import { slugify } from '../shared/slug';
import { cleanText, stripArticleNumber } from '../shared/text';
import type { Area, PageCandidate, SourcesConfig } from '../shared/types';

export function configuredFreshdeskFolders(config: SourcesConfig): Array<{
  sourceUrl: string;
  options: FreshdeskFolderDiscoveryOptions;
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

export async function discoverFreshdeskFolder(
  sourceUrl: string,
  options: FreshdeskFolderDiscoveryOptions,
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
    const route = `${options.routeBase}/${slugify(stripArticleNumber(title))}`;
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

interface FreshdeskFolderDiscoveryOptions {
  area: Area;
  sourceHost: string;
  canonicalHost: string;
  routeBase: string;
  folder: string;
  product: string;
  limit: number;
}

function extractFreshdeskId(url: string): string | undefined {
  return new URL(url).pathname.match(/\/(?:a\/)?solutions\/articles\/(\d+)/)?.[1];
}
