const add = (a,b) => {
    return a + b
}

const subtract = (a,b) => {
    return a - b
}

const multiply = (a,b) => {
    return a * b
}

const divide = (a,b) => {
    return a / b
}

const operate = (o,a,b) => {
    return o(a,b)
}

let display = ''
let opOne = 0
let opTwo = 1
let opType = null
const screen = document.querySelector('#screen')

const numbers = document.querySelectorAll('.number')
numbers.forEach( b => b.addEventListener('click', (e) => {
    display = display.concat(e.target.id)
    screen.textContent = display
}))

const operands = document.querySelectorAll('.op')
operands.forEach(b => addEventListener('click', (e) => {
    
}))

