module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true
  },
  extends: [ 'plugin:prettier/recommended', 'prettier/@typescript-eslint', 'plugin:@typescript-eslint/recommended' ],
  plugins: [ '@typescript-eslint', 'svelte3', 'prettier' ],
  rules: {
    'no-shadow': 'warn',
    'linebreak-style': [ 'warn', 'unix' ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': [ 'warn', 2 ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'prettier/prettier': 'error'
  },
  settings: {
    'svelte3/lint-template': true,
  },
};