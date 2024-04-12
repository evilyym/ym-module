declare namespace hToolset {
  /**
   * 生成数字范围内的随机数
   * @param min 最小数字
   * @param max 最大数字
   * @returns number类型
   */
  export function random(min: number, max: number): number

  /**
   * 时间转换
   * @param date 传入时间 例："2023/5/10 11:32:01" 2023-02-01 09:32:01
   * @param type 返回类型 例：- / 年月日 年
   * @param zeroFillFlag 是否数字补零，默认补零
   * @returns string类型
   * 默认规则，大于等于一天(24小时)展示'X天前；大于等于30天且小于365天展示'X个月前'；大于等于365天且展示'x年前'，否则按照传入参数规则展示
   */
  export function formatPast(date: String, type?: "default" | "-" | "/" | "." | "年月日" | "月日" | "年", zeroFillFlag?: Boolean): string
}

declare module 'ym-toolset' {
  export = hToolset;
}