//basic math function
function addition (num1, num2) {
    let result = num1 + num2;
    return result;
}

function subtraction (num1, num2) {
    let result = num1 - num2;
    return result;
}

function multiplication (num1, num2) {
    let result = num1 * num2;
    return result;
}

function division (num1, num2) {
    if (num2 === 0)
        return 'Error'
    let result = num1 / num2;
    return result;
}

let num1;
let num2;
let operand;

function operate (num1, num2, operand) {
    switch(operand){
        case '+':
            return addition(num1, num2);
        case '-':
            return subtraction(num1, num2);
        case '*':
            return multiplication(num1, num2);
        case '÷':
            return division(num1, num2);
        default:
            return 'Invalid Operator';
    }
}

//display value

let display = "";

const screen = document.querySelector('.screen');

function updateDisplay() {
    screen.text = display;
}

const numberClicked = document.querySelectorAll('.number');

numberClicked.forEach(number => {
    number.addEventListener('click', function (){
        display += number.textContent;
        updateDisplay();
    })
})

const operatorClicked = document.querySelectorAll('.operator');

operatorClicked.forEach(op => {
    op.addEventListener('click', function () {
        num1 = display;
        operand = op.textContent;
        display = '';
    })
})

const equalButton = document.querySelector('#equal');


equalButton.addEventListener('click', function () {
    num2 = display;
    let result = operate(Number(num1), Number(num2), operand);
    display = result.toString();
    updateDisplay();
})
