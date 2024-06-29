// script.js

document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonValue = button.textContent;

            if (button.id === 'clear') {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.textContent = '';
            } else if (button.id === 'backspace') {
                currentInput = currentInput.slice(0, -1);
                display.textContent = currentInput;
            } else if (button.classList.contains('operator')) {
                if (currentInput !== '') {
                    previousInput = currentInput;
                    currentInput = '';
                    operator = buttonValue;
                }
            } else if (button.id === 'equals') {
                if (previousInput !== '' && currentInput !== '' && operator !== '') {
                    currentInput = evaluateExpression(previousInput, currentInput, operator);
                    display.textContent = currentInput;
                    previousInput = '';
                    operator = '';
                }
            } else {
                currentInput += buttonValue;
                display.textContent = currentInput;
            }
        });
    });

    function evaluateExpression(firstOperand, secondOperand, operator) {
        firstOperand = parseFloat(firstOperand);
        secondOperand = parseFloat(secondOperand);

        switch (operator) {
            case '+':
                return (firstOperand + secondOperand).toString();
            case '-':
                return (firstOperand - secondOperand).toString();
            case '*':
                return (firstOperand * secondOperand).toString();
            case '/':
                return (firstOperand / secondOperand).toString();
            default:
                return '';
        }
    }
});
