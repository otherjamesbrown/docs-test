import tseslint from 'typescript-eslint';

export default [
  {
    ignores: [
      'node_modules/**',
      'site/.astro/**',
      'site/dist/**',
      'site/public/imported-assets/**',
      'site/src/content/docs/**',
      'migration/raw/**',
    ],
  },
  ...tseslint.configs.recommended,
  {
    files: ['tools/importer/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tools/importer/tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'no-undef': 'off',
    },
  },
];
