const calculateScreen = document.querySelector('.calculate')
const resultScreen = document.querySelector('.result')

// Variable to store the calculation value
let calculateValue = ''

// Function called when a number is pressed
function tapNum(numValue) {
    // Add the number to the calculation screen
    addCalculateScreen(numValue)
}
// Function called when an operator is pressed
function tapOperator(operatorValue) {
    addCalculateScreen(operatorValue)
}

// Function to add a value to the calculation screen
function addCalculateScreen(value) {
    // Append the value to the calculation string
    calculateValue += value
    // Update the calculation screen display
    calculateScreen.textContent = calculateValue
}