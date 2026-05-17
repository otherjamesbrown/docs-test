export function cleanText(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

export function stripArticleNumber(title: string): string {
  return title.replace(/^\d+\s*-\s*/, '');
}

export function titleCase(value: string): string {
  return value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function escapeMarkdownLinkText(value: string): string {
  return value.replace(/\[/g, '\\[').replace(/\]/g, '\\]');
}

export function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
