import { z } from 'zod';
import { ProjectJson } from '../types';

export function parseProjectJson(content: string): ProjectJson {
  const projectJson = JSON.parse(content);
  return validateProjectJson(projectJson);
}

function validateProjectJson(projectJson: unknown): ProjectJson {
  return SCHEMA_PROJECT_JSON.parse(projectJson);
}

const SCHEMA_PROJECT_JSON_PUBLISH = z.object({
  publishDir: z.string().min(1),
  include: z.array(z.string().min(1)),
});

const SCHEMA_PROJECT_JSON = z.object({
  publish: SCHEMA_PROJECT_JSON_PUBLISH,
});
