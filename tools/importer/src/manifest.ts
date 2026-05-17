import { readJson } from './shared/files';
import { basePath, manifestPath } from './shared/paths';
import { escapeRegExp } from './shared/text';
import type { ManifestEntry, PageCandidate } from './shared/types';

export function toManifest(pages: PageCandidate[]): ManifestEntry[] {
  return pages.map((page) => ({
    area: page.area,
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
    folder: page.folder,
    title: page.title,
    status: 'discovered',
    route: `${basePath}/${page.route}/`,
    warnings: [],
  }));
}

export async function readPagesFromManifest(limit?: number): Promise<PageCandidate[]> {
  let manifest: ManifestEntry[];
  try {
    manifest = (await readJson(manifestPath)) as ManifestEntry[];
  } catch (error) {
    throw new Error(
      `No migration manifest found at ${manifestPath}. Run npm run import:discover first. ${String(error)}`,
    );
  }

  const pages = manifest.map(manifestPageToCandidate);
  return typeof limit === 'number' ? pages.slice(0, limit) : pages;
}

function manifestPageToCandidate(page: ManifestEntry): PageCandidate {
  const route = page.route.replace(new RegExp(`^${escapeRegExp(basePath)}/?`), '').replace(/\/$/, '');
  return {
    area: page.area,
    sourceId: page.source_id,
    sourceUrl: page.source_url,
    sourceHost: page.source_host,
    canonicalHost: page.canonical_host,
    title: page.title,
    route,
    outputPath: `${route}.md`,
    contentType: page.content_type === 'docs_page' ? 'docs_page' : 'kb_article',
    breadcrumbs: page.breadcrumbs,
    folder: page.folder,
    product: page.product,
    productStream: page.product_stream,
  };
}
