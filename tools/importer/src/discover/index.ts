import { readSourcesConfig } from '../shared/config';
import { slugify } from '../shared/slug';
import type { PageCandidate } from '../shared/types';
import { configuredDocsSources, discoverDocs } from './docs';
import { configuredFreshdeskFolders, discoverFreshdeskFolder } from './freshdesk';

export async function discover(limit?: number): Promise<PageCandidate[]> {
  const config = await readSourcesConfig();
  const pages: PageCandidate[] = [];

  for (const { sourceUrl, options } of configuredFreshdeskFolders(config)) {
    pages.push(...(await discoverFreshdeskFolder(sourceUrl, options)));
  }

  for (const { source, options } of configuredDocsSources(config)) {
    pages.push(...(await discoverDocs(source, options)));
  }

  const unique = dedupePages(pages);
  return typeof limit === 'number' ? unique.slice(0, limit) : unique;
}

export function dedupePages(pages: PageCandidate[]): PageCandidate[] {
  const seenSources = new Set<string>();
  const seenRoutes = new Set<string>();
  const uniquePages: PageCandidate[] = [];

  for (const page of pages) {
    if (seenSources.has(page.sourceUrl)) continue;
    seenSources.add(page.sourceUrl);

    const suffix = uniqueRouteSuffix(page.sourceId);
    let route = page.route;
    let outputPath = page.outputPath;
    let collision = 1;
    while (seenRoutes.has(route)) {
      const collisionSuffix = collision === 1 ? suffix : `${suffix}-${collision}`;
      route = `${page.route}-${collisionSuffix}`;
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
