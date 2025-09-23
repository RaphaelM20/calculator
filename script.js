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
let justCalculated = false;
let display = "";

const screen = document.querySelector('#screen');

function updateDisplay() {
    if (justCalculated) {
        screen.textContent = display;  // Just show result
    } else if (num1 && operand && display) {
        screen.textContent = `${num1} ${operand} ${display}`;
    } else if (num1 && operand) {
        screen.textContent = `${num1} ${operand}`;
    } else {
        screen.textContent = display;
    }
}

const numberClicked = document.querySelectorAll('.number');

numberClicked.forEach(number => {
    number.addEventListener('click', function (){
        if (justCalculated){
            display = "";
            justCalculated = false;
        }

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

        operatorClicked.forEach(btn => btn.classList.remove('active-operator'));
        
        op.classList.add('active-operator');
    })
})

const equalButton = document.querySelector('#equal');

equalButton.addEventListener('click', function () {
    num2 = display;
    let result = operate(Number(num1), Number(num2), operand);

    if (typeof result === "number"){
        result = parseFloat(result.toFixed(4));
    }

    display = result.toString();
    justCalculated = true;
    updateDisplay();

    num1 = display;
    num2 = '';
    operand = '';
})

const clearButton = document.querySelector('.clearButton');

clearButton.addEventListener('click', function (){
    screen.textContent = "";
    display = "";
    num1 = '';
    num2 = '';
    operand = '';
    operatorClicked.forEach(btn => btn.classList.remove('active-operator'));
})