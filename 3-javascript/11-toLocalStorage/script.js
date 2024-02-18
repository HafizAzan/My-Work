/**
 * local storage data store krne ke kaam aata hai aur ismai data isai ke pass rahta hai window object mai
 *  cookie mai ek request hit krtay thay tw wo automatically server ke pass chala jata tha
 *
 *  local storage brower mai safe hota hai
 *  iski request server pr jaaati hai with out data
 *  html5 support krta hai isay
 *  kisi bhi window pr open hojata hai
 *  aur ye kabhi expire nhi hoga just hamari marzi se remove hoga
 *  local storage mai pair hota hai = key : value
 *  brower mai hota hai ye local data save kr sktay hain
 *  ye limited hota hai or secure hota hai
 *  koi bhi website acces nhi kr skti ye data uske liai jis ne banaye hai website .
 *  agar url change hojaye ga tw data nhi milay ga
 *  local storage sirf string ko samaj ta hai
 *  e-comerce jesi website ke ander ye kaam ata hai
 *  page realod ya brower close krne ke baad bhi data milay ga
 *
 * @format
 */

// localStorage.setItem('name','azan');
// localStorage.setItem('location','surjani');
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('location');
// localStorage.clear();

// const userItem = {
//     theme : "dark",
//     score : 100
// }

// const jsonData = JSON.stringify(userItem);
// localStorage.setItem("userItem",jsonData);
// const uSet = JSON.parse(localStorage.getItem("userItem"));
// console.log(uSet)

const selectTheme = document.querySelector("#selectTheme");

const getTheme = localStorage.getItem("theme");
console.log(getTheme);

selectTheme.addEventListener("change", (event) => {
  event.preventDefault();
  let targeter = event.target.value;
  console.log(targeter, "clicked!");
  localStorage.setItem("theme", targeter);
  themeCheck(targeter);
});

function themeCheck(theme) {
  if (theme === "dark") {
    document.body.style.backgroundColor = "#222";
  } else if (theme === "light") {
    document.body.style.backgroundColor = "#e5e5e5";
  } else {
    document.body.style.backgroundColor = "#fff";
  }
}

window.addEventListener("storage", (work) => {
  // e.preventDefault();
  console.log(work);
  if (work.key === "theme") {
    themeCheck(work.newValue);
    selectTheme.value = work.newValue;
  }
});
