const calculator = document.querySelector("#calculator");
const firstNumber = document.querySelector("#first-number");
const secondNumber = document.querySelector("#second-number");
const operation = document.querySelector("#operation");
const result = document.querySelector("#result");

calculator.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstValue = firstNumber.valueAsNumber;
    const secondValue = secondNumber.valueAsNumber;
    let answer;

    switch (operation.value) {
        case "add":
            answer = firstValue + secondValue;
            break;
        case "subtract":
            answer = firstValue - secondValue;
            break;
        case "multiply":
            answer = firstValue * secondValue;
            break;
        case "divide":
            if (secondValue === 0) {
                result.textContent = "You cannot divide by zero.";
                return;
            }
            answer = firstValue / secondValue;
            break;
    }

    result.textContent = "Result: " + answer;
});