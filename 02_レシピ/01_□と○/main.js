const figure = document.getElementById("figure")

figure.onclick = function () {
  if (figure.classList.contains("square")) {
    SquareToRounded()
  } else if (figure.classList.contains("rounded")) {
    RoundedToTriangle()
  } else if (figure.classList.contains("triangle")) {
    TriangleToSquare()
  }
}

const SquareToRounded = function () {
  figure.classList.remove("square")
  figure.classList.add("rounded")
}

const RoundedToTriangle = function () {
  figure.classList.remove("rounded")
  figure.classList.add("triangle")
}

const TriangleToSquare = function () {
  figure.classList.remove("triangle")
  figure.classList.add("square")
}
