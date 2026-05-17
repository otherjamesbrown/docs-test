import * as cheerio from 'cheerio';
import type { AnyNode } from 'domhandler';
import { basePath } from '../shared/paths';
import type { AssetDownloader, PageCandidate } from '../shared/types';
import { downloadAsset, importedAssetHref } from './assets';

export type SourceLinkIndex = Map<string, string>;

export async function rewriteAssetsAndLinks(
  $: cheerio.CheerioAPI,
  body: cheerio.Cheerio<AnyNode>,
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
      $(image).attr('src', importedAssetHref(await assetDownloader(absolute, page)));
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
      } else if (sourceLinkKey(absolute)) {
        warnings.push(`Unresolved source-domain link: ${absolute}`);
        $(element).replaceWith($(element).text());
      } else {
        $(element).attr('href', absolute);
      }
    } catch {
      warnings.push(`Could not normalise link: ${href}`);
    }
  });

  return body.html() ?? '';
}

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

export function sourceLinkKey(href: string): string | undefined {
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return undefined;
  }
  const host = canonicalSourceHost(url.hostname);

  const freshdeskId = url.pathname.match(/\/(?:support\/)?(?:a\/)?solutions\/articles\/(\d+)/)?.[1];
  if (freshdeskId) return `${host}:freshdesk:${freshdeskId}`;

  const titanhqDocsId = url.pathname.match(/^\/en\/(\d+)-[^/]+\.html?$/)?.[1];
  if (titanhqDocsId) return `${host}:docs:${titanhqDocsId}`;

  return undefined;
}

function canonicalSourceHost(host: string): string {
  if (host === 'support-staging.titanhq.com') return 'support.titanhq.com';
  return host;
}

function stripFrontmatter(content: string): string {
  return content.replace(/^---\n[\s\S]*?\n---\n?/, '');
}
