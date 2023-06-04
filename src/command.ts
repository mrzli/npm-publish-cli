import { join } from 'node:path';
import { cli } from '@gmjs/cli-wrapper';
import { readPackageJsonSync } from '@gmjs/package-json';
import { publish } from './impl';
import { Config } from './types';

export async function run(): Promise<void> {
  const result = cli(
    `
Usage
  $ npmpub <input>

Options
  --dry-run   Dry run (fake publish).

Examples
  $ jsgen --dry-run
`,
    {
      meta: {
        version: readPackageJsonSync(join(__dirname, '..')).version ?? '',
      },
      options: {
        dryRun: {
          type: 'boolean',
          required: false,
        },
      },
    }
  );

  const dryRun = result.options['dryRun']?.value ? true : false;
  const config: Config = {
    dryRun,
  };

  await publish(config);
}

run();
