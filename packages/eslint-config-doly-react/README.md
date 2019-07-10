# eslint-config-doly-react

[![Build Status](https://www.travis-ci.org/doly-dev/eslint-config-doly.svg?branch=master)](https://www.travis-ci.org/doly-dev/eslint-config-doly-react)

基于`eslint-config-airbnb`进行扩展的，`javascript`的风格指南(包含React)

默认导出包含所有ESLint规则，包括ECMAScript 6+和React。如果您不需要React，请使用[eslint-config-doly](https://github.com/doly-dev/eslint-config-doly/tree/master/packages/eslint-config-doly)。

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

规范基于eslint-config-airbnb上进行扩展

[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

## 关于规则的修改或扩展

配置.eslintrc

```json
//.eslintrc
{
  "extends": ["eslint-config-doly-react"],
   "rules": {
     "semi": ["error", "always"]
   }
}
```

## License

MIT License