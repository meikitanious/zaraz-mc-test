module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  env: {
    node: true,
    browser: true,
    worker: true,
    es2022: true,
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
    ],
  },
  overrides: [
    {
      files: ['*d.ts'],
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: ['*js'],
      globals: {
        webcm: 'writable',
      },
    },
  ],
}
