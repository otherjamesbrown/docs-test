import TurndownService from 'turndown';
import type { PageCandidate } from '../shared/types';

export const turndown = new TurndownService({
  codeBlockStyle: 'fenced',
  headingStyle: 'atx',
  bulletListMarker: '-',
});

turndown.addRule('strikethrough', {
  filter: ['del', 's', 'strike'],
  replacement: (content) => `~~${content}~~`,
});

turndown.addRule('starlightAside', {
  filter: (node) =>
    node.nodeName === 'DIV' &&
    Boolean(
      (node as unknown as { getAttribute?: (name: string) => string | null }).getAttribute?.('data-import-admonition'),
    ),
  replacement: (content, node) => {
    const element = node as unknown as { getAttribute?: (name: string) => string | null };
    const type = element.getAttribute?.('data-import-admonition') ?? 'note';
    const title = element.getAttribute?.('data-import-admonition-title');
    const label = title && title.toLowerCase() !== type ? `[${title.replace(/\]/g, '\\]')}]` : '';
    const body = content.trim();
    return body ? `\n\n:::${type}${label}\n${body}\n:::\n\n` : '';
  },
});

export function frontmatter(title: string, description: string): string {
  return `---\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(description)}\n---`;
}

export function sourceBlock(page: PageCandidate, modified?: string): string {
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
    .map((section) =>
      section.startsWith('```') ? normaliseMarkdownCodeFence(section) : normaliseMarkdownText(section),
    )
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
