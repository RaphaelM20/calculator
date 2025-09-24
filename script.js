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
        return "NaN"
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
        case 'x':
            return multiplication(num1, num2);
        case '÷':
            return division(num1, num2);
        default:
            return num1;
    }
}

//display value
let justCalculated = false;
let display = "";

const screenText = document.querySelector('#screen-text');
const reactionFace = document.querySelector('#reaction-face');

function updateDisplay() {
    if (justCalculated) {
        screenText.textContent = display;  // Just show result
    } else if (num1 && operand && display) {
        screenText.textContent = `${num1} ${operand} ${display}`;
    } else if (num1 && operand) {
        screenText.textContent = `${num1} ${operand}`;
    } else {
        screenText.textContent = display;
    }

    if (display === "NaN") {
        reactionFace.style.display = "inline-block";
    } else {
        reactionFace.style.display = "none";
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

let lastOperand = null;
let lastNum2 = null;

operatorClicked.forEach(op => {
    op.addEventListener('click', function () {
        if (num1 && operand && display) {
            let result = operate(Number(num1), Number(display), operand);
            result = parseFloat(result.toFixed(4));
            num1 = result.toString();
            display = '';
            screenText.textContent = num1;
        } else {
            num1 = display;
            display = '';
        }

        operand = op.textContent;

        operatorClicked.forEach(btn => btn.classList.remove('active-operator'));
        op.classList.add('active-operator');
    });
});

const equalButton = document.querySelector('#equal');

equalButton.addEventListener('click', function () {
    if (!operand && lastOperand && lastNum2) {
        let result = operate(Number(num1), Number(lastNum2), lastOperand);
        result = parseFloat(result.toFixed(4));
        display = result.toString();
        screenText.textContent = display;
        num1 = display;
        justCalculated = true;
        return;
    }

    if (!operand) {
        if (display === "") display = "0";
        screenText.textContent = display;
        justCalculated = true;
        return;
    }

    num2 = display;
    let result = operate(Number(num1), Number(num2), operand);

    if (typeof result === "number") {
        result = parseFloat(result.toFixed(4));
    }

    display = result.toString();
    screenText.textContent = display;
    justCalculated = true;

    lastOperand = operand;
    lastNum2 = num2;

    num1 = display;
    num2 = '';
    operand = '';
});

const clearButton = document.querySelector('.clearButton');

clearButton.addEventListener('click', function (){
    screenText.textContent = "";
    display = "";
    num1 = '';
    num2 = '';
    operand = '';
    operatorClicked.forEach(btn => btn.classList.remove('active-operator'));
    reactionFace.style.display = "none";
})