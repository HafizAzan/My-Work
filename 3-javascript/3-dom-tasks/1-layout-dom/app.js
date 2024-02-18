//Add Task
//Remove Task
//Search Tasks
//Clear Task
//Select Form


let TaskForms = document.querySelector("#task-form");

TaskForms.addEventListener("submit" , function(event){
    event.preventDefault();
    console.info(event,"submited");

let TaskSelect = document.getElementById("task");
const SelectTask = TaskSelect.value; 
// console.log(TaskSelect,"TaskSelect");
console.info(SelectTask);
if(!SelectTask){
    alert("please Fill the Form & Submit it.");
    console.info(SelectTask);
    return;
}
console.log("It is Working");

let collectionSelect = document.querySelector(".collection");
// console.log(collectionSelect,"collectionSelect");
// let createH2Element = document.createElement("h2");
// createH2Element.innerText = "Hafiz Azan";
// console.log(createH2Element,"createH2Element");
// collectionSelect.append(createH2Element)
/*
<li class="collection-item">
List Item
<a href="#" class="delete-item secondary-content">
  <i class="fa fa-remove"></i>
</a>
</li>
*/

const liElementSelect = document.createElement("li")
liElementSelect.className ="collection-item";
liElementSelect.innerHTML = `${SelectTask}
<a href="#" class="delete-item secondary-content">
  <i class="fa fa-remove"></i>
</a>`
collectionSelect.append(liElementSelect);
TaskSelect.value ="";
console.log(liElementSelect,"liElementSelect");

});

const collectionUl = document.querySelector(".collection");
collectionUl.addEventListener("click" , function(event){
  event.preventDefault();
  console.log(collectionUl,"collection ul li dekhao now !");
  if(event.target.className === "fa fa-remove"){
    console.warn("btn is working");
    if(confirm("seriously ?")){
      event.target.parentElement.parentElement.remove();
      console.log("all working");
      }
  }
});

// mera andaaz
// const ClearTask = document.querySelector(".clear-tasks");
// ClearTask.addEventListener("click" , function (e){
// e.preventDefault();
// if(confirm("Are you Sure ?")){
//   console.log("clear btn working");
// }
// collectionUl.innerHTML="";
//});

// sir ka but this is most better then me
const ClearTask = document.querySelector(".clear-tasks");
ClearTask.addEventListener("click" , function (e){
e.preventDefault();
if(confirm("Are you Sure ?")){
  let SelectCollection = document.querySelector(".collection");
  SelectCollection.innerHTML="";
}
});

const selectFilter = document.querySelector("#filter");
selectFilter.addEventListener("keyup" , function(event){
event.preventDefault();
const targeterValue = event.target;
const nowValueTarget = targeterValue.value; 
const allCollection = document.querySelectorAll(".collection-item");
allCollection.forEach(function(single){
if(single.innerText.toLowerCase().indexOf(nowValueTarget.toLowerCase())=== -1){
  single.style.display="none";
}else{
  single.style.display="block";
}
});

console.log(nowValueTarget,"nowValueTarget");
});


// const selectCollectionBubling = document.querySelector(".collection");
// selectCollectionBubling.addEventListener ("click" ,function (singlelement){
//   singlelement.preventDefault();
//   if(singlelement.target.className === "fa fa-remove"){
//     console.log("delete btn clicked!")

//   }
//   console.log(selectCollectionBubling,"selectCollectionBubling");

// const deletekrna = document.querySelectorAll(".fa-remove");
// deletekrna.forEach(function (singleElement){
//   singleElement.addEventListener("click" ,function (event){
//     event.preventDefault();
//   const currentElement = event.target;
//   if(confirm("Are U Sure ?")){
//     currentElement.parentElement.parentElement.remove();
//   }
//   console.log(currentElement,"currentElement");  
//   })
// })
// });

// let saveCollection = document.querySelector(".collection");
// let clearTask = document.querySelector(".clear-tasks");
// clearTask.addEventListener("click", function (event){
//   event.preventDefault();
//   saveCollection.remove(clearTask);
//   console.log("working");
// });