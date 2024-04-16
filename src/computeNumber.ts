
const computeNumber = (a: number, type: "+" | "-" | "*" | "/", b: number,) => {
  /**
   * 获取数字小数点的长度
   * @param {number} n 数字
   */
  function getDecimalLength(n: number) {
    const decimal = n.toString().split(".")[1];
    return decimal ? decimal.length : 0;
  }
  /**
   * 修正小数点
   * @description 防止出现 `33.33333*100000 = 3333332.9999999995` && `33.33*10 = 333.29999999999995` 这类情况做的处理
   * @param {number} n
   */
  const amend = (n: number, precision = 15) => parseFloat(Number(n).toPrecision(precision));
  const power = Math.pow(10, Math.max(getDecimalLength(a), getDecimalLength(b)));
  let result = 0;

  a = amend(a * power);
  b = amend(b * power);

  switch (type) {
    case "+":
      result = (a + b) / power;
      break;
    case "-":
      result = (a - b) / power;
      break;
    case "*":
      result = (a * b) / (power * power);
      break;
    case "/":
      result = a / b;
      break;
  }

  result = amend(result);

  return {
    /** 计算结果 */
    result,
    /**
     * 继续计算
     * @param {"+"|"-"|"*"|"/"} nextType 继续计算方式
     * @param {number} nextValue 继续计算的值
     */
    next(nextType: "+" | "-" | "*" | "/", nextValue: number) {
      return computeNumber(result, nextType, nextValue);
    }
  }
}

export default computeNumber;
