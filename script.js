const number = '01234567889';
const operatorSymbol = '+-x/';
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
dotBtn.addEventListener('click', displayDot);

resetBtn.addEventListener('click', displayReset);
backBtn.addEventListener('click', displayBack);

addBtn.addEventListener('click', displayOperator);
substractBtn.addEventListener('click', displayOperator);
multiplyBtn.addEventListener('click', displayOperator);
divideBtn.addEventListener('click', displayOperator);
equalsBtn.addEventListener('click', displayEquals)


//A and B are the two parts of the operation
let a = '';
let b = '';
let operator = '';
let result = '';

function displayNumbers(event) {
    if (display.textContent == result && result !== '') {
        //Reset screen if the user inputs numbers directly on top of the result
        displayReset();
        displayClean();
        display.textContent = event.target.textContent;
    } else if (operatorSymbol.includes(display.textContent) && display.textContent !== '') {
        displayClean();
        display.textContent += event.target.textContent;
    } else {
        display.textContent += event.target.textContent;
    }
}

function displayOperator(event) {
    //case : operator is already there or there is nothing
    if (display.textContent == '' || operatorSymbol.includes(display.textContent) && display.textContent.length == 1) {
        console.log(display.textContent);
        return;
    }
    //Case : there is already an operation going on
    if (number.includes(display.textContent.at(-1)) && a !== '') {
        if (result !== '') {
            a = result;
            b = '';
            operator = event.target.textContent;
            display.textContent = operator;
        } else {
            b = display.textContent;
            result = +parseFloat(operate(a, b, operator)).toFixed(2);
            display.textContent = event.target.textContent;
        }
    } else if (number.includes(display.textContent.at(-1))) {
        //case : first operation
        a = display.textContent;
        displayClean();
        display.textContent = event.target.textContent;
        operator = event.target.textContent;
    }

}

function displayEquals() {
    if (a === '') {
        return;
    }

    if (operator === '/' && display.textContent === '0') {
        display.textContent = 'BAD BITCH';
    } else {
        b = display.textContent;
        displayClean();
        result = operate(a, b, operator);
        display.textContent = +parseFloat(result).toFixed(2);
    }

}

function displayDot() {
    if (display.textContent.includes('.') || display.textContent == '' || display.textContent == operator) {
        console.log('nope');
        return;
    } else {
        console.log('yes');
        display.textContent += '.';
    }
}

function displayReset() {
    display.textContent = '';
    a = '';
    b = '';
    operator = '';
    result = '';
}

function displayClean() {
    display.textContent = '';
}

function displayBack() {
    if (display.textContent == result && result !== '') {
        return;
    } else {
        display.textContent = display.textContent.slice(0, -1);
    }
}

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return substract(a, b);
        case '/':
            return divide(a, b);
        case 'x':
            return multiply(a, b);
    }
}

function add(a, b) {
    return Number(a) + Number(b);
}

function substract(a, b) {
    return Number(a) - Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}