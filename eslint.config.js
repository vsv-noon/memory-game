import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import { defineConfig } from 'eslint/config';
import unicorn from 'eslint-plugin-unicorn';

import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{js,ts}'],
    extends: [
      js.configs.recommended,
      unicorn.configs.recommended,
      eslintConfigPrettier,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    linterOptions: {
      noInlineConfig: true,
    },
    rules: {
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxEOF: 0,
          maxBOF: 0,
        },
      ],
    },
  },
  {
    ignores: ['dist/', 'coverage/', 'node_modules/'],
  },
]);
