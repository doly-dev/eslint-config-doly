const { errorRules } = require('./rules/errors');

module.exports = {
  extends: [
    'eslint-config-standard',
    // './rules/error'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: { jsx: true }
  },
  rules: {
      ...errorRules
  },
};