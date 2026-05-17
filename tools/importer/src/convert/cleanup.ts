import * as cheerio from 'cheerio';
import type { AnyNode } from 'domhandler';
import { cleanText } from '../shared/text';
import { normaliseMarkdown, turndown } from './markdown';

const paligoAdmonitionTypes = new Map([
  ['note', 'note'],
  ['tip', 'tip'],
  ['important', 'note'],
  ['warning', 'danger'],
  ['caution', 'caution'],
]);

export function cleanupBody($: cheerio.CheerioAPI, body: cheerio.Cheerio<AnyNode>) {
  body.find('script, style, noscript, form, button, iframe').remove();
  body.find('.print--remove, .solution-print--icon, .article-vote, #vote-feedback-container').remove();
  body.find('.footer-content, footer, .breadcrumb-container, .section-toc').remove();
  preservePaligoAdmonitions($, body);
  body.find('[style]').removeAttr('style');
  body.find('[class]').removeAttr('class');
  body
    .find('[data-origin-id], [data-publication-date], [data-permalink], [data-topic-level], [data-relative-prefix]')
    .removeAttr('data-origin-id data-publication-date data-permalink data-topic-level data-relative-prefix');
  body.find('a[href^="#"]').each((_, element) => {
    const text = cleanText($(element).text());
    if (!text) $(element).remove();
  });
}

export function htmlFragmentToMarkdown(html: string): string {
  const $ = cheerio.load(`<main>${html}</main>`, { xmlMode: false });
  const body = $('main');
  cleanupBody($, body);
  return normaliseMarkdown(turndown.turndown(body.html() ?? ''));
}

function preservePaligoAdmonitions($: cheerio.CheerioAPI, body: cheerio.Cheerio<AnyNode>) {
  body.find('div.note, div.tip, div.important, div.warning, div.caution').each((_, element) => {
    const classes = ($(element).attr('class') ?? '').split(/\s+/);
    const sourceType = classes.find((name) => paligoAdmonitionTypes.has(name));
    if (!sourceType) return;

    const type = paligoAdmonitionTypes.get(sourceType) ?? 'note';
    const wrapper = $(element);
    const titleElement = wrapper.children('h1.title, h2.title, h3.title, h4.title, h5.title, h6.title').first();
    const title = cleanText(titleElement.text());
    wrapper.attr('data-import-admonition', type);
    if (title) wrapper.attr('data-import-admonition-title', title);
    if (!wrapper.parents('table').length) {
      titleElement.remove();
    }
  });
}
