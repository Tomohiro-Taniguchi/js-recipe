const display = document.getElementById("display")
const equalButton = document.getElementById("equal")

equalButton.onclick = function () {
  const number1 = Number(document.getElementById("number1").value)
  const number2 = Number(document.getElementById("number2").value)
  const result = number1 + number2
  if (!isNaN(result)) {
    display.textContent = result
  } else {
    display.textContent = "数値を入力してください"
  }
}
