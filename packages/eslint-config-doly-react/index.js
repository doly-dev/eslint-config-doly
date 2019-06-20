module.exports = {
  extends: [
    'eslint-config-doly',
    'eslint-config-standard-react'
  ].map(require.resolve),
  parserOptions: {},
  plugins: ['react'],
  rules: {},
};