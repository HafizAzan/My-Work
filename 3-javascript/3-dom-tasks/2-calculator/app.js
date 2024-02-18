/** @format */

const selectButton = document.querySelector(".buttons");
const selectScreen = document.querySelector(".screen");
const ClearBtn = document.querySelector(".btn-clear");
const ClearEqual = document.querySelector(".btn-equal");
const ClearE = document.querySelector(".btn-E");

// console.log(ClearBtn,"ClearBtn");

selectButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(selectButton, "selectButton");
  const targetCurrent = event.target;
  console.log(targetCurrent.classList, "targetCurrent");
  if (targetCurrent.classList.contains("btn")) {
    console.info("btn is working!");
    const attributeSelect = targetCurrent.getAttribute("data-num");
    selectScreen.value += attributeSelect;
    console.log(selectScreen.value, "attributeSelect");
  }
});

ClearBtn.addEventListener("click", function (e) {
  e.preventDefault();
  selectScreen.value = "0";
  console.log(ClearBtn, "ClearBtn");
});

ClearEqual.addEventListener("click", function (e) {
  e.preventDefault();
  selectScreen.value = eval(selectScreen.value);
  console.log(ClearEqual, "ClearEqual");
});

function regexWork(string = "") {
  return /[a-zA-Z]+$/.test(string);
}

selectScreen.addEventListener("input", function (e) {
  e.preventDefault();
  const screenInput = e.target;
  if (regexWork(selectScreen.value)) {
    selectScreen.value = "";
  }
});

ClearE.addEventListener("click", function (e) {
  e.preventDefault();
  selectScreen.value = " ";
  console.log(ClearE, "ClearE");
});
