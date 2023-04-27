const screenDisplay = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let calculation = [];
let accumlativecalculation;
function calculate(button) {
    const value = button.textcontent;
    if (value === "clear") {
        calculation = [];
        screenDisplay.textContent = "0";
    }
    else if (value === "=") {
        screenDisplay.textContent = eval(accumlativecalculation);
        calculation = [];
        accumlativecalculation = "";
    }
    else {
        calculation.push(value);
        accumlativecalculation = calculation.join('');
        screenDisplay.textcontent = accumlativecalculation;
    }
}
buttons.forEach(button => button.addEventListener('click', () => calculate(button)));
