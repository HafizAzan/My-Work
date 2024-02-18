// DOM document object module
// ye html ke documentent ko object ki surat mai lai aata hai  like is tarah ===Example==

console.log(document)
// console.log(document); // basurate {}; object

let selectTaskBtn = document.querySelector("#task-button");
console.log(selectTaskBtn,"selectTaskBtn");

selectTaskBtn.addEventListener("click", function (event) {
    event.preventDefault(); // default functionality ruk jaaye gi
    console.log("clicked!");
    // return;

const selectTaskListText = document.querySelector(".card-title");
console.log(selectTaskListText,"selectTaskListText");
// return;

if(selectTaskListText.innerText === "Task List"){
    selectTaskListText.innerText = "Add To List";
    selectTaskListText.style.color = "orange"; 
}
else if(selectTaskListText.innerText === "Add To List"){
    selectTaskListText.innerText = "Add to Task List";
    selectTaskListText.style.color = "purple";
}
else{
    selectTaskListText.innerText = "Task List";
    selectTaskListText.style.color = "yellow";
}
console.log(selectTaskListText);
});

let valOfDom ;
valOfDom = document;
valOfDom = document.all;
valOfDom = document.body;
valOfDom = document.head;
valOfDom = document.doctype;
valOfDom = document.all.length;
valOfDom = document.URL;
valOfDom = document.links;
valOfDom = document.links.length;
valOfDom = document.characterSet;
valOfDom = document.contentType;
valOfDom = document.forms;
valOfDom = document.forms[0];
valOfDom = document.links.className;
valOfDom = document.links.classList;
valOfDom = document.links.className;
valOfDom = document.links[0].classList.add("azan");
valOfDom = document.links[0].classList.remove("azan");

valOfDom = document.images;
valOfDom = document.scripts;
valOfDom = document.scripts[0];
valOfDom = document.scripts[2].getAttribute("src");
valOfDom = document.all.length;
console.log(valOfDom,"valOfDom");

const CardTitle = document.querySelector(".card-title");

CardTitle.style.color = "yellow";
CardTitle.style.background = "red";
CardTitle.style.padding = "10px";
CardTitle.style.marginBottom = "40px";
CardTitle.style.display = "none";
CardTitle.style.display = "block";
CardTitle.style.textContent = "Changed Text";
CardTitle.style.innerHtml = "<p style ='color: purple'>Azankhan</p>";
console.log(CardTitle,"CardTitle")

// let allLiElement = document.querySelectorAll("ul li");
// allLiElement = (document.querySelector(
// "ul li:nth-child(2)").innerHTML = `<li class="collection-item">
//       List Item
//       <a href="#" class="fordelete-item secondary-content">
//       <i class="fa fa-remove"></i>    
//       </a>
//       </li>`
// );

// console.log(allLiElement,"allLiElement");    

//even number = 2,4,6,8
//odd number = 1,3,5,7


//array ko ek ek kar ke access karega foreach k zariye see isko loop kehte hein

const selectAllLiElement = document.querySelectorAll("ul li:nth-child(even)");
selectAllLiElement.forEach(function (singleUlElement, index) {
  singleUlElement.style.color = "red";
});
  console.log(selectAllLiElement,"selectAllLiElement");  

const selectOddLiElements = document.querySelectorAll("ul li:nth-child(odd)");
selectOddLiElements.forEach (function (singleElement) {
  singleElement.style.color = "purple";
});
  console.log(selectOddLiElements,"selectOddLiElements"); 

const selectAllDeleteButtons = document.querySelectorAll(".fa-remove");
selectAllDeleteButtons.forEach(function (singleElement) {
  singleElement.addEventListener("click", function (event) {
    event.preventDefault();
console.log(selectAllDeleteButtons,"deleted");    
    const currentElement = event.target;
    console.log(currentElement, "currentElement");
    if (confirm("Are you sure ?")) {
      currentElement.parentElement.parentElement.remove();
    }
    console.log(
      "currentElement.parentElement"
    );
  });
});

//traversing in children

document.querySelectorAll(".collection-item").children;

//get children nodes

//node type
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node (line break)
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

let workingDom;
const list = document.querySelector("ul.collection");
workingDom = list.childNodes;
console.info(workingDom,"childstage");
workingDom = list.parentNode;
console.log(workingDom,"parentstage");

workingDom = list.firstChild;
workingDom = list.lastChild;
console.log(workingDom,"childs without element");

