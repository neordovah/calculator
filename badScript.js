/*const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");
const buttonDot = document.getElementById("dot");
const button0 = document.getElementById("0");
const buttonEqual = document.getElementById("equal");
const buttonDivide = document.getElementById("divide");
const buttonMultiply = document.getElementById("multiply");
const buttonAdd = document.getElementById("add");
const buttonSubstract = document.getElementById("substract");*/

const numberButtons = document.getElementsByClassName("number");
const clearButton = document.getElementById("clear");
const clearAllButton = document.getElementById("clearAll");
const equalButton = document.getElementById("equal");
const operationButtons = document.getElementsByClassName("operation");
const screen1Parent = document.querySelector("#screen1");
const screen2Parent = document.querySelector("#screen2");

function removeClickedClass (element) {
    if (element.getElementsByClassName("buttonClickedLeft")) {
        element.classList.remove("buttonClickedLeft")
    }
    if (element.getElementsByClassName("buttonClickedClear")) {
        element.classList.remove("buttonClickedClear");
    }
    if (element.getElementsByClassName("buttonClickedClearAll")) {
        element.classList.remove("buttonClickedClearAll");
    }
    if (element.getElementsByClassName("buttonClickedEqual")) {
        element.classList.remove("buttonClickedEqual");
    }
    if (element.getElementsByClassName("buttonClickedRight")) {
        element.classList.remove("buttonClickedRight");
    }
}

///ADD EVENTS LISTENERS

let number = '';
let number1 = '';
let currentNumber = '';

let n1=1, op=n2=0;

let number1Display = '';
let number2Display = '';
let operatorDisplay = '';


function clear (number) {
    let newNumber = Math.trunc(number / 10);
    if (newNumber == 0) newNumber = '';
    document.getElementById("number1").innerHTML = '';
    return newNumber;
}

function clearAll () {
    number1Display.innerHTML = '';
    operatorDisplay.innerHTML = '';
    number2Display.innerHTML = '';
}

function displayOnScreen2 (numberToDisplay) {

    if (n1 == 1) {
        number1Display = document.getElementById("number1");
        number1Display.innerHTML += numberToDisplay;
    }
    if (n1 == 0) {
        number2Display = document.getElementById("number2");
        number2Display.innerHTML += numberToDisplay;
    }
}

Array.from(numberButtons).forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        numberButton.classList.add("buttonClickedLeft");
        setTimeout(() => removeClickedClass(numberButton), 500);

        cipher = numberButton.id;
        displayOnScreen2(cipher);
        
    })
})
clearButton.addEventListener('click', () => {
    clearButton.classList.add("buttonClickedClear");
    setTimeout(() => removeClickedClass(clearButton), 500);

    displayOnScreen2(clear (currentNumber));
})

clearAllButton.addEventListener('click', () => {
    clearAllButton.classList.add("buttonClickedClearAll");
    setTimeout(() => removeClickedClass(clearAllButton), 500);

    clearAll();
})
equalButton.addEventListener('click', () => {
    equalButton.classList.add("buttonClickedEqual");
    setTimeout(() => removeClickedClass(equalButton), 500);
})

Array.from(operationButtons).forEach(operationButton => {
    operationButton.addEventListener('click', () => {

        Array.from(operationButtons).forEach(element => {
            if(element.id != operationButton.id) removeClickedClass(element)
        });
        
        operationButton.classList.toggle("buttonClickedRight");

        operatorDisplay = document.getElementById("operator");
        console.log(operatorDisplay)
        operatorDisplay.innerHTML = operationButton.id;
        console.log (operatorDisplay);
        if(operatorDisplay.innerHTML) n1 = 0;
        
        
    });
        
});

function main () {

}



/////////////////////////////////////////////////////////////////

