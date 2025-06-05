//Creating buttons Variables
const backBtn = document.querySelector('.backspace');
const correctionBtn = document.querySelector('.correction');
const resetBtn = document.querySelector('.reset');
const divideBtn = document.querySelector('.divide');

const sevenBtn = document.querySelector('.seven');
const eightBtn = document.querySelector('.eight');
const nineBtn = document.querySelector('.nine');
const multiplyBtn = document.querySelector('.multiply');

const fourBtn = document.querySelector('.four');
const fiveBtn = document.querySelector('.five');
const sixBtn = document.querySelector('.six');
const substractBtn = document.querySelector('.substract');

const oneBtn = document.querySelector('.one');
const twoBtn = document.querySelector('.two');
const threeBtn = document.querySelector('.three');
const addBtn = document.querySelector('.add');

const signBtn = document.querySelector('.sign');
const zeroBtn = document.querySelector('.zero');
const dotBtn = document.querySelector('.dot');
const equalsBtn = document.querySelector('.equals');

const display = document.querySelector('.display');

//Event listeners
zeroBtn.addEventListener('click', displayNumbers);
oneBtn.addEventListener('click', displayNumbers);
twoBtn.addEventListener('click', displayNumbers);
threeBtn.addEventListener('click', displayNumbers);
fourBtn.addEventListener('click', displayNumbers);
fiveBtn.addEventListener('click', displayNumbers);
sixBtn.addEventListener('click', displayNumbers);
sevenBtn.addEventListener('click', displayNumbers);
eightBtn.addEventListener('click', displayNumbers);
nineBtn.addEventListener('click', displayNumbers);

resetBtn.addEventListener('click', displayReset);

//A and B are the two parts of the operation
let a = 0;
let b = 0;
let operator = '';

function displayNumbers(event) {
    display.textContent += event.target.textContent;
}

function displayReset() {
    display.textContent = '';
}

function operate(a, b, operator) {
    switch (operator) {
        case '+' :
            return add(a, b);
        case '-' :
            return substract(a, b);
        case '/' :
            return divide(a, b);
        case 'x' :
            return multiply(a, b);
    }
}

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

console.log(operate(4, 5, '/'));