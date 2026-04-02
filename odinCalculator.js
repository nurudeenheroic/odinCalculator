
function evaluateItem() {
    display.value = Math.round(eval(display.value));
    console.log(typeof(display.value));
    console.log(display.value);
    isCalculated = true;
    if (display.value === 'Infinity') {
        display.value = 'Error';
    }
};