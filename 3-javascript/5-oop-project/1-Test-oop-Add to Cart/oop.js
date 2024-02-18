const SelectTaskForm = document.querySelector("#task-form");
const TaskInput = document.querySelector("#task");
const collection = document.querySelector(".collection")
console.log({SelectTaskForm,collection})

function UI(){}
UI.prototype.addBooks = function(ADDER){

const CreateDiv = document.createElement("li");
CreateDiv.className =  `collection-item`
CreateDiv.innerHTML = ` ${ADDER.TaskInput} 
<a href="#" class="delete-item secondary-content">
  <i class="fa fa-remove"></i>
</a>`

collection.append(CreateDiv);
};

function CreateObject(TaskInput){
    this.TaskInput = TaskInput;
};

SelectTaskForm.addEventListener("submit",function(e){
e.preventDefault();
if(!TaskInput.value){
    alert("isai fill kren baraye karam!")
    return;
}
console.log("submited")


const Booker = new CreateObject(TaskInput.value);

console.log(Booker)

const uiVari = new UI()
uiVari.addBooks(Booker)
console.log(uiVari)

TaskInput.value = ""

});

collection.addEventListener("click",function(e){
    e.preventDefault();
    const currrent = e.target;
    if(currrent.classList.contains("fa-remove") && confirm("aru you wanna be delete this?")){
        currrent.parentElement.parentElement.remove();
    }
});

const ClearTask = document.querySelector(".clear-tasks");
console.log(ClearTask)
ClearTask.addEventListener("click" , function (e){
e.preventDefault();
if(confirm("Are you Sure ?")){
    collection.innerHTML = ""
}
});

const SelectSearchFilter = document.querySelector("#filter")
SelectSearchFilter.addEventListener("keyup",function(e){
        e.preventDefault();
        let targeter = e.target;
        let valueTargeter = targeter.value 
        const collectionItem = document.querySelectorAll(".collection-item")
        collectionItem.forEach(function(singleRow){
         if(singleRow.innerText.toLowerCase().indexOf(valueTargeter.toLowerCase())== -1){
        singleRow.style.display = "none";
         }else{
        singleRow.style.display = "block";
        }
    });
});
console.log(SelectSearchFilter)