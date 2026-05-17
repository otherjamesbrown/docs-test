import * as cheerio from 'cheerio';
import type { AnyNode } from 'domhandler';
import { cleanText } from '../shared/text';
import type { AssetDownloader, PageCandidate } from '../shared/types';
import { cleanupBody } from './cleanup';
import { downloadAsset } from './assets';
import { rewriteAssetsAndLinks, type SourceLinkIndex } from './links';
import { frontmatter, normaliseMarkdown, sourceBlock, turndown } from './markdown';

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
  const title = articleTitle($, body) || page.title;
  const modified = cleanText($('p:contains("Modified on")').first().text()).replace(/^Modified on:\s*/, '');
  const htmlForMarkdown = await rewriteAssetsAndLinks($, body, page, warnings, sourceLinkIndex, assetDownloader);
  const markdown = normaliseMarkdown(turndown.turndown(htmlForMarkdown));
  return `${frontmatter(title, `Imported from ${page.sourceHost}`)}\n\n${sourceBlock(page, modified)}\n\n${markdown}\n`;
}

function articleTitle($: cheerio.CheerioAPI, body: cheerio.Cheerio<AnyNode>): string {
  const heading = body.find('.heading, h1, h2').first();
  if (heading.length) return cleanText(heading.text());

  const globalHeading = $('.heading, h1, h2').first().clone();
  globalHeading.find('.print--remove, .solution-print--icon, .text-print').remove();
  return cleanText(globalHeading.text());
}
