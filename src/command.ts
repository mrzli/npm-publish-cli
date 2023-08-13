import { join } from 'node:path';
import { Command } from 'commander';
import { readPackageJsonSync } from '@gmjs/package-json';
import { publish } from './impl';
import { Config } from './types';

export async function run(): Promise<void> {
  const program = new Command();
  program
    .name('npmpub')
    .description('Publish npm package.')
    .version(readPackageJsonSync(join(__dirname, '..')).version ?? '')
    .option('--dry-run', 'Dry run (fake publish).')
    .action(npmpub);

  await program.parseAsync(process.argv);
}

async function npmpub(
  options: Readonly<Record<string, boolean | undefined>>,
  _command: Command
): Promise<void> {
  const config: Config = {
    dryRun: options['dryRun'] ?? false,
  };

  await publish(config);
}

run();
