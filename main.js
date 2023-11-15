let currentInput = "";
let currentOperator = "";

/* To Erase */
function clearInput() {
    currentOperator = "";
    currentInput = "";
    document.getElementById("result").value = currentInput;
}

/* To Output Numbers */
function appendNumber(number) {
    currentInput += number;
    document.getElementById("result").value = currentInput;
}

/* Operations */
function add() {
    currentOperator = "+";
    currentInput += currentOperator;
    document.getElementById("result").value = currentInput;
}
function subtract() {
    currentOperator = "-";
    currentInput += currentOperator;
    document.getElementById("result").value = currentInput;
}
function multiply() {
    currentOperator = "*";
    currentInput += currentOperator;
    document.getElementById("result").value = currentInput;
}
function divide() {
    currentOperator = "/";
    currentInput += currentOperator;
    document.getElementById("result").value = currentInput;
}

/* Calculations */
function calculate() {
    const result = eval(currentInput);
    document.getElementById("result").value = result;
    currentOperator = "";
}