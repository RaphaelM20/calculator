const calculatorNumbers = document.querySelectorAll('.one-to-nine');
const operators = document.querySelectorAll('.operator');

let currentInput = "";
let currentOperand = "";
let clickedNumbers = [];

//

calculatorNumbers.forEach(number => {
    number.addEventListener('click', function(){
        currentInput += number.textContent;
        console.log('Ans: ', currentInput);
    })
})

operators.forEach(operand => {
    operand.addEventListener('click', function(){
        if (currentInput !== "")
            clickedNumbers.push(Number(currentInput));
            currentInput = "";  
    })
    currentOperand = operand.textContent;
    console.log(currentOperand);
})

function calculateResult () {
    let result;

    num1 = clickedNumbers[0];
    num2 = clickedNumbers[1];

    if (clickedNumbers.length === 2 && currentOperand === '+') 
        result = num1 + num2
    elif (clickedNumbers.length === 2 && currentOperand === '-') 
        result = num1 - num2
    elif (clickedNumbers.length === 2 && currentOperand === 'x') 
        result = num1 * num2
    elif (clickedNumbers.length === 2 && currentOperand === '÷') 
        result = num1 !== 0 ? num1 / num2 : "Error";

    clickedNumbers = [];
    currentOperand = "";
    console.log(result);
    return result;
}