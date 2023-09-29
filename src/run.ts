import { addCommandPublish, createProgram } from './cli';

export async function run(): Promise<void> {
  const program = createProgram();
  addCommandPublish(program);

  await program.parseAsync(process.argv);
}

run();
