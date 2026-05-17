import { describe, expect, it } from 'vitest';
import { buildCollectionIndexEntries, normaliseMarkdownForIndex } from '../../src/convert';
import type { PageCandidate } from '../../src/shared/types';

function page(overrides: Partial<PageCandidate>): PageCandidate {
  return {
    area: 'spamtitan-skellig',
    sourceId: '55584',
    sourceUrl: 'https://support.titanhq.com/en/55584-two-factor-authentication.html',
    sourceHost: 'support.titanhq.com',
    canonicalHost: 'support.titanhq.com',
    title: 'Two-Factor Authentication',
    route: 'titanhq/products/spamtitan/docs/skellig-9/two-factor-authentication-55584',
    outputPath: 'titanhq/products/spamtitan/docs/skellig-9/two-factor-authentication-55584.md',
    contentType: 'docs_page',
    breadcrumbs: ['SpamTitan', 'Skellig 9'],
    product: 'SpamTitan',
    productStream: 'skellig-9',
    ...overrides,
  };
}

describe('collection index generation', () => {
  it('normalises generated metadata and imported asset paths before comparing duplicate content', () => {
    const first = normaliseMarkdownForIndex(`
---
title: Two-Factor Authentication
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/55584-two-factor-authentication.html)
> Product: SpamTitan
> Imported content type: docs_page

Go to the profile ![profile-icon.jpg](/docs-test/imported-assets/spamtitan-skellig/55584-two-factor-authentication/icon.jpg) menu.
`);
    const second = normaliseMarkdownForIndex(`
---
title: Two-Factor Authentication
---

> Source: [support.titanhq.com](https://support.titanhq.com/en/56389-two-factor-authentication.html)
> Product: SpamTitan
> Imported content type: docs_page

Go to the profile ![profile-icon.jpg](/docs-test/imported-assets/spamtitan-skellig/56389-two-factor-authentication/icon.jpg) menu.
`);

    expect(first).toBe(second);
  });

  it('collapses exact body duplicates but disambiguates distinct pages with the same title', () => {
    const entries = buildCollectionIndexEntries([
      {
        page: page({ sourceId: '55584' }),
        markdown: 'Go to the profile menu and select Security to manage 2FA settings.',
      },
      {
        page: page({
          sourceId: '56389',
          route: 'titanhq/products/spamtitan/docs/skellig-9/two-factor-authentication-56389',
        }),
        markdown: 'Go to the profile menu and select Security to manage 2FA settings.',
      },
      {
        page: page({
          sourceId: '74398',
          route: 'titanhq/products/spamtitan/docs/skellig-9/two-factor-authentication-74398',
        }),
        markdown: 'When it is enabled on the MSP level, all admins on MSP level inherit enforced 2FA.',
      },
      {
        page: page({
          sourceId: '74498',
          route: 'titanhq/products/spamtitan/docs/skellig-9/two-factor-authentication',
        }),
        markdown: 'When you enforce 2FA on the customer level, domains and users inherit the setting.',
      },
    ]);

    expect(entries.map((entry) => entry.page.sourceId)).toEqual(['55584', '74398', '74498']);
    expect(entries.map((entry) => entry.label)).toEqual([
      'Two-Factor Authentication (Account setup)',
      'Two-Factor Authentication (MSP level)',
      'Two-Factor Authentication (Customer level)',
    ]);
  });

  it('collapses same-title variants that share the same qualifier', () => {
    const entries = buildCollectionIndexEntries([
      {
        page: page({
          sourceId: '60362',
          title: 'Enabling Link Lock',
          route: 'titanhq/products/spamtitan/docs/skellig-9/enabling-link-lock-60362',
        }),
        markdown: 'As an MSP, enable Link Lock for all customers.',
      },
      {
        page: page({
          sourceId: '60375',
          title: 'Enabling Link Lock',
          route: 'titanhq/products/spamtitan/docs/skellig-9/enabling-link-lock-60375',
        }),
        markdown: 'As an MSP, enable Link Lock for selected customers.',
      },
      {
        page: page({
          sourceId: '60371',
          title: 'Enabling Link Lock',
          route: 'titanhq/products/spamtitan/docs/skellig-9/enabling-link-lock',
        }),
        markdown: 'As an MSP, enable Link Lock for customer domains.',
      },
    ]);

    expect(entries.map((entry) => entry.page.sourceId)).toEqual(['60371']);
    expect(entries.map((entry) => entry.label)).toEqual(['Enabling Link Lock']);
  });
});
