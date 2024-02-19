import { formatPast } from '../src/index'

describe('格式化时间', () => {
  it('should return 3天前', () => {
    const time = new Date();
    // 将日期往前推3天
    const threeDaysAgo = new Date(time.setDate(time.getDate() - 3)).toLocaleString();

    const result = formatPast(threeDaysAgo)
    expect(result).toBe('3天前')
  })
  it('should return 2个月前', () => {
    const time = new Date();
    // 将日期往前推2月
    const twoMonthAgo = new Date(time.setDate(time.getDate() - 60)).toLocaleString();

    const result = formatPast(twoMonthAgo)
    expect(result).toBe('2个月前')
  })
  it('should return  8年前', () => {
    const time = new Date();
    // 将日期往前推8年
    const eightYearsAgo = new Date(time.setDate(time.getDate() - 8*365)).toLocaleString();
    const result = formatPast(eightYearsAgo)
    expect(result).toBe('8年前')
  })
  it('formatPast("2023-02-01 09:32:01", "-", false) -> should return 2023-2-1', () => {
    const result = formatPast("2023-02-01 09:32:01", "-", false)
    expect(result).toBe('2023-2-1')
  })
  it('formatPast("2023.12.8 19:32:01", "/") -> should return 2023/12/08', () => {
    const result = formatPast("2023.12.8 19:32:01", "/")
    expect(result).toBe('2023/12/08')
  })
  it('formatPast("2023.12.8 19:32:01", ".") -> should return 2023.12.08', () => {
    const result = formatPast("2023.12.8 19:32:01", ".")
    expect(result).toBe('2023.12.08')
  })
  it('formatPast("2023/5/10 11:32:01", "年月日") -> should return 2023年05月10日', () => {
    const result = formatPast("2023/5/10 11:32:01", "年月日")
    expect(result).toBe('2023年05月10日')
  })
  it('formatPast("2023/6/25 11:32:01", "月日", false) -> should return 6月25日', () => {
    const result = formatPast("2023/6/25 11:32:01", "月日", false)
    expect(result).toBe('6月25日')
  })
  it('formatPast("2023/8/08 11:32:01", "年") -> should return 2023年', () => {
    const result = formatPast("2023/8/08 11:32:01", "年")
    expect(result).toBe('2023年')
  })
})