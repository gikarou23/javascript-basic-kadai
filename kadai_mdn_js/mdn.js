// サンプル：2023年8月22日
const today = new Date();
console.log(today);
// 必要な情報を変換して取得
year = today.getFullYear();
month = today.getMonth() + 1;
day = today.getDate();
hour = today.getHours();
minute = today.getMinutes();
second = today.getSeconds();
ms = today.getMilliseconds();

console.log(year + '年' + month  + '月' + day + '日')