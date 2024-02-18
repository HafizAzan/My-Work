/** @format */

const screenInput = document.querySelector(".screen");
const allBtn = document.querySelector("#buttons");
const EqualBtn = document.querySelector("#equal-btn");
const Delete = document.getElementById("Delete");
const off = document.getElementById("off");
const on = document.getElementById("on");
const data_btn = document.querySelectorAll(".data-btn");

console.log(allBtn);
allBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let targeterCurrent = event.target;
  console.log(targeterCurrent);
  if (targeterCurrent.classList.contains("button")) {
    const AttributesWant = targeterCurrent.getAttribute("data-num");
    screenInput.value += AttributesWant;
  }
});

EqualBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screenInput.value = eval(screenInput.value);
});

function regex(string = "") {
  return /[a-zA-Z]+$/.test(string);
}

screenInput.addEventListener("input", (event) => {
  event.preventDefault();
  if (regex(screenInput.value)) {
    screenInput.value = "";
  }
});

Delete.addEventListener("click", (event) => {
  event.preventDefault();
  if (screenInput.value) {
    screenInput.value = "0";
  }
});

off.addEventListener("click", (event) => {
  event.preventDefault();
  if (screenInput.value) {
    screenInput.value = "";
  }
  const btnAll = document.querySelectorAll(".match");
  btnAll.forEach((button) => {
    button.disabled = true;
  });
  data_btn.forEach((button) => {
    button.style.opacity = 0.5;
  });
});

on.addEventListener("click", (event) => {
  event.preventDefault();
  const btnAll = document.querySelectorAll(".match");
  btnAll.forEach((button) => {
    button.disabled = false;
    // button.style.opacity = 0.5;
  });
  data_btn.forEach((button) => {
    button.style.opacity = "";
  });
});
