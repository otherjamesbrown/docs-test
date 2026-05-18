import * as cheerio from 'cheerio';
import type { AnyNode } from 'domhandler';
import { cleanText } from '../shared/text';
import type { AssetDownloader, PageCandidate } from '../shared/types';
import { cleanupBody } from './cleanup';
import { downloadAsset } from './assets';
import { rewriteAssetsAndLinks, type SourceLinkIndex } from './links';
import { frontmatter, normaliseMarkdown, sourceBlock, turndown } from './markdown';

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

export function docsContentTitle(html: string, fallback = ''): string {
  const $ = cheerio.load(`<main>${html}</main>`, { xmlMode: false });
  return docsPageTitle($, $('main'), fallback);
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

export function docsSidebarItemMetadata(
  html: string,
  sourceId: string,
  sourceUrl: string,
): { parentSourceUrl?: string; navOrder?: number } {
  const $ = cheerio.load(html, { xmlMode: false });
  const current = $(`aside.site-sidebar a[data-permalink="${sourceId}.html"]`).first();
  if (!current.length) return {};

  const currentItem = current.closest('li');
  const parentLink = currentItem.parent('ul').closest('li').children('a[href]').first();
  const parentHref = parentLink.attr('href');
  const parentSourceUrl = parentHref ? new URL(parentHref, sourceUrl).toString() : undefined;
  return {
    parentSourceUrl,
    navOrder: currentItem.prevAll('li').length,
  };
}

function docsPageTitle($: cheerio.CheerioAPI, body: cheerio.Cheerio<AnyNode>, fallback: string): string {
  const headings = body.find('h1.title, h2.title, h3.title, h4.title, h5.title, h6.title, h1, h2, h3, h4, h5, h6');
  for (const heading of headings.toArray()) {
    const title = cleanText($(heading).text());
    if (title && title.toLowerCase() !== 'in this section') return title;
  }
  return cleanText($('title').first().text()) || fallback;
}

function appendDocsSectionIndex($: cheerio.CheerioAPI, body: cheerio.Cheerio<AnyNode>, page: PageCandidate) {
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
