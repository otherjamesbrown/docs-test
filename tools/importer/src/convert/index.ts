import fs from 'node:fs/promises';
import path from 'node:path';
import { collectFiles, writeJson } from '../shared/files';
import {
  assetsRoot,
  basePath,
  linkMapPath,
  manifestPath,
  rawPath,
  reportPath,
  repoRoot,
  siteDocsRoot,
} from '../shared/paths';
import { escapeMarkdownLinkText, titleCase } from '../shared/text';
import type { ImportReport, PageCandidate } from '../shared/types';
import { toManifest } from '../manifest';
import { convertDocsPage } from './docs-page';
import { convertFreshdeskArticle } from './freshdesk-article';
import { buildSourceLinkIndex } from './links';
import { frontmatter } from './markdown';

export async function convertAll(pages: PageCandidate[]) {
  const report: ImportReport = {
    generatedAt: new Date().toISOString(),
    counts: {},
    pages: [],
    warnings: [],
  };
  const linkMap: Record<string, string> = {};
  const sourceLinkIndex = buildSourceLinkIndex(pages);

  for (const page of pages) {
    const warnings: string[] = [];
    const html = await fs.readFile(rawPath(page), 'utf8');
    const converted =
      page.contentType === 'kb_article'
        ? await convertFreshdeskArticle(page, html, warnings, sourceLinkIndex)
        : await convertDocsPage(page, html, warnings, sourceLinkIndex);

    const outputPath = path.join(siteDocsRoot, page.outputPath);
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, converted);
    linkMap[page.sourceUrl] = `${basePath}/${page.route}/`;
    report.counts[page.area] = (report.counts[page.area] ?? 0) + 1;
    report.pages.push({
      title: page.title,
      sourceUrl: page.sourceUrl,
      route: `${basePath}/${page.route}/`,
      outputPath: path.relative(repoRoot, outputPath),
      warnings,
    });
  }

  await writeCollectionIndexes(pages);
  await writeJson(reportPath, report);
  await writeJson(linkMapPath, linkMap);
  await writeJson(manifestPath, toManifest(pages));
  console.log(`Generated ${pages.length} Markdown pages.`);
  console.log(`Report: ${path.relative(repoRoot, reportPath)}`);
}

export async function clearGeneratedContent() {
  const generatedMdx = await collectFiles(siteDocsRoot, '.mdx');
  const markdown = await collectFiles(siteDocsRoot, '.md');
  const generatedMarkdown: string[] = [];
  for (const file of markdown) {
    const content = await fs.readFile(file, 'utf8');
    if (content.includes('> Imported content type:') || content.includes('> Generated import index:')) {
      generatedMarkdown.push(file);
    }
  }
  await Promise.all([...generatedMdx, ...generatedMarkdown].map((file) => fs.rm(file)));
  await fs.rm(assetsRoot, { recursive: true, force: true });
}

async function writeCollectionIndexes(pages: PageCandidate[]) {
  const collections = [
    {
      route: 'redstor/kb',
      title: 'Redstor Knowledge Base',
      description: 'Imported Redstor knowledge base articles.',
      pages: pages.filter((page) => page.area === 'redstor'),
    },
    {
      route: 'redstor/kb/guides',
      title: 'Guides',
      description: 'Imported Redstor guide articles.',
      pages: pages.filter((page) => page.route.startsWith('redstor/kb/guides/')),
    },
    {
      route: 'redstor/kb/troubleshooting',
      title: 'Troubleshooting',
      description: 'Imported Redstor troubleshooting articles.',
      pages: pages.filter((page) => page.route.startsWith('redstor/kb/troubleshooting/')),
    },
    {
      route: 'redstor/kb/release-notes',
      title: 'Release Notes',
      description: 'Imported Redstor release notes.',
      pages: pages.filter((page) => page.route.startsWith('redstor/kb/release-notes/')),
    },
    {
      route: 'titanhq/platform/docs',
      title: 'TitanHQ Platform Docs',
      description: 'Imported TitanHQ Platform documentation.',
      pages: pages.filter((page) => page.area === 'titanhq-platform'),
    },
    {
      route: 'titanhq/products/spamtitan',
      title: 'SpamTitan',
      description: 'Imported SpamTitan knowledge base and documentation.',
      pages: pages.filter((page) => page.product === 'SpamTitan'),
    },
    {
      route: 'titanhq/products/spamtitan/kb',
      title: 'SpamTitan Knowledge Base',
      description: 'Imported SpamTitan knowledge base articles.',
      pages: pages.filter((page) => page.area === 'spamtitan-kb'),
    },
    {
      route: 'titanhq/products/spamtitan/docs',
      title: 'SpamTitan Docs',
      description: 'Imported SpamTitan documentation.',
      pages: pages.filter((page) => page.area === 'spamtitan-skellig' || page.area === 'spamtitan-legacy'),
    },
    {
      route: 'titanhq/products/spamtitan/docs/skellig-9',
      title: 'Skellig 9',
      description: 'Imported SpamTitan Skellig 9 documentation.',
      pages: pages.filter((page) => page.area === 'spamtitan-skellig'),
    },
    {
      route: 'titanhq/products/spamtitan/docs/legacy-8',
      title: 'Legacy 8',
      description: 'Imported legacy SpamTitan documentation.',
      pages: pages.filter((page) => page.area === 'spamtitan-legacy'),
    },
  ];

  for (const collection of collections) {
    const outputPath = path.join(siteDocsRoot, collection.route, 'index.md');
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, collectionIndexMarkdown(collection));
  }
}

function collectionIndexMarkdown(collection: { title: string; description: string; pages: PageCandidate[] }): string {
  const grouped = groupBy(collection.pages, (page) => page.folder ?? page.productStream ?? page.contentType);
  const groups = Object.entries(grouped).map(([label, pages]) => {
    const links = pages
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((page) => `- [${escapeMarkdownLinkText(page.title)}](${basePath}/${page.route}/)`)
      .join('\n');
    return `## ${titleCase(label)}\n\n${links}`;
  });

  return `${frontmatter(collection.title, collection.description)}\n\n> Generated import index: ${collection.pages.length} pages\n\n${groups.join('\n\n')}\n`;
}

function groupBy<T>(items: T[], key: (item: T) => string): Record<string, T[]> {
  return items.reduce<Record<string, T[]>>((groups, item) => {
    const value = key(item);
    groups[value] = groups[value] ?? [];
    groups[value].push(item);
    return groups;
  }, {});
}
