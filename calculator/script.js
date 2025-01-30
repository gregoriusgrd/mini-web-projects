const calculateScreen = document.querySelector('.calculate')
const resultScreen = document.querySelector('.result')

// Variable to store the current calculation value
let calculateValue = ''

// Array of valid operators for the calculator
const operators = ['%', '/', '+', '-', '*']

// Function called when a number button is pressed
function tapNum(numValue) {
    // Prevent adding a decimal point if the string is empty
    if(calculateValue == '' && numValue == '.' ){
        return;
    }

    // Prevent adding consecutive decimal points
    if(calculateValue.at(-1) == '.' && numValue == '.') {
        return;
    }

    // Add the number to the calculation string and update the screen
    addCalculateScreen(numValue)
}

// Function called when an operator button is pressed
function tapOperator(operatorValue) {
    // Do not allow an operator if the calculation string is empty
    if(calculateValue == '') return;

    // Prevent consecutive operators from being added
    if(operators.some(operator => calculateValue.at(-1) == operator)) {
        return;
    }

    // If there's a previous result, use it as the starting value for the next calculation
    if(resultScreen.textContent != '' && resultScreen.textContent != 'Error') {
        calculateValue = resultScreen.textContent
        resultScreen.textContent = ''
    }

    // Add the operator to the calculation string and update the screen
    addCalculateScreen(operatorValue)
}

// Function called when the equals (=) button is pressed to calculate the result
function tapResult() {
    try {
        // Evaluate the calculation string and display the result
        resultScreen.textContent = eval(calculateValue)
    } catch(e) {
        // If there's an error, display 'Error' on the result screen
        resultScreen.textContent = 'Error'
    }
}

// Function called when the clear (AC) button is pressed to reset everything
function tapClear() {
    // Reset the calculation value and clear the screens
    calculateValue = ''
    calculateScreen.textContent = calculateValue
    resultScreen.textContent = ''
}

// Function called when the delete (DEL) button is pressed to remove the last character
function tapDel(){
    // Remove the last character from the calculation string
    calculateValue = calculateValue.slice(0, -1)

    // Clear the result screen
    resultScreen.textContent = ''

    // Update the calculation screen with the new value
    calculateScreen.textContent = calculateValue
}

// Function to update the calculation screen with the current value
function addCalculateScreen(value) {
    // Append the new value to the calculation string
    calculateValue += value
    // Update the calculation screen display
    calculateScreen.textContent = calculateValue
}
