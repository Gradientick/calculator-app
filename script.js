const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

let currentInput = "";
let previousInput = "";
let operator = undefined;
let total = "";

const updateDisplay = () => {
  currentOperandTextElement.textContent = currentInput;
};

const clear = () => {
  currentInput = "";
  previousInput = "";
  previousOperandTextElement.textContent = "";
  currentOperandTextElement.textContent = "";
};

numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    currentInput += event.target.textContent;
    updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (currentInput === "") return;

    currentOperandTextElement.textContent = "";
    previousInput = currentInput;
    currentInput = "";
    previousOperandTextElement.textContent =
      previousInput + event.target.textContent;
    operator = event.target.textContent;
  });
});

allClearButton.addEventListener("click", (event) => {
  clear();
});

equalsButton.addEventListener("click", (event) => {
  switch (operator) {
    case "+":
      total = previousInput + currentInput;
      currentInput = total;
      currentOperandTextElement.textContent = currentInput;
      break;
    case "-":
      total = previousInput - currentInput;
      currentInput = total;
      currentOperandTextElement.textContent = currentInput;
      break;
    case "*":
      total = previousInput * currentInput;
      currentInput = total;
      currentOperandTextElement.textContent = currentInput;
      break;
    case "/":
      total = previousInput / currentInput;
      currentInput = total;
      currentOperandTextElement.textContent = currentInput;
  }
});
