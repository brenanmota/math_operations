let firstNumber = prompt('enter the first number')
let secondNumber = prompt('enter the second number')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

if (sum % 2 == 0) {
  alert(`Sum: ${sum}. The number is even`)
} else {
  alert(`Sum: ${sum}. The number is even odd`)
}

alert('Subtraction: ' + sub)
alert('Multiplication: ' + multi)
alert('Division: ' + div)
alert('Rest of Division: ' + restDiv)

if (firstNumber == secondNumber) {
  alert (`the numbers are the same`)
} else {
  alert (`the numbers are different`)
}




