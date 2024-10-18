// 引数で渡した値を二乗した計算結果を戻り値として返す関数
// アロー関数
const multiplierA = (numA) => {
  console.log(numA ** 2);
}
multiplierA(10);

// 旧式function関数
const numF = 0;
function multiplierF(numF) {
  console.log(numF ** 2);
}
multiplierF(10);