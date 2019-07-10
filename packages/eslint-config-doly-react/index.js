const { errorRules } = require('./rules/errors');

module.exports = {
  extends: [
    'eslint-config-doly',
    'eslint-config-airbnb',
  ].map(require.resolve),
  parserOptions: {},
  plugins: ['react'],
  rules: {
    ...errorRules
  },
};