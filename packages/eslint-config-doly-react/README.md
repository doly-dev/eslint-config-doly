# eslint-config-doly-react

[![Build Status](https://www.travis-ci.org/doly-dev/eslint-config-doly.svg?branch=master)](https://www.travis-ci.org/doly-dev/eslint-config-doly-react)

基于`eslint-config-standard-react`进行扩展的，适用于doly研发团队使用的`javascript`的风格指南

## 如何使用

请运行以下命令：

```bash
npm install --save-dev eslint eslint-config-doly-react
```

配置.eslintrc

```json
{
  "extends": "eslint-config-doly-react"
}
```

## 基础规则

react部分需要参考的规则为如下三个

(1) javascript部分基于：

[了解standard rules](https://standardjs.com/rules-en.html)

(2) 即使这个配置只是JSX（没有React），它也会使用 eslint-plugin-react它的通用JSX规则。

[了解eslint-plugin-react rules](https://github.com/standard/eslint-config-standard-jsx)

（3）React的规则基于eslint-config-standard-react

[了解eslint-config-standard-react rules](https://github.com/standard/eslint-config-standard-react)

## 关于规则的扩展

### 1. 在rules目录下创建相应类型规则文件

例如：

```javascript
// rules/error.js

module.exports = {
  rules: {
    "no-unused-vars": [1]
  }
};
```

### 2. 在index.js中引入相应rules

```javascript
const { errorRules } = require('./rules/errors');

module.exports = {
  extends: [
    'eslint-config-standard',
    './rules/error'
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
```


## 了解更多

基于eslint-config-standard进行扩展

[了解关于eslint-standard](https://standardjs.com/index.html)

[了解eslint-plugin-react](https://github.com/standard/eslint-config-standard-jsx)

[了解eslint-config-standard-react](https://github.com/standard/eslint-config-standard-react)

## License

MIT License

Copyright (c) 2019 doly-dev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.