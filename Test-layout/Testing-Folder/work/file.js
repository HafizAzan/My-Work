const AzanPIcs = document.querySelector("#Azan")
const janPIcs = document.querySelector("#jan")
const imagesHaIn = document.querySelectorAll(".images-hain");
AzanPIcs.addEventListener("click",function(e){
  imagesHaIn.style.display = "block"
console.log("clicked")
});


const selectFilter = document.querySelector("#input-amount");
selectFilter.addEventListener("keyup" , function(event){
event.preventDefault();
const targeterValue = event.target;
const nowValueTarget = targeterValue.value; 
const allCollection = document.querySelectorAll("#images-hain");
allCollection.forEach(function(single){
if(single.innerText.toLowerCase().indexOf(nowValueTarget.toLowerCase())=== -1){
  single.style.display="none";
}else{
  single.style.display="block";
}
});
});;
