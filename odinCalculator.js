
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