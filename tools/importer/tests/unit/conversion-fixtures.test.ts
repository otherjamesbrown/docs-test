import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { convertDocsPage } from '../../src/convert/docs-page';
import { convertFreshdeskArticle } from '../../src/convert/freshdesk-article';
import { buildSourceLinkIndex } from '../../src/convert/links';

const fixtureRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../fixtures');

const sourceLinkIndex = buildSourceLinkIndex([
  {
    sourceUrl:
      'https://helpdesk.spamtitan.com/support/solutions/articles/4000186889-step-3-test-connectivity-to-your-mail-server',
    route: 'titanhq/products/spamtitan/kb/getting-started-cloud/step-3-test-connectivity-to-your-mail-server',
  },
  {
    sourceUrl: 'https://docs.titanhq.com/en/423-log-in-for-the-first-time.html',
    route: 'titanhq/products/spamtitan/docs/legacy-8/log-in-for-the-first-time',
  },
  {
    sourceUrl: 'https://docs.titanhq.com/en/30225-link-lock-allowed-urls.html',
    route: 'titanhq/products/spamtitan/docs/legacy-8/link-lock-allowed-urls',
  },
]);

const fakeAssetDownloader = async (assetUrl: string) => {
  const filename = path.basename(new URL(assetUrl).pathname);
  return `imported-assets/test/${filename}`;
};

const freshdeskPage = {
  area: 'spamtitan-kb' as const,
  sourceId: '4000186889',
  sourceUrl:
    'https://helpdesk.spamtitan.com/support/solutions/articles/4000186889-step-3-test-connectivity-to-your-mail-server',
  sourceHost: 'helpdesk.spamtitan.com',
  canonicalHost: 'helpdesk.spamtitan.com',
  title: 'Fallback Title',
  route: 'titanhq/products/spamtitan/kb/getting-started-cloud/step-3-test-connectivity-to-your-mail-server',
  outputPath: 'titanhq/products/spamtitan/kb/getting-started-cloud/step-3-test-connectivity-to-your-mail-server.md',
  contentType: 'kb_article' as const,
  breadcrumbs: ['SpamTitan', 'Knowledge Base', 'Getting Started'],
  folder: 'Getting Started',
  product: 'SpamTitan',
};

const docsPage = {
  area: 'spamtitan-legacy' as const,
  sourceId: '30222-link-lock',
  sourceUrl: 'https://docs.titanhq.com/en/30222-link-lock.html',
  sourceHost: 'docs.titanhq.com',
  canonicalHost: 'docs.titanhq.com',
  title: 'Fallback Docs Title',
  route: 'titanhq/products/spamtitan/docs/legacy-8/link-lock',
  outputPath: 'titanhq/products/spamtitan/docs/legacy-8/link-lock.md',
  contentType: 'docs_page' as const,
  breadcrumbs: ['TitanHQ', 'Products', 'SpamTitan', 'Docs', 'Legacy 8'],
  product: 'SpamTitan',
  productStream: 'legacy',
};

async function fixture(name: string) {
  return fs.readFile(path.join(fixtureRoot, name), 'utf8');
}

describe('conversion fixtures', () => {
  it('converts a Freshdesk article with links and images', async () => {
    const warnings: string[] = [];
    const markdown = await convertFreshdeskArticle(
      freshdeskPage,
      await fixture('freshdesk/article-with-links.html'),
      warnings,
      sourceLinkIndex,
      fakeAssetDownloader,
    );

    expect(warnings).toEqual([]);
    expect(markdown).toMatchInlineSnapshot(`
      "---
      title: \"Step 3 - Test Connectivity\"
      description: \"Imported from helpdesk.spamtitan.com\"
      ---

      > Source: [helpdesk.spamtitan.com](https://helpdesk.spamtitan.com/support/solutions/articles/4000186889-step-3-test-connectivity-to-your-mail-server)
      > Product: SpamTitan
      > Imported content type: kb_article
      > Source folder: Getting Started
      > Modified: Tue, 10 Mar, 2026 at 2:45 PM

      Before changing MX records, test delivery.

      Continue with [Step 3](/docs-test/titanhq/products/spamtitan/kb/getting-started-cloud/step-3-test-connectivity-to-your-mail-server/) and keep [external docs](https://example.com/reference).

      ![Connectivity screen](/docs-test/imported-assets/test/connectivity.png)
      "
    `);
  });

  it('converts a Freshdesk fallback body and records a warning', async () => {
    const warnings: string[] = [];
    const markdown = await convertFreshdeskArticle(
      freshdeskPage,
      await fixture('freshdesk/article-fallback.html'),
      warnings,
      sourceLinkIndex,
      fakeAssetDownloader,
    );

    expect(warnings).toEqual(['No Freshdesk article body found; converted main content fallback.']);
    expect(markdown).toContain('title: "Fallback Article"');
    expect(markdown).toContain('[Email support](mailto:support@example.com)');
  });

  it('converts Freshdesk code blocks without mangling comments', async () => {
    const markdown = await convertFreshdeskArticle(
      freshdeskPage,
      await fixture('freshdesk/article-with-code.html'),
      [],
      sourceLinkIndex,
      fakeAssetDownloader,
    );

    expect(markdown).toContain('# keep this as a comment');
    expect(markdown).not.toContain('## keep this as a comment');
  });

  it('converts a Paligo topic and appends section links', async () => {
    const markdown = await convertDocsPage(
      docsPage,
      await fixture('paligo/topic-with-section-index.html'),
      [],
      sourceLinkIndex,
      fakeAssetDownloader,
    );

    expect(markdown).toMatchInlineSnapshot(`
      "---
      title: \"Link Lock\"
      description: \"Imported from docs.titanhq.com\"
      ---

      > Source: [docs.titanhq.com](https://docs.titanhq.com/en/30222-link-lock.html)
      > Product: SpamTitan
      > Imported content type: docs_page
      > Product stream: legacy

      #### Link Lock

      Link Lock rewrites inbound URLs.

      ## In this Section

      -   [Link Lock Allowed URLs](/docs-test/titanhq/products/spamtitan/docs/legacy-8/link-lock-allowed-urls/)
      "
    `);
  });

  it('converts a Paligo admonition to a Starlight aside', async () => {
    const markdown = await convertDocsPage(
      { ...docsPage, sourceId: '10542-guidelines-for-updating-spamtitan' },
      await fixture('paligo/topic-with-admonition.html'),
      [],
      sourceLinkIndex,
      fakeAssetDownloader,
    );

    expect(markdown).toContain(':::caution');
    expect(markdown).toContain('Do not close the update window while the update is running.');
    expect(markdown).not.toContain('#### Caution');
  });

  it('converts Paligo cross-links and warns on unimported source links', async () => {
    const warnings: string[] = [];
    const markdown = await convertDocsPage(
      {
        ...docsPage,
        sourceId: '1598-spamtitan-cloud-setup',
        sourceUrl: 'https://docs.titanhq.com/en/1598-spamtitan-cloud-setup.html',
      },
      await fixture('paligo/topic-with-cross-links.html'),
      warnings,
      sourceLinkIndex,
      fakeAssetDownloader,
    );

    expect(markdown).toContain(
      '[Log in for the first time](/docs-test/titanhq/products/spamtitan/docs/legacy-8/log-in-for-the-first-time/)',
    );
    expect(markdown).toContain('a page outside the POC');
    expect(markdown).toContain('[local section](#local-section)');
    expect(markdown).toContain('[support](mailto:support@example.com)');
    expect(warnings).toEqual(['Unresolved source-domain link: https://docs.titanhq.com/en/9999-not-imported.html']);
  });
});
