//A and B are the two parts of the operation
let a = 0;
let b = 0;
let operator = '';

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