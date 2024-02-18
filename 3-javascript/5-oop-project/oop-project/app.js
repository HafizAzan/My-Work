// const bookForm = document.querySelector("#book-form");
// const bookList = document.querySelector("#book-list");
// console.log({bookForm,title,author,isbn,bookList});

// bookForm.addEventListener("submit",function(event){
//     event.preventDefault();
// const title = document.querySelector("#title");
// const author = document.querySelector("#author");
// const isbn = document.querySelector("#isbn");

// if(!title.value || !author.value || !isbn.value){
//     alert("plzz Fill This")
//     return;
// }
// // const CreateDiv = document.createElement("tr");
// // CreateDiv.innerHTML = ` <td>${title.value}</td>
// // <td>${author.value}</td>
// // <td>${isbn.value}</td>
// // <td><a href="#" class="delete">X<a></td>`

// // bookList.append(CreateDiv)
// title.value = ""
// author.value = ""
// isbn.value = ""
// bookList.addEventListener("click",function(e){
//     e.preventDefault();
//     const TargetValue = e.target;
//     if(TargetValue.className == "delete"){
//         TargetValue.parentElement.parentElement.remove()
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//           }).then((result) => {
//             if (result.isConfirmed) {
//               Swal.fire({
//                 title: "Deleted!",
//                 text: "Your file has been deleted.",
//                 icon: "success"
//               });
//             }
//           });
//     }
   
// })
// });

//////// With  OOP ///////
const bookForm = document.querySelector("#book-form");
const bookList = document.querySelector("#book-list");
const Container = document.querySelector(".container")
console.log({bookForm,bookList,title,author,isbn,Container});

function ui(){}
ui.prototype.addBook = function(ADDER){

const CreateDiv = document.createElement("tr");
CreateDiv.innerHTML = ` 
<td>${ADDER.title}</td>
<td>${ADDER.author}</td>
<td>${ADDER.isbn}</td>
<td><a href="#" class="delete">X<a></td>`
bookList.append(CreateDiv);
};

ui.prototype.showAlert = function(message = "", className = "success"){
  const Show = document.createElement("div");
  Show.className =`alert ${className}` 
  Show.innerText = message;

  Container.insertBefore(Show,bookForm)

  setTimeout(function(){
    Show.remove()
  },3000)
};

ui.prototype.removeList = function(Current){
  Current.parentElement.parentElement.remove();
}

function CreateObject(title,author,isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}


bookForm.addEventListener("submit",function(e){
e.preventDefault();

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const isbn = document.querySelector("#isbn");

if(!title.value || !author.value || !isbn.value){
  alert("Plzz Fill This Form OKAY!")
  return;
}
  // const bookObject = {
  //   title: title.value,
  //   author: author.value,
  //   isbn: isbn.value,
  // };

  const booker = new CreateObject(
    title.value,
    author.value,
    isbn.value  
  ); 
console.log(booker ,"booker")


const uiVaribale = new ui();
uiVaribale.addBook(booker)
uiVaribale.showAlert("Add Sucessfully!")

title.value = ""
author.value = ""
isbn.value = ""
console.log("submit is working")

bookList.addEventListener("click",function(Event){
  Event.preventDefault();
  const Current = Event.target;
  if(Current.classList.contains("delete") && confirm("delete krna hai tw ok click kro")){
    const uiVaribale = new ui();
    uiVaribale.removeList(Current);
    uiVaribale.showAlert("Apne Remove krdya hai sorry !","error")
  }
});

// loop ke zareeai delete

// const trSelect = document.querySelectorAll(".delete");
// trSelect.forEach(function(single){
//   single.addEventListener("click",function(e){
//     e.preventDefault();
//     const current = e.target
//     current.parentElement.parentElement.remove()
//   });
// });

});