console.log(document.querySelector(".cal-head").innerHTML);
let calHead = document.querySelector(".cal-head");
let btnNumbers = document.querySelectorAll(".btn-number");
btnNumbers.forEach(function btnLoop(btnNumber) {
  btnNumber.addEventListener(`click`, function name(params) {
    calHead.innerHTML = btnNumber.innerHTML;
  });
});
