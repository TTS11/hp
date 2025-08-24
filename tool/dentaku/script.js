let displayValue = '0';
let pendingValue;
let evalStringArray = [];

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttonAnimation(button);
        const buttonText = button.getAttribute('value');
        if (buttonText === 'C') {
            clearDisplay();
        } else if (buttonText === '=') {
            evaluateExpression();
        } else {
            addToDisplay(buttonText);
        }
    });
});

function buttonAnimation(currentButton) {
    currentButton.classList.add('pressed');
    setTimeout(() => {
        currentButton.classList.remove('pressed');
    }, 100);
}

function addToDisplay(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    display.innerHTML = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    pendingValue = undefined;
    evalStringArray = [];
    display.innerHTML = displayValue;
}

function evaluateExpression() {
    evalStringArray.push(displayValue);
    const expression = evalStringArray.join('');
    displayValue = eval(expression);
    display.innerHTML = displayValue;
    evalStringArray = [];
}
