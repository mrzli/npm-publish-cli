import { lastValueFrom, tap } from 'rxjs';
import { glob } from 'glob';
import { ExecOptions, fromExec } from '@gmjs/exec-observable';
import { readTextAsync } from '@gmjs/fs-async';
import { parseProjectJson } from './parse-project-json';

export async function publish(): Promise<void> {
  console.log('Publishing...');

  const projectJsonContent = await readTextAsync('project.json');
  const projectJson = parseProjectJson(projectJsonContent);

  const { publishDir, include } = projectJson.publish;
  const files = await glob([...include]);

  await exec('cp', ['-R', ...files, publishDir]);
  await exec('npm', ['publish', '--access', 'public'], { cwd: publishDir });
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
