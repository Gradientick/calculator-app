// const screen = document.getElementById("screen");
// // calculator buttons
// const oneBtn = document.getElementById("onebtn");
// const twoBtn = document.getElementById("twobtn");
// const threeBtn = document.getElementById("threebtn");
// const fourBtn = document.getElementById("fourbtn");
// const fiveBtn = document.getElementById("fivebtn");
// const sixBtn = document.getElementById("sixbtn");
// const sevenBtn = document.getElementById("sevenbtn");
// const eightBtn = document.getElementById("eightbtn");
// const nineBtn = document.getElementById("ninebtn");
// const zeroBtn = document.getElementById("zerobtn");
// const addBtn = document.getElementById("add-btn");
// const minusBtn = document.getElementById("minus-btn");
// const multiplyBtn = document.getElementById("multiply-btn");
// const divideBtn = document.getElementById("divide-btn");
// const pointBtn = document.getElementById("pointbtn");
// const equalsBtn = document.getElementById("equals-btn");
// const clearBtn = document.getElementById("clear-btn");

// const calculatorButtons = [
//   oneBtn,
//   twoBtn,
//   threeBtn,
//   fourBtn,
//   fiveBtn,
//   sixBtn,
//   sevenBtn,
//   eightBtn,
//   nineBtn,
//   zeroBtn,
//   addBtn,
//   minusBtn,
//   multiplyBtn,
//   divideBtn,
//   pointBtn,
//   equalsBtn,
//   clearBtn,
// ];

// calculatorButtons.forEach((button) =>
//   addEventListener("click", function printButton() {
//     console.log(button.value);
//   })
// );

// numberButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     calculator.appendNumber(button.innerText);
//     calculator.updateDisplay();
//   });
// });

// class Calculator {
//   constructor(previousOperandTextElement, currentOperandTextElement) {
//     this.previousOperandTextElement = previousOperandTextElement;
//     this.currentOperandTextElement = currentOperandTextElement;
//     this.operation = undefined;
//   }

//   clear() {
//     this.currentOperand = "";
//     this.previousOperand = "";
//     this.operation = undefined;
//   }
//   delete() {}
//   appendNumber(number) {
//     this.currentOperand = number;
//   }
//   chooseOperation(operation) {}
//   compute() {}
//   updateDisplay() {
//     this.currentOperandTextElement.innerText = this.currentOperand;
//   }
// }

// const calculator = new Calculator(
//   previousOperandTextElement,
//   currentOperandTextElement
// );

// const numberButtons = document.querySelectorAll("[data-number]");
// const operationButtons = document.querySelectorAll("[data-operation]");
// const equalsButton = document.querySelector("[data-equals]");
// const deleteButton = document.querySelector("data-delete");
// const clearButton = document.querySelector("[data-clear]");
// const display = document.querySelector("[data-screen]");
// const previousOperandTextElement = document.querySelector(
//   "[data-previous-operand]"
// );
// const currentOperandTextElement = document.querySelector(
//   "[data-current-operand]"
// );

// appendNumber(number) {
//   if (number === '.' && this.currentOperand.includes('.')) return
//   this.currentOperand = this.currentOperand.toString() + number.toString()
// }

// numberButtons.forEach((button) => {
//   button.addEventListener;
//   "click",
//     () => {
//       ;
//     };
// });
// const inputFirstOperand = (number) => {};
// const calculator = (() => {
//   const add = (a, b) => a + b;
//   const sub = (a, b) => a - b;
//   const mul = (a, b) => a * b;
//   const div = (a, b) => a / b;
//   return { add, sub, mul, div };
// })();

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

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = "";
    }
  }
}

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
