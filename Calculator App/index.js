
const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function changeSign() {
    display.value *= -1;
}

function calculate() {
    display.value = eval(display.value);
}