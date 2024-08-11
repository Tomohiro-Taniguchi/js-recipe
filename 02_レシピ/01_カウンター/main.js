const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const doubleButton = document.getElementById("double-button")

let count = 0

// プラスボタンをクリックしたときの処理を登録
plusButton.onclick = function () {
  // countを更新
  count += 1
  // countを表示
  display.textContent = count
}

// マイナスボタンをクリックしたときの処理を登録
minusButton.onclick = function () {
  // countを更新
  count -= 1
  // countを表示
  display.textContent = count
}

// ダブルボタンをクリックしたときの処理を登録
doubleButton.onclick = function () {
  // countを更新
  count *= 2
  // countを表示
  display.textContent = count
}
