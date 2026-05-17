import { pathToFileURL } from 'node:url';
import { clearGeneratedContent, convertAll } from './convert';
import { discover } from './discover';
import { fetchAll } from './fetch';
import { readPagesFromManifest, toManifest } from './manifest';
import { runQa } from './qa';
import { writeJson } from './shared/files';
import { manifestPath } from './shared/paths';

type Command = 'discover' | 'fetch' | 'convert' | 'qa' | 'all';

const commands = new Set<Command>(['discover', 'fetch', 'convert', 'qa', 'all']);

async function main() {
  const command = process.argv[2] ?? 'help';
  const args = process.argv.slice(3);

  if (command === 'help' || !isCommand(command)) {
    console.log('Usage: npm run import:<discover|fetch|convert|qa|all> -- [--poc] [--limit N] [--force]');
    process.exit(command === 'help' ? 0 : 1);
  }

  if (command === 'qa') {
    await runQa();
    return;
  }

  const limit = getNumberArg(args, '--limit');
  const force = args.includes('--force');

  if (command === 'discover') {
    const pages = await discover(limit);
    await writeJson(manifestPath, toManifest(pages));
    console.log(`Discovered ${pages.length} pages.`);
    return;
  }

  if (command === 'all') {
    const pages = await discover(limit);
    await writeJson(manifestPath, toManifest(pages));
    await fetchAll(pages, force);
    await clearGeneratedContent();
    await convertAll(pages);
    await runQa();
    return;
  }

  const pages = force ? await discover(limit) : await readPagesFromManifest(limit);

  if (command === 'fetch') {
    await fetchAll(pages, force);
    console.log(`Fetched ${pages.length} pages.`);
    return;
  }

  await clearGeneratedContent();
  await convertAll(pages);
  await runQa();
}

function isCommand(value: string): value is Command {
  return commands.has(value as Command);
}

function getNumberArg(args: string[], name: string): number | undefined {
  const index = args.indexOf(name);
  if (index === -1) return undefined;
  const value = Number(args[index + 1]);
  return Number.isFinite(value) ? value : undefined;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
