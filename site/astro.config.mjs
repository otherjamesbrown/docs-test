import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://otherjamesbrown.github.io',
  base: '/docs-test',
  integrations: [
    starlight({
      title: 'Docs Platform POC',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/otherjamesbrown/docs-test',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/otherjamesbrown/docs-test/edit/main/site/',
      },
      sidebar: [
        {
          label: 'Redstor',
          items: [
            {
              label: 'Knowledge Base',
              items: [
                { label: 'Overview', slug: 'redstor/kb' },
                { label: 'Guides', slug: 'redstor/kb/guides' },
                { label: 'Troubleshooting', slug: 'redstor/kb/troubleshooting' },
                { label: 'Release Notes', slug: 'redstor/kb/release-notes' },
              ],
            },
          ],
        },
        {
          label: 'TitanHQ',
          items: [
            {
              label: 'Platform',
              items: [{ label: 'Docs', slug: 'titanhq/platform/docs' }],
            },
            {
              label: 'Products',
              items: [
                {
                  label: 'SpamTitan',
                  items: [
                    { label: 'Overview', slug: 'titanhq/products/spamtitan' },
                    { label: 'Knowledge Base', slug: 'titanhq/products/spamtitan/kb' },
                    { label: 'Docs', slug: 'titanhq/products/spamtitan/docs' },
                    { label: 'Skellig 9', slug: 'titanhq/products/spamtitan/docs/skellig-9' },
                    { label: 'Legacy 8', slug: 'titanhq/products/spamtitan/docs/legacy-8' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
