module.exports = {
  root: true,
  env: { node: true },
  extends: ['eslint:recommended', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'storybook-static'],
  rules: {},
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
};
