function e(e,t){return Math.floor(Math.random()*(t-e+1))+e}var t=function(e,t,a){var r;void 0===t&&(t="default"),void 0===a&&(a=!0);var o=(new Date).getTime(),n=new Date(e).getTime();if((o=Number.parseInt("".concat(o-n)))<1e4)return"刚刚";if(o<6e4)return r=Math.floor(o/1e3),"".concat(r,"秒前");if(o<36e5)return r=Math.floor(o/6e4),"".concat(r,"分钟前");if(o<864e5)return r=Math.floor(o/36e5),"".concat(r,"小时前");if(o>=864e5&&"default"==t)return(r=Math.floor(o/864e5))>=365?"".concat(Math.floor(r/365),"年前"):r>=30?"".concat(Math.floor(r/30),"个月前"):"".concat(r,"天前");var c=new Date(e).getFullYear(),f=new Date(e).getMonth()+1,u=f>9?f:"0"+f,i=new Date(e).getDate(),l=i>9?i:"0"+i;return"-"==t||"/"==t||"."==t?a?c+t+u+t+l:c+t+f+t+i:"年月日"==t?a?c+t[0]+u+t[1]+l+t[2]:c+t[0]+f+t[1]+i+t[2]:"月日"==t?a?u+t[0]+l+t[1]:f+t[0]+i+t[1]:"年"==t?c+t:void 0};export{t as formatPast,e as random};
