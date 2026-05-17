import { describe, expect, it } from 'vitest';
import { docsContentTitle } from '../../src/convert/docs-page';

describe('docsContentTitle', () => {
  it('uses the first real heading and skips In this Section headings', () => {
    expect(
      docsContentTitle(`
        <section>
          <h2>In this Section</h2>
          <h3 class="title">Actual Topic</h3>
        </section>
      `),
    ).toBe('Actual Topic');
  });

  it('falls back to the document title when no topic heading is present', () => {
    expect(docsContentTitle('<title>Document Title</title><p>No heading.</p>')).toBe('Document Title');
  });

  it('falls back to the provided fallback title last', () => {
    expect(docsContentTitle('<p>No title.</p>', 'Fallback Title')).toBe('Fallback Title');
  });
});
