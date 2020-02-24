const colors = ['red', 'orange', 'pink', 'blue', 'red', 'yellow']

const body = document.querySelector('body')
const button = document.querySelector('button')

body.style.backgroundColor = 'green'
button.addEventListener('click', changeBackground)

function changeBackground() {
  const colorsIndex = parseInt(Math.random() * colors.length)
  body.style.backgroundColor = colors[colorsIndex]
}
