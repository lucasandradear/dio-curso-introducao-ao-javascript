var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function increment() {
  currentNumber++
  currentNumberWrapper.innerHTML = currentNumber
}

function decrement() {
  currentNumber--
  currentNumberWrapper.innerHTML = currentNumber
}

document.getElementsByName('somar')[0].addEventListener('click', increment)
document.getElementsByName('subtrair')[0].addEventListener('click',  decrement)