const numberButtons = document.querySelectorAll(".number");
const clearButton = document.getElementById("clear");
const clearAllButton = document.getElementById("clearAll");
const equalButton = document.getElementById("equal");
const operationButtons = document.querySelectorAll(".operation");
let screen1Display = document.getElementById("screen1");
let screen2Display = document.getElementById("screen2");

let currentNumber = '';
let previousNumber = '';
operator = '';

///FUNCTIONS 

function handleNumber (number) {
    currentNumber = currentNumber + number;
    screen2Display.innerText = currentNumber;
}

function handleOperator (op) {
    if(currentNumber == '' && previousNumber == '' && (op != '-' && op != '+')) return;
    if(currentNumber == '' && previousNumber == '' && (op == '-' || op == '+')) {
        currentNumber = op;
        screen2Display.innerText = currentNumber;
        operator = '';

    }
    if (currentNumber == '-' || currentNumber == '+') return;

    else if(previousNumber == '') {
        previousNumber = currentNumber;
        checkOperator(op);
    }
    else if (currentNumber == '') {
        checkOperator(op);
    }
    else if (previousNumber != '' && currentNumber != '') {

        calculate();
        operator = op;
        screen1Display.innerText = previousNumber + " " + operator;
        screen2Display.innerText = '';
        currentNumber = '';
    }
    
    
    
}

function checkOperator (op) {
    operator = op;
    screen1Display.innerText = previousNumber + " " + operator;
    screen2Display.innerText = '';
    currentNumber = '';
}

function displayResults () {
    screen2Display.innerText = previousNumber;
    screen1Display.innerText = '';
    operator = '';
    currentNumber = '';
}

function roundDecimal (number) {
    return Math.round(number * 100000) / 100000;
} 

function calculate () {
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);

    if(operator == '/') {
        if(currentNumber == 0) {
            previousNumber = "ERROR"
            displayResults();
        }
        else {
        previousNumber = previousNumber / currentNumber;
        }
    }
    if(operator == 'X') {
        previousNumber = previousNumber * currentNumber;
    }
    if(operator == '+') {
        previousNumber = previousNumber + currentNumber;
    }
    if(operator == '-') {
        previousNumber = previousNumber - currentNumber;
    }
    if(operator == '') {
        previousNumber = currentNumber;
    }

    previousNumber = roundDecimal (previousNumber);
    previousNumber = previousNumber.toString();
    displayResults();
}

function clearAll () {
    screen1Display.innerText = '';
    screen2Display.innerText = '';
    operator = '';
    previousNumber = '';
    currentNumber = '';
}

function clear () {
    if (currentNumber == '-' || currentNumber == '+') {
        currentNumber = '';
        screen2Display.innerText = '';
        return; 
    }

    currentNumber = currentNumber.slice(0, -1)
    if (currentNumber == 0) {
        currentNumber = '';
    }
        screen2Display.innerText = currentNumber;

}

///EVENTS LISTENERS

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add("buttonClickedLeft");
        setTimeout(() => button.classList.remove("buttonClickedLeft"), 500);

        handleNumber(button.id);
    })
})

clearButton.addEventListener('click', () => {
    clearButton.classList.add("buttonClickedClear");
    setTimeout(() => clearButton.classList.remove("buttonClickedClear"), 500);

    clear();
})

clearAllButton.addEventListener('click', () => {
    clearAllButton.classList.add("buttonClickedClearAll");
    setTimeout(() => clearAllButton.classList.remove("buttonClickedClearAll"), 500);

    clearAll();
})

equalButton.addEventListener('click', () => {
    equalButton.classList.add("buttonClickedEqual");
    setTimeout(() => equalButton.classList.remove("buttonClickedEqual"), 500);

    if(previousNumber != "" && currentNumber != "") {
        calculate();
    }

})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add("buttonClickedRight");
        setTimeout(() => button.classList.remove("buttonClickedRight"), 500);

        handleOperator(button.id);
    });
});
         

