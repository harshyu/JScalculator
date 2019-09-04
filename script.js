const numbers = document.querySelectorAll(".number")
numbers.forEach((number)=> {
    console.log(number)
})

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        console.log("number is pressed")
    })
})

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        console.log(event.target.value)
    })
})


const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}
const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    currentNumber = number
}

numbers.forEach((number) => {
    number.addEventListener("click", (event)=> {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})
const inputNumber = (number) => {
    currentNumber += number
}
const inputNumber = (number) => {
    if (currentNumber ==='0') {
        currentNumber= number
    }
    else {
        currentNumber +=number
    }
    
}
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click" , (event) => {
        console.log(event.target.value)
    })
})

const inputOperator = (operator) => {
    prevNumber = currentNumber
    calculationOperator= operator
    currentNumber = '0'
}

const operators= document.querySelectorAll