workingDom = list.firstElementChild;
workingDom = list.lastElementChild;
console.log(workingDom,"childs with element");

workingDom = list.childElementCount;
console.log(workingDom,"childs element with count");

const ulElement = document.querySelector("li.collection-item:first-child");
workingDom = ulElement.nextSibling;
workingDom = ulElement.nextElementSibling;
workingDom = ulElement.previousSibling;
console.log(ulElement,"1st child");

workingDom = ulElement.nextElementSibling.previousSibling;
console.log(workingDom,"workingDom");

var a = document.querySelector(".fa-remove"); 
a.closest('.collection-items');
console.log(a,"a");

// document.querySelector(".fa-remove").closest(".collection-text");

// how to create html ion js 
/* <h1 id="print-my-name">My Name is Azan Khan</h1> */

const liPrintName = document.createElement("li");
liPrintName.innerText = "     My Name Is Hafiz Azan";
liPrintName.setAttribute("id","print-my-name");
liPrintName.style.color ="red";

console.log(liPrintName,"liPrintName");

//Add Html In to Dom
var b = document.querySelector(".collection");
b.appendChild(liPrintName);
console.log(b,"b")

// document.querySelector(".collection").append(liPrintName);
// document.querySelector(".collection").appendChild(liPrintName);


/*
<li class="collection-item">
                  List Item
                  <a href="#" class="delete-item secondary-content">
                    <i class="fa fa-remove"></i>
                  </a>
                </li>
*/

const liElement = document.createElement('li');
liElement.className = "collection-item";
liElement.innerHTML = ` List Item
<a href="#" class="delete-item secondary-content">
<i class="fa fa-remove"></i>
</a>`;

console.log(liElement,"liElement");

const newHeading = document.createElement("h5");
newHeading.id = "#task-title";
newHeading.innerText ="All Tasks";

console.log(newHeading,"newHeading");

const c = document.querySelector(".card-action");

const oldHeading =  document.querySelector("#task-title");

c.replaceChild(newHeading,oldHeading);

// console.log(oldHeading ,newHeading);
console.log(newHeading,oldHeading);

const clearTaskButton = document.querySelector(".clear-tasks");
clearTaskButton.addEventListener("click", runEvent);
// clearTaskButton.addEventListener("dblclick", runEvent);
// clearTaskButton.addEventListener("mouseenter", runEvent);
// clearTaskButton.addEventListener("mouseleave", runEvent);
// clearTaskButton.addEventListener("mouseover", runEvent);
// clearTaskButton.addEventListener("mouseup", runEvent);
// clearTaskButton.addEventListener("mousedown", runEvent);


// const clear = document.querySelector('.clear-tasks');
// clear.addEventListener("click", function (events){
//   events.preventDefault();
//   console.log("clicked")
// });
 

//input field events

const inputWork = document.getElementById('task');
inputWork.addEventListener("input",runEvent);
// inputWork.addEventListener("change",runEvent);
// inputWork.addEventListener("keyup",runEvent);
// inputWork.addEventListener("keydown",runEvent);
// inputWork.addEventListener("keypress",runEvent);
// inputWork.addEventListener("focus",runEvent);
// inputWork.addEventListener("blur",runEvent);
// inputWork.addEventListener("cut",runEvent);
// inputWork.addEventListener("paste",runEvent);
// inputWork.addEventListener("copy",runEvent);

function runEvent (event){
  event.preventDefault();
  console.log(`Event Type: ${event.type}`);
  console.log("working")
  console.log(event.target.value,"input value working");
  // const inputValue = event.target.value;
  // const tasksTitle = document.querySelector("#tasks-title");
  // tasksTitle.innerText = inputValue ;
  // console.table(tasksTitle,inputValue)
};

const selectSpecialDropdown = document.querySelector("#special-btn");

selectSpecialDropdown.addEventListener("click", function (e) {
  e.preventDefault();
  const selectCustomDropdownUlElement =
    document.querySelector("#custom-dropdown");
  console.log(selectCustomDropdownUlElement, "selectCustomDropdownUlElement");

  if (
    selectCustomDropdownUlElement.classList.contains("active-special-dropdown")
  ) {
    selectCustomDropdownUlElement.className = "";
  } else {
    selectCustomDropdownUlElement.className = "active-special-dropdown";
  }

  console.log("clicked !")
});