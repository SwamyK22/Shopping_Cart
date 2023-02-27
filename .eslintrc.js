module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'operator-linebreak': ['error', 'after'],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    'no-alert': 'off',
    'no-console': 'off',
    'react/state-in-constructor': 0,
    'implicit-arrow-linebreak': 0,
    'react/static-property-placement': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
  },
  parser: '@babel/eslint-parser',
};
