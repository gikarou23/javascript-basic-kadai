// h2#textを取得する
// 1	画面から取得したHTML要素が定数に代入されている
const text = document.getElementById('text');
// 確認用
// console.log(text);

// h2#textの要素を「クリックしました」に書き換える
btn.addEventListener('click', () => {

  if (text.textContent === 'ボタンをクリックしてください') {
    // 2	ボタンをクリックした際に正しく文字変更がされている
    // つまんないからもう一回押すと戻る設定も足してみた
    text.textContent = 'ボタンをクリックしました';
  } else {
    text.textContent = 'ボタンをクリックしてください';
  }
})
