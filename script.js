let calHead = document.querySelector(".cal-head");
let btnNumbers = document.querySelectorAll(".btn-number");
let btnDEL = document.querySelector(".btn-del");
let btnRES = document.querySelector(".btn-reset");
let btnEqual = document.querySelector(".btn-equal");
let btnOperator = document.querySelectorAll(".btn-Operator");

// Add number in calculator head
btnNumbers.forEach(function (btnNumber) {
  btnNumber.addEventListener("click", function addNumber() {
    if (calHead.textContent === "0") {
      calHead.textContent = btnNumber.textContent;
    } else {
      calHead.textContent += btnNumber.textContent;
    }
  });
});

// Delete last character
btnDEL.addEventListener("click", function DELETE() {
  let cutStr = calHead.textContent.slice(0, -1);
  calHead.textContent = cutStr || "0";
});

// Reset calculator
btnRES.addEventListener("click", function RESET() {
  calHead.textContent = "0";
});

// Perform calculation when "=" is clicked
btnEqual.addEventListener("click", function EQUAL() {
  // Replace "x" with "*"
  let expression = calHead.textContent.replace(/x/g, "*");


  // Use eval to evaluate the expression and update calHead
  calHead.textContent = eval(expression);
});

// Add operators to the calculator head
btnOperator.forEach(function (btnOperator) {
  btnOperator.addEventListener("click", function addOperator() {
    calHead.textContent += btnOperator.textContent;
  });
});
