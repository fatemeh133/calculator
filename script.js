let calHead = document.querySelector(".cal-head");
let btnNumbers = document.querySelectorAll(".btn-number");
let btnDEL = document.querySelectorAll(".btn-del");

//add number in calculator head
btnNumbers.forEach(function btnLoop(btnNumber) {
  btnNumber.addEventListener(`click`, function name(params) {
    if (calHead.textContent == 0) {
      calHead.textContent = btnNumber.textContent;
    } else {
      calHead.textContent += btnNumber.textContent;
    }
  });
});
