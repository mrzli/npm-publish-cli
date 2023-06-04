import { lastValueFrom, tap } from 'rxjs';
import { glob } from 'glob';
import { ExecOptions, fromExec } from '@gmjs/exec-observable';
import { readTextAsync } from '@gmjs/fs-async';
import { parseProjectJson } from './parse-project-json';
import { Config } from '../types';

export async function publish(config: Config): Promise<void> {
  const { dryRun } = config;

  console.log('Publishing...');

  const projectJsonContent = await readTextAsync('project.json');
  const projectJson = parseProjectJson(projectJsonContent);

  const { publishDir, include } = projectJson.publish;
  const files = await glob([...include]);

  await exec('cp', ['-R', ...files, publishDir]);

  const npmArgs: readonly string[] = [
    'publish',
    '--access',
    'public',
    ...(dryRun ? ['--dry-run'] : []),
  ];

  await exec('npm', npmArgs, { cwd: publishDir });
}

async function exec(
  cmd: string,
  args?: readonly string[],
  options?: ExecOptions
): Promise<void> {
  await lastValueFrom(
    fromExec(cmd, args, options).pipe(
      tap((event) => {
        if (event.kind === 'data-stdout') {
          console.log(event.data);
        } else if (event.kind === 'data-stderr') {
          console.error(event.data);
        }
      })
    )
  );
}
