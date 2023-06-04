import { join } from 'node:path';
import { cli } from '@gmjs/cli-wrapper';
import { readPackageJsonSync } from '@gmjs/package-json';
import { publish } from './impl';

export async function run(): Promise<void> {
  cli(
    `
Usage
  $ npmpub

Options
  No options.

Examples
  $ npmpub
`,
    {
      meta: {
        version: readPackageJsonSync(join(__dirname, '..')).version ?? '',
      },
      options: {},
    }
  );

  await publish();
}

run();
