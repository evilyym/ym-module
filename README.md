# ym-vue-module

> 常用工具函数库

## 工具函数介绍

- Format（格式化）
  - formatMoney(money, symbol, decimals)：金额格式化
    - money： number 金额数
    - symbol： string 金额符号
    - decimals： number 保留小数点位数
- Validate（校验）
  - mobileCheck(value)：手机号校验
  - IDCardCheck(value)：身份证校验
  - emailCheck(value)：邮箱校验

## 安装及使用

```js
// 安装
npm install ym-vue-module

ym add ym-vue-module

// 使用
import { Format, Validate } from "ym-vue-module";

Format.formatMoney(12341234.246, "$", 2); // $12,341,234.25
Validate.mobileCheck("123456"); // false
```

mpn 发布命令
```ts
// patch：补丁号，修复bug，小变动，如 v1.0.0->v1.0.1
npm version patch

// minor：次版本号，增加新功能，如 v1.0.0->v1.1.0
npm version minor

// major：主版本号，不兼容的修改，如 v1.0.0->v2.0.0
npm version major

// 重新发布
npm publish

```