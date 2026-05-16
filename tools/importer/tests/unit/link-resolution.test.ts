import { describe, expect, it } from 'vitest';
import {
  buildSourceLinkIndex,
  resolveMigratedSourceHref,
  sourceDomainBodyLinks,
  unresolvedMigratedSourceLinks,
} from '../../src/cli';

describe('source link resolution', () => {
  const sourceLinkIndex = buildSourceLinkIndex([
    {
      sourceUrl:
        'https://helpdesk.spamtitan.com/support/solutions/articles/4000186889-step-3-test-connectivity-to-your-mail-server',
      route: 'titanhq/products/spamtitan/kb/getting-started-cloud/step-3-test-connectivity-to-your-mail-server',
    },
    {
      sourceUrl: 'https://support.titanhq.com/en/55571-log-in-to-spamtitan.html',
      route: 'titanhq/products/spamtitan/docs/skellig-9/log-in-to-spamtitan',
    },
    {
      sourceUrl: 'https://docs.titanhq.com/en/1598-spamtitan-cloud-setup.html',
      route: 'titanhq/products/spamtitan/docs/legacy-8/spamtitan-cloud-setup',
    },
  ]);

  it('rewrites Freshdesk article aliases to migrated routes', () => {
    expect(
      resolveMigratedSourceHref(
        'https://helpdesk.spamtitan.com/a/solutions/articles/4000186889',
        sourceLinkIndex,
      ),
    ).toBe(
      '/docs-test/titanhq/products/spamtitan/kb/getting-started-cloud/step-3-test-connectivity-to-your-mail-server/',
    );

    expect(
      resolveMigratedSourceHref(
        'https://helpdesk.spamtitan.com/support/solutions/articles/4000186889',
        sourceLinkIndex,
      ),
    ).toBe(
      '/docs-test/titanhq/products/spamtitan/kb/getting-started-cloud/step-3-test-connectivity-to-your-mail-server/',
    );
  });

  it('rewrites TitanHQ docs links to migrated routes', () => {
    expect(
      resolveMigratedSourceHref('https://support.titanhq.com/en/55571-log-in-to-spamtitan.html', sourceLinkIndex),
    ).toBe('/docs-test/titanhq/products/spamtitan/docs/skellig-9/log-in-to-spamtitan/');

    expect(
      resolveMigratedSourceHref('https://docs.titanhq.com/en/1598-spamtitan-cloud-setup.html', sourceLinkIndex),
    ).toBe('/docs-test/titanhq/products/spamtitan/docs/legacy-8/spamtitan-cloud-setup/');
  });

  it('flags body links to pages that have been migrated', () => {
    const content = `---
title: Example
---

> Source: [helpdesk.spamtitan.com](https://helpdesk.spamtitan.com/support/solutions/articles/4000186889-step-3-test-connectivity-to-your-mail-server)

[Step 3](https://helpdesk.spamtitan.com/a/solutions/articles/4000186889 "Step 3")
[External page](https://helpdesk.spamtitan.com/a/solutions/articles/4000000000)
`;

    expect(unresolvedMigratedSourceLinks(content, sourceLinkIndex)).toEqual([
      'https://helpdesk.spamtitan.com/a/solutions/articles/4000186889',
    ]);
  });

  it('flags any source-domain body link even when it was not migrated', () => {
    const content = `---
title: Example
---

> Source: [docs.titanhq.com](https://docs.titanhq.com/en/363-spamtitan-cloud-guide.html)

[Quarantine Overview](https://docs.titanhq.com/en/1135-quarantine-overview.html)
Bare URL: https://support.titanhq.com/en/65238-quarantine.html.
[External](https://example.com)
`;

    expect(sourceDomainBodyLinks(content)).toEqual([
      'https://docs.titanhq.com/en/1135-quarantine-overview.html',
      'https://support.titanhq.com/en/65238-quarantine.html',
    ]);
  });
});
