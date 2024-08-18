let count = 0

const checkMultiple3 = function () {
  count += 1
  if (count % 3 === 0) {
    console.log(`${count}!!!!!!!!!!`)
  } else {
    console.log(count)
  }
}

const cheerfulSecondhand = function () {
  setInterval(checkMultiple3, 1000)
}

cheerfulSecondhand()
