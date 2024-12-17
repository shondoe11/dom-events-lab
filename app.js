/*-------------------------------- Constants --------------------------------*/

const calculator = document.querySelector('#calculator');
const buttons = document.querySelectorAll('.button');

/*-------------------------------- Variables --------------------------------*/
let currentInput = ''; 
let previousInput = ''; 
let operator = ''; 

/*------------------------ Cached Element References ------------------------*/

const display = document.querySelector('.display')

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener('click', (event) => {
  const button = event.target;

  // Ignore clicks outside on button elements
  if (!button.classList.contains('button')) return;

  const value = button.innerText;
  // Assign number type based on user select
  if (button.classList.contains('number')) {
    assignNumber(value);
  }
  // Assign operator type based on user select
  if (button.classList.contains('operator')) {
    assignOperator(value);
  }
  // for equal button
  if (button.classList.contains('equals')) {
    calculateResult();
  }
  // reset button
  if (value === 'C') {
    clearCalculator();
  }
  // Update the display
  updateDisplay();
});

/*-------------------------------- Functions --------------------------------*/

function assignNumber(value) {
    currentInput += value;
}
function assignOperator(value) {
    // This ignores the operator if there is no input
    if (currentInput === '') return;
    // calculate the result if operator is present
    if (operator === '') {
        calculateResult();
    }
    //assign operator within function, then move currentInput to previousInput via reassignment
    operator = value;
    previousInput = currentInput;
    currentInput = '';
}
function calculateResult() {
    // Make sure that a value appears in all 3 variables in order to calculate
    if (previousInput === '' || currentInput === '' || operator === '') return;
    //convert both inputs back into a number format
        const num1 = Number(previousInput); 
        const num2 = Number(currentInput);
        let result;
        //using switch method for operator assigned calculations
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 + num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
                default:
                    return;
        }
        //finally, update inputs and clears operator
        currentInput = result.toString();
        previousInput = '';
        operator = '';
}
function clearCalculator() {
    //reset
    currentInput = '';
    previousInput = '';
    operator = '';
}
function updateDisplay(){
    //update display if any of inputs have values and display 0 if empty
    display.innerText = currentInput || previousInput || '0';
}