const command = process.argv[2] ?? 'help';

const commands = new Set(['discover', 'fetch', 'convert', 'qa', 'all']);

if (!commands.has(command)) {
  console.log('Usage: npm run import:<discover|fetch|convert|qa|all> -- [options]');
  process.exit(command === 'help' ? 0 : 1);
}

console.log(`Importer command '${command}' is scaffolded. Implementation comes next.`);

