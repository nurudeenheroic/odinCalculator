let display = document.querySelector('.display');
let isCalculated = false;
function addNumber(number) {
    if (display.value.endsWith('.')) {
        return;
    } else if (isCalculated === true) {
        display.value = number;
        isCalculated = false;
    } else if (isCalculated === false) {
        display.value += number;
    }
};
function evaluateItem() {
    display.value = Math.round(eval(display.value));
    console.log(typeof(display.value));
    console.log(display.value);
    isCalculated = true;
    if (display.value === 'Infinity') {
        display.value = 'Error';
    }
};
function clearItem() {

    display.value = '';
};
function deleteItem() {
   display.value = display.value.slice(0, -1);
};
let operatorArray = ['+', '-', '*', '/'];
function addOperator(operator) {
    if (display.value === '' && operatorArray.includes(operator)) {
        return;
    } else if(display.value.endsWith(operator)) {
        return;
    } else if (isCalculated === true) {
        display.value += operator;
        isCalculated = false;
    } else if (isCalculated === false) {
        display.value += operator;
    }
};