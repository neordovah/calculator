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

Array.from(numberButtons).forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        numberButton.classList.add("buttonClickedLeft");
        setTimeout(() => removeClickedClass(numberButton), 500);
    })
})
clearButton.addEventListener('click', () => {
    clearButton.classList.add("buttonClickedClear");
    setTimeout(() => removeClickedClass(clearButton), 500);
})
clearAllButton.addEventListener('click', () => {
    clearAllButton.classList.add("buttonClickedClearAll");
    setTimeout(() => removeClickedClass(clearAllButton), 500);
})
equalButton.addEventListener('click', () => {
    equalButton.classList.add("buttonClickedEqual");
    setTimeout(() => removeClickedClass(equalButton), 500);
})

let selectedElements = 0;
let previousSelectedElement = '';
Array.from(operationButtons).forEach(operationButton => {
    operationButton.addEventListener('click', () => {
        selectedElements++;

        
  ///?!!!!!!
        if (selectedElements > 1) {
            Array.from(operationButtons).forEach(element => { if(element.id != operationButton.id) removeClickedClass(element)});
            selectedElements = 1;
        }
        operationButton.classList.add("buttonClickedRight");

        if (previousSelectedElement.id === operationButton.id) {
            operationButton.classList.toggle("buttonClickedRight");
        }
        previousSelectedElement = operationButton;
    });
        
       /* if (divide > 1 || multiply > 1 || add > 1 || substract > 1) {
            operationButton.classList.remove("buttonClickedRight");
            divide = multiply = add = substract = 0;
        }
        if ((divide + multiply + add + substract > 1) && (divide <= 1 && multiply <= 1 && add <= 1 && substract <= 1)) {
            divide = multiply = add = substract = 0;
        }

         if (operationButton.id == "divide") {
            divide++;
        }
        if (operationButton.id == "multiply") {
            multiply++;
        }
        if (operationButton.id == "add") {
            add++;
        }
        if (operationButton.id == "substract") {
            substract++;
        }
        
        
        console.log(divide, multiply, add, substract  )*/

    
})
