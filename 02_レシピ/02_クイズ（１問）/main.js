const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const button = document.getElementById("choices-container")
const feedback = document.getElementById("feedback")

// クイズの内容
const quiz = {
  text: "この星の名前は何でしょう？",
  image: "https://i.gyazo.com/546ba7abc3b7e11e105b47737527bf39.png",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
  ],
}

// ボタンを追加する関数
const addButton = function () {
  for (let i = 0; i < quiz.choices.length; i++) {
    const choice = document.createElement("button")
    choice.id = `choice${i + 1}`
    choice.textContent = quiz.choices[i].text
    button.append(choice)
    choice.onclick = function () {
      choose(i)
    }
  }
}

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = quiz.image

  // 選択肢（ボタン）を追加
  addButton()
}

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
