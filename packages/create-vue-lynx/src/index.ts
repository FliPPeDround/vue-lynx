#!/usr/bin/env node

import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type { Argv } from 'create-rstack';
import { checkCancel, create, select } from 'create-rstack';

type LANG = 'js' | 'ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const { devDependencies } = require('../package.json') as {
  devDependencies: Record<string, string>;
};

const TEMPLATES = [
  { template: 'vue', lang: 'ts' as LANG },
  { template: 'vue', lang: 'js' as LANG },
];

function composeTemplateName({ template, lang }: { template: string; lang: LANG }): string {
  return `${template}-${lang}`;
}

async function getTemplateName({ template }: Argv): Promise<string> {
  if (typeof template === 'string') {
    const pair = template.split('-');
    const lang = pair[pair.length - 1];
    if (lang && ['js', 'ts'].includes(lang)) {
      return template;
    }
    return `${template}-ts`;
  }

  const language = checkCancel<LANG>(
    await select({
      message: 'Select language',
      options: [
        { value: 'ts', label: 'TypeScript', hint: 'recommended' },
        { value: 'js', label: 'JavaScript' },
      ],
    }),
  );

  return composeTemplateName({ template: 'vue', lang: language });
}

void create({
  root: path.resolve(__dirname, '..'),
  name: 'vue-lynx',
  templates: TEMPLATES.map(({ template, lang }) =>
    composeTemplateName({ template, lang }),
  ),
  version: devDependencies,
  getTemplateName,
});
