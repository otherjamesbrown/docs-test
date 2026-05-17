import { describe, expect, it } from 'vitest';
import { parseSourcesConfig } from '../../src/shared/config';

describe('source configuration', () => {
  it('parses Freshdesk folders and docs routing from YAML', () => {
    const config = parseSourcesConfig(`
products:
  - id: example
    label: Example
    canonical_host: helpdesk.example.com
    sources:
      kb:
        id: example-kb
        type: freshdesk_public
        base_url: https://helpdesk.example.com
        area: redstor
        folders:
          - folder: Guides
            source_url: /support/solutions/folders/1
            route_base: example/kb/guides
            limit: 10
      docs:
        id: example-docs
        type: titanhq_static_docs_branch
        base_url: https://docs.example.com
        area: titanhq-platform
        route_base: example/docs
        breadcrumbs:
          - Example
          - Docs
        seeds:
          - /en/1-welcome.html
`);

    expect(config.products[0]?.sources.kb?.[0]).toMatchObject({
      id: 'example-kb',
      folders: [{ folder: 'Guides', route_base: 'example/kb/guides', limit: 10 }],
    });
    expect(config.products[0]?.sources.docs?.[0]).toMatchObject({
      id: 'example-docs',
      route_base: 'example/docs',
      breadcrumbs: ['Example', 'Docs'],
    });
  });

  it('fails fast with a readable error for invalid YAML shape', () => {
    expect(() =>
      parseSourcesConfig(`
products:
  - id: broken
    label: Broken
    canonical_host: helpdesk.example.com
    sources:
      kb:
        id: broken-kb
        type: freshdesk_public
        base_url: https://helpdesk.example.com
        area: redstor
`),
    ).toThrow(/sources\.kb\.0\.folders/);
  });
});
