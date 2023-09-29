import { addCommandPackage, addCommandPublish, createProgram } from './cli';

export async function run(): Promise<void> {
  const program = createProgram();
  addCommandPackage(program);
  addCommandPublish(program);

  await program.parseAsync(process.argv);
}

run();
