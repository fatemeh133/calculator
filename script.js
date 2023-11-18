let calHead = document.querySelector(".cal-head");
let btnNumbers = document.querySelectorAll(".btn-number");
let btnDEL = document.querySelector(".btn-del");
let btnRES = document.querySelector(".btn-reset");
let btnEqual = document.querySelector(".btn-equal");

//add number in calculator head
btnNumbers.forEach(function btnLoop(btnNumber) {
  btnNumber.addEventListener(`click`, function addNumber() {
    if (calHead.textContent == 0) {
      calHead.textContent = btnNumber.textContent;
    } else {
      calHead.textContent += btnNumber.textContent;
    }
    if (isNaN(Number(calHead.textContent))) {
      console.log("hi");
    }
  });
});

btnDEL.addEventListener(`click`, function DELETE() {
  let cutStr = calHead.textContent.slice(0, -1);
  if (cutStr) {
    calHead.textContent = cutStr;
  } else calHead.textContent = 0;
});

btnRES.addEventListener(`click`, function RESET() {
  calHead.textContent = 0;
});

btnEqual.addEventListener(`click`, function RESET() {});
