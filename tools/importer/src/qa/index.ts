import fs from 'node:fs/promises';
import path from 'node:path';
import { buildSourceLinkIndex, sourceDomainBodyLinks, unrewrittenMigratedSourceLinks, type SourceLinkIndex } from '../convert/links';
import { collectFiles } from '../shared/files';
import { repoRoot, siteDocsRoot } from '../shared/paths';
import type { PageCandidate } from '../shared/types';

export async function runQa() {
  const docs = await collectFiles(siteDocsRoot, '.mdx');
  const md = await collectFiles(siteDocsRoot, '.md');
  const files = [...docs, ...md];
  const blocked = [
    'Was this article helpful?',
    "Sorry we couldn't be helpful",
    'Require further support? Submit a ticket',
  ];
  const failures: string[] = [];
  const sourceLinkIndex = await buildSourceLinkIndexFromGeneratedFiles(files);
  for (const file of files) {
    const content = await fs.readFile(file, 'utf8');
    for (const phrase of blocked) {
      if (content.includes(phrase)) failures.push(`${path.relative(repoRoot, file)} contains "${phrase}"`);
    }
    for (const link of unrewrittenMigratedSourceLinks(content, sourceLinkIndex)) {
      failures.push(`${path.relative(repoRoot, file)} contains migrated source link that should have been rewritten "${link}"`);
    }
    for (const link of sourceDomainBodyLinks(content)) {
      failures.push(`${path.relative(repoRoot, file)} contains source-domain body link "${link}"`);
    }
  }
  if (failures.length > 0) {
    console.error(failures.join('\n'));
    process.exit(1);
  }
  console.log(`QA passed for ${files.length} content files.`);
}

async function buildSourceLinkIndexFromGeneratedFiles(files: string[]): Promise<SourceLinkIndex> {
  const pages: Array<Pick<PageCandidate, 'sourceUrl' | 'route'>> = [];
  for (const file of files) {
    const content = await fs.readFile(file, 'utf8');
    const sourceUrl = content.match(/^> Source: \[[^\]]+\]\(([^)]+)\)/m)?.[1];
    if (!sourceUrl) continue;
    pages.push({
      sourceUrl,
      route: path
        .relative(siteDocsRoot, file)
        .replace(/\\/g, '/')
        .replace(/(?:\/index)?\.mdx?$/, ''),
    });
  }
  return buildSourceLinkIndex(pages);
}
