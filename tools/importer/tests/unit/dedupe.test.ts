import { describe, expect, it } from 'vitest';
import { dedupePages } from '../../src/discover';
import type { PageCandidate } from '../../src/shared/types';

function page(overrides: Partial<PageCandidate>): PageCandidate {
  return {
    area: 'spamtitan-kb',
    sourceId: '4000000000',
    sourceUrl: 'https://helpdesk.example.com/support/solutions/articles/4000000000',
    sourceHost: 'helpdesk.example.com',
    canonicalHost: 'helpdesk.example.com',
    title: 'Example',
    route: 'products/example/article',
    outputPath: 'products/example/article.md',
    contentType: 'kb_article',
    breadcrumbs: ['Example', 'Knowledge Base'],
    product: 'Example',
    ...overrides,
  };
}

describe('dedupePages', () => {
  it('keeps the first page for duplicate source URLs', () => {
    const pages = dedupePages([
      page({ title: 'First' }),
      page({ title: 'Duplicate source', route: 'products/example/duplicate-source' }),
    ]);

    expect(pages).toHaveLength(1);
    expect(pages[0]?.title).toBe('First');
  });

  it('adds stable source-id suffixes when routes collide', () => {
    const pages = dedupePages([
      page({ sourceId: '4000000001', sourceUrl: 'https://example.com/a/1' }),
      page({ sourceId: '4000000002', sourceUrl: 'https://example.com/a/2' }),
      page({ sourceId: '4000000002-alpha', sourceUrl: 'https://example.com/a/3' }),
    ]);

    expect(pages.map((item) => item.route)).toEqual([
      'products/example/article',
      'products/example/article-4000000002',
      'products/example/article-4000000002-2',
    ]);
    expect(pages.map((item) => item.outputPath)).toEqual([
      'products/example/article.md',
      'products/example/article-4000000002.md',
      'products/example/article-4000000002-2.md',
    ]);
  });

  it('truncates very long source-id suffixes', () => {
    const longId = 'abcdef1234567890abcdef1234567890abcdef';
    const pages = dedupePages([
      page({ sourceId: 'first', sourceUrl: 'https://example.com/a/first' }),
      page({ sourceId: longId, sourceUrl: 'https://example.com/a/long' }),
    ]);

    expect(pages[1]?.route).toBe('products/example/article-abcdef1234567890abcdef1234567890');
  });
});
