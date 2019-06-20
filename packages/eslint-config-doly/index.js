module.exports = {
  extends: [
    'eslint-config-standard',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: { jsx: true }
  },
  rules: {
    // "no-unused-vars": [1]
  },
};