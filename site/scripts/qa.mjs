import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const tocChecks = [
  {
    page: 'dist/titanhq/products/spamtitan/docs/skellig-9/spamtitan-release-notes-61768/index.html',
    selectorName: 'SpamTitan Skellig release notes TOC',
    expectedHref: '#skellig-908',
  },
];

const pageLinkChecks = [
  {
    page: 'dist/titanhq/products/spamtitan/docs/legacy-8/spamtitan-cloud-guide/index.html',
    selectorName: 'SpamTitan Cloud Guide section links',
    expectedHref: '/docs-test/titanhq/products/spamtitan/docs/legacy-8/quarantine-overview/',
  },
  {
    page: 'dist/titanhq/products/spamtitan/docs/legacy-8/link-lock/index.html',
    selectorName: 'SpamTitan legacy Link Lock section links',
    expectedHref: '/docs-test/titanhq/products/spamtitan/docs/legacy-8/link-lock-allowed-urls/',
  },
  {
    page: 'dist/titanhq/products/spamtitan/docs/skellig-9/log-in-to-spamtitan/index.html',
    selectorName: 'SpamTitan Skellig log-in section links',
    expectedHref: '/docs-test/titanhq/products/spamtitan/docs/skellig-9/forgot-your-password/',
  },
];

const titleChecks = [
  {
    page: 'dist/titanhq/products/spamtitan/docs/legacy-8/link-lock/index.html',
    selectorName: 'SpamTitan legacy Link Lock page title',
    expectedTitle: 'Link Lock | Docs Platform POC',
  },
  {
    page: 'dist/titanhq/products/spamtitan/docs/legacy-8/link-lock-allowed-urls/index.html',
    selectorName: 'SpamTitan legacy Link Lock Allowed URLs page title',
    expectedTitle: 'Link Lock Allowed URLs | Docs Platform POC',
  },
];

const textChecks = [
  {
    page: 'dist/titanhq/products/spamtitan/docs/skellig-9/index.html',
    selectorName: 'SpamTitan Skellig index disambiguates duplicate 2FA titles',
    expectedText: 'Two-Factor Authentication (Account setup)',
  },
  {
    page: 'dist/titanhq/products/spamtitan/docs/skellig-9/index.html',
    selectorName: 'SpamTitan Skellig index disambiguates duplicate 2FA titles',
    expectedText: 'Two-Factor Authentication (MSP level)',
  },
  {
    page: 'dist/titanhq/products/spamtitan/docs/skellig-9/index.html',
    selectorName: 'SpamTitan Skellig index disambiguates duplicate 2FA titles',
    expectedText: 'Two-Factor Authentication (Customer level)',
  },
];

const absentLinkChecks = [
  {
    page: 'dist/titanhq/products/spamtitan/index.html',
    selectorName: 'SpamTitan product overview keeps docs variants out of the landing page',
    forbiddenHref: '/docs-test/titanhq/products/spamtitan/docs/skellig-9/two-factor-authentication-74398/',
  },
  {
    page: 'dist/titanhq/products/spamtitan/docs/skellig-9/index.html',
    selectorName: 'SpamTitan Skellig index collapses duplicate 2FA setup topics',
    forbiddenHref: '/docs-test/titanhq/products/spamtitan/docs/skellig-9/two-factor-authentication-56389/',
  },
  {
    page: 'dist/titanhq/products/spamtitan/docs/skellig-9/index.html',
    selectorName: 'SpamTitan Skellig index collapses duplicate Link Lock variants',
    forbiddenHref: '/docs-test/titanhq/products/spamtitan/docs/skellig-9/enabling-link-lock-60362/',
  },
  {
    page: 'dist/titanhq/products/spamtitan/docs/skellig-9/index.html',
    selectorName: 'SpamTitan Skellig index collapses duplicate Geoblocking variants',
    forbiddenHref: '/docs-test/titanhq/products/spamtitan/docs/skellig-9/geoblocking-57304/',
  },
];

const absentTextChecks = [
  {
    page: 'dist/titanhq/products/spamtitan/docs/skellig-9/index.html',
    selectorName: 'SpamTitan Skellig index does not expose source-id disambiguators',
    forbiddenText: 'source ',
  },
];

for (const check of tocChecks) {
  const html = await readFile(path.join(siteRoot, check.page), 'utf8');
  const tocStart = html.indexOf('id="starlight__on-this-page"');
  const tocEnd = html.indexOf('</starlight-toc>', tocStart);
  if (tocStart === -1 || tocEnd === -1) {
    throw new Error(`${check.selectorName}: generated Starlight TOC was not found`);
  }

  const tocHtml = html.slice(tocStart, tocEnd);
  if (!tocHtml.includes(`href="${check.expectedHref}"`)) {
    throw new Error(`${check.selectorName}: expected ${check.expectedHref} in the right-hand page menu`);
  }
}

for (const check of pageLinkChecks) {
  const html = await readFile(path.join(siteRoot, check.page), 'utf8');
  if (!html.includes(`href="${check.expectedHref}"`)) {
    throw new Error(`${check.selectorName}: expected migrated link ${check.expectedHref}`);
  }
}

for (const check of titleChecks) {
  const html = await readFile(path.join(siteRoot, check.page), 'utf8');
  if (!html.includes(`<title>${check.expectedTitle}</title>`)) {
    throw new Error(`${check.selectorName}: expected title ${check.expectedTitle}`);
  }
}

for (const check of textChecks) {
  const html = await readFile(path.join(siteRoot, check.page), 'utf8');
  if (!html.includes(check.expectedText)) {
    throw new Error(`${check.selectorName}: expected text ${check.expectedText}`);
  }
}

for (const check of absentLinkChecks) {
  const html = await readFile(path.join(siteRoot, check.page), 'utf8');
  if (html.includes(`href="${check.forbiddenHref}"`)) {
    throw new Error(`${check.selectorName}: did not expect variant link ${check.forbiddenHref}`);
  }
}

for (const check of absentTextChecks) {
  const html = await readFile(path.join(siteRoot, check.page), 'utf8');
  if (html.includes(check.forbiddenText)) {
    throw new Error(`${check.selectorName}: did not expect text ${check.forbiddenText}`);
  }
}

console.log(
  `Site QA passed for ${
    tocChecks.length +
    pageLinkChecks.length +
    titleChecks.length +
    textChecks.length +
    absentLinkChecks.length +
    absentTextChecks.length
  } generated page checks.`,
);
