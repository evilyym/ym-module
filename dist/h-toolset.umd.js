(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.dutils = {}));
})(this, (function (exports) { 'use strict';

  function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var formatPast = function (date, type, zeroFillFlag) {
      if (type === void 0) { type = "default"; }
      if (zeroFillFlag === void 0) { zeroFillFlag = true; }
      // 定义countTime变量，用于存储计算后的数据
      var countTime;
      // 获取当前时间戳
      var time = new Date().getTime();
      // 转换传入参数为时间戳
      var afferentTime = new Date(date).getTime();
      // 当前时间戳 - 传入时间戳
      time = Number.parseInt("".concat(time - afferentTime));
      if (time < 10000) {
          // 10秒内
          return "刚刚";
      }
      else if (time < 60000) {
          // 超过10秒少于1分钟内
          countTime = Math.floor(time / 1000);
          return "".concat(countTime, "\u79D2\u524D");
      }
      else if (time < 3600000) {
          // 超过1分钟少于1小时
          countTime = Math.floor(time / 60000);
          return "".concat(countTime, "\u5206\u949F\u524D");
      }
      else if (time < 86400000) {
          // 超过1小时少于24小时
          countTime = Math.floor(time / 3600000);
          return "".concat(countTime, "\u5C0F\u65F6\u524D");
      }
      else if (time >= 86400000 && type == "default") {
          // 超过二十四小时（一天）且格式参数为默认"default"
          countTime = Math.floor(time / 86400000);
          //大于等于365天
          if (countTime >= 365) {
              return "".concat(Math.floor(countTime / 365), "\u5E74\u524D");
          }
          //大于等于30天
          if (countTime >= 30) {
              return "".concat(Math.floor(countTime / 30), "\u4E2A\u6708\u524D");
          }
          return "".concat(countTime, "\u5929\u524D");
      }
      else {
          // 一天（24小时）以上且格式不为"default"则按传入格式参数显示不同格式
          // 数字补零
          var Y = new Date(date).getFullYear();
          var M = new Date(date).getMonth() + 1;
          var zeroFillM = M > 9 ? M : "0" + M;
          var D = new Date(date).getDate();
          var zeroFillD = D > 9 ? D : "0" + D;
          // 传入格式为"-" "/" "."
          if (type == "-" || type == "/" || type == ".") {
              return zeroFillFlag
                  ? Y + type + zeroFillM + type + zeroFillD
                  : Y + type + M + type + D;
          }
          // 传入格式为"年月日"
          if (type == "年月日") {
              return zeroFillFlag
                  ? Y + type[0] + zeroFillM + type[1] + zeroFillD + type[2]
                  : Y + type[0] + M + type[1] + D + type[2];
          }
          // 传入格式为"月日"
          if (type == "月日") {
              return zeroFillFlag
                  ? zeroFillM + type[0] + zeroFillD + type[1]
                  : M + type[0] + D + type[1];
          }
          // 传入格式为"年"
          if (type == "年") {
              return Y + type;
          }
      }
  };

  exports.formatPast = formatPast;
  exports.random = random;

}));
