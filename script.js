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

Array.from(operationButtons).forEach(operationButton => {
    operationButton.addEventListener('click', () => {

        Array.from(operationButtons).forEach(element => {
            if(element.id != operationButton.id) removeClickedClass(element)
        });
        
        operationButton.classList.toggle("buttonClickedRight");


    });
        
});