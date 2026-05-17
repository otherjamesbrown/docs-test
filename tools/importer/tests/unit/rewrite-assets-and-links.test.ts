import * as cheerio from 'cheerio';
import { describe, expect, it } from 'vitest';
import { buildSourceLinkIndex, rewriteAssetsAndLinks } from '../../src/convert/links';

const page = {
  area: 'spamtitan-legacy' as const,
  sourceId: '1598-spamtitan-cloud-setup',
  sourceUrl: 'https://docs.titanhq.com/en/1598-spamtitan-cloud-setup.html',
  sourceHost: 'docs.titanhq.com',
  canonicalHost: 'docs.titanhq.com',
  title: 'SpamTitan Cloud Setup',
  route: 'titanhq/products/spamtitan/docs/legacy-8/spamtitan-cloud-setup',
  outputPath: 'titanhq/products/spamtitan/docs/legacy-8/spamtitan-cloud-setup.md',
  contentType: 'docs_page' as const,
  breadcrumbs: ['TitanHQ', 'Products', 'SpamTitan', 'Docs', 'Legacy 8'],
  product: 'SpamTitan',
  productStream: 'legacy',
};

const sourceLinkIndex = buildSourceLinkIndex([
  {
    sourceUrl: 'https://docs.titanhq.com/en/423-log-in-for-the-first-time.html',
    route: 'titanhq/products/spamtitan/docs/legacy-8/log-in-for-the-first-time',
  },
]);

async function rewrite(html: string) {
  const $ = cheerio.load(`<main>${html}</main>`);
  const warnings: string[] = [];
  const output = await rewriteAssetsAndLinks(
    $,
    $('main'),
    page,
    warnings,
    sourceLinkIndex,
    async (assetUrl) => `imported-assets/test/${new URL(assetUrl).pathname.split('/').pop()}`,
  );
  return { output, warnings };
}

describe('asset and link rewriting', () => {
  it('rewrites relative image sources through the injected asset downloader', async () => {
    const { output, warnings } = await rewrite('<img alt="Screenshot" src="../images/setup.png">');

    expect(output).toContain('src="/docs-test/imported-assets/test/setup.png"');
    expect(warnings).toEqual([]);
  });

  it('rewrites migrated source links to internal routes', async () => {
    const { output, warnings } = await rewrite('<a href="423-log-in-for-the-first-time.html">Log in</a>');

    expect(output).toContain('href="/docs-test/titanhq/products/spamtitan/docs/legacy-8/log-in-for-the-first-time/"');
    expect(warnings).toEqual([]);
  });

  it('turns unimported source-domain links into text with a warning', async () => {
    const { output, warnings } = await rewrite('<a href="9999-not-imported.html">Not imported</a>');

    expect(output).toContain('Not imported');
    expect(output).not.toContain('<a href="9999-not-imported.html"');
    expect(warnings).toEqual(['Unresolved source-domain link: https://docs.titanhq.com/en/9999-not-imported.html']);
  });

  it('preserves mailto and fragment links', async () => {
    const { output, warnings } = await rewrite('<a href="mailto:support@example.com">Email</a><a href="#section">Jump</a>');

    expect(output).toContain('href="mailto:support@example.com"');
    expect(output).toContain('href="#section"');
    expect(warnings).toEqual([]);
  });

  it('absolutises non-source external relative links', async () => {
    const { output, warnings } = await rewrite('<a href="/release-notes.html">Release notes</a>');

    expect(output).toContain('href="https://docs.titanhq.com/release-notes.html"');
    expect(warnings).toEqual([]);
  });

  it('warns and leaves malformed links untouched', async () => {
    const { output, warnings } = await rewrite('<a href="http://[bad">Bad link</a>');

    expect(output).toContain('href="http://[bad"');
    expect(warnings).toEqual(['Could not normalise link: http://[bad']);
  });
});
