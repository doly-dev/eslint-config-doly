const { errorRules } = require('./rules/errors');

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint-config-airbnb-base',
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