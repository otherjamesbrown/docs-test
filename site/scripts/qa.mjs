import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const checks = [
  {
    page: 'dist/titanhq/products/spamtitan/docs/skellig-9/spamtitan-release-notes-61768/index.html',
    selectorName: 'SpamTitan Skellig release notes TOC',
    expectedHref: '#skellig-908',
  },
];

for (const check of checks) {
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

console.log(`Site QA passed for ${checks.length} generated page check.`);
