import { afterEach, describe, expect, it, vi } from 'vitest';
import { discoverDocs } from '../../src/discover/docs';
import type { DocsSourceConfig } from '../../src/shared/types';

const source: DocsSourceConfig = {
  id: 'docs',
  type: 'titanhq_static_docs_branch',
  base_url: 'https://support.example.com',
  area: 'spamtitan-skellig',
  route_base: 'products/example/docs',
  breadcrumbs: ['Example', 'Docs'],
  seeds: [{ path: '/en/100-parent.html', child_depth: 1 }],
};

const options = {
  area: 'spamtitan-skellig' as const,
  sourceHost: 'support.example.com',
  canonicalHost: 'support.example.com',
  routeBase: 'products/example/docs',
  product: 'Example',
  productStream: 'skellig',
  breadcrumbs: ['Example', 'Docs'],
};

const parentHtml = `
  <html>
    <body>
      <aside class="site-sidebar">
        <ul>
          <li>
            <a href="100-parent.html" data-permalink="100-parent.html">Parent</a>
            <ul>
              <li><a href="101-child.html" data-permalink="101-child.html">Child</a></li>
              <li><a href="101-child.html" data-permalink="101-child.html">Duplicate Child</a></li>
              <li><a href="101-child.html#section" data-permalink="101-child.html">Hash Child</a></li>
              <li><a href="https://external.example.com/en/102-external.html">External</a></li>
            </ul>
          </li>
        </ul>
      </aside>
      <main id="topic-content"><section><h2 class="title">Parent Title</h2></section></main>
    </body>
  </html>
`;

const childHtml = `
  <html>
    <body>
      <aside class="site-sidebar">
        <ul>
          <li>
            <a href="100-parent.html" data-permalink="100-parent.html">Parent</a>
            <ul><li><a href="101-child.html" data-permalink="101-child.html">Child</a></li></ul>
          </li>
        </ul>
      </aside>
      <main id="topic-content"><section><h3 class="title">Child Title</h3></section></main>
    </body>
  </html>
`;

describe('discoverDocs', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('expands child_depth as BFS while filtering hashes, external hosts, and duplicate pages', async () => {
    const pagesByUrl = new Map([
      ['https://support.example.com/en/100-parent.html', parentHtml],
      ['https://support.example.com/en/101-child.html', childHtml],
    ]);
    const fetched: string[] = [];
    vi.stubGlobal('fetch', async (url: string) => {
      fetched.push(url);
      return {
        ok: true,
        text: async () => pagesByUrl.get(url) ?? '',
      };
    });

    const pages = await discoverDocs(source, options);

    expect(fetched).toEqual([
      'https://support.example.com/en/100-parent.html',
      'https://support.example.com/en/101-child.html',
    ]);
    expect(pages.map((page) => [page.sourceId, page.title, page.route])).toEqual([
      ['100-parent', 'Parent Title', 'products/example/docs/parent'],
      ['101-child', 'Child Title', 'products/example/docs/child'],
    ]);
    expect(pages[0]).toMatchObject({ navOrder: 0 });
    expect(pages[1]).toMatchObject({
      parentSourceUrl: 'https://support.example.com/en/100-parent.html',
      navOrder: 0,
    });
  });

  it('normalises .htm docs source IDs before generating routes', async () => {
    vi.stubGlobal('fetch', async () => ({
      ok: true,
      text: async () => childHtml,
    }));

    const pages = await discoverDocs({ ...source, seeds: ['/en/9856-available-services.htm'] }, options);

    expect(pages[0]).toMatchObject({
      sourceId: '9856-available-services',
      route: 'products/example/docs/available-services',
    });
  });
});
