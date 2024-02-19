# 小工具集

### 生成指定范围随机数
```js
/**
   * 生成数字范围内的随机数
   * @param min 最小数字
   * @param max 最大数字
   * @returns number类型
   */
  const rand = random(1, 10);
```

### 时间转换
```js
/**
   * 时间转换
   * @param date 传入时间 例："2023/5/10 11:32:01" 2023-02-01 09:32:01
   * @param type 返回类型 例：- / 年月日 年
   * @param zeroFillFlag 是否数字补零，默认补零
   * @returns string类型
   * 默认规则，大于等于一天(24小时)展示'X天前；大于等于30天且小于365天展示'X个月前'；大于等于365天且展示'x年前'，否则按照传入参数规则展示
   */

  console.log(formatPast("2024-2-16 11:11:11")); // 3天前
  console.log(formatPast("2023-12-12 11:11:11")); // 2个月前
  console.log(formatPast("2015-07-10 21:32:01")); // 8年前
  console.log(formatPast("2023-02-01 09:32:01", "-", false)); // 2023-2-1
  console.log(formatPast("2023.12.8 19:32:01", "/")); // 2023/12/08
  console.log(formatPast("2023.12.8 19:32:01", ".")); // 2023.12.08
  console.log(formatPast("2023/5/10 11:32:01", "年月日")); // 2023年05月10日
  console.log(formatPast("2023/6/25 11:32:01", "月日", false)); // 6月25日
  console.log(formatPast("2023/8/08 11:32:01", "年")); // 2023年

```