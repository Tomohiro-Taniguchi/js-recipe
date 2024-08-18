const love3 = function (n) {
  for (let i = 1; i <= n; i++) {
    let str_i = i.toString() // 数値を文字列に変換
    if (str_i.includes("3")) {
      console.log(`${i}!!!!!!!!!!`)
    } else if (i % 3 === 0) {
      console.log(`${i}!!!!!!!!!!`)
    } else {
      console.log(i)
    }
  }
}

love3(100)
