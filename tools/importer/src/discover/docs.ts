import path from 'node:path';
import * as cheerio from 'cheerio';
import { docsContentTitle, docsSectionIndexItems } from '../convert/docs-page';
import { sourceLinkKey } from '../convert/links';
import { fetchText } from '../shared/http';
import { slugify } from '../shared/slug';
import type { Area, DocsSeedConfig, DocsSourceConfig, PageCandidate, SourcesConfig } from '../shared/types';

export function configuredDocsSources(config: SourcesConfig): Array<{
  source: DocsSourceConfig;
  options: DocsDiscoveryOptions;
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

export async function discoverDocs(source: DocsSourceConfig, options: DocsDiscoveryOptions): Promise<PageCandidate[]> {
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
    const title = docsContentTitle(
      (topicSection.length ? topicSection : $('#topic-content, article').first()).html() ?? '',
      sourceId,
    );
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
      queue.push({ sourceUrl: normaliseDocsPageUrl(url.toString()), childDepth: item.childDepth - 1 });
    }
  }
  return pages;
}

interface DocsDiscoveryOptions {
  area: Area;
  sourceHost: string;
  canonicalHost: string;
  routeBase: string;
  product: string;
  productStream?: string;
  breadcrumbs: string[];
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
