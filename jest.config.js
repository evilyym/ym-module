module.exports = {
  preset: "ts-jest",
  transform: {
    // 将.js后缀的文件使用babel-jest处理
    "^.+\\.js$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest"
},
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts'],
}