const Button = document.querySelector("#btn");
const output = document.querySelector("#output")
Button.addEventListener("click",function(event){
    event.preventDefault();
    // console.log("click  btn !");

    fetch("data.txt")
    .then((data) => data.text())
    .then((data) => {
    console.log(data,"data")
    output.innerHTML = data;    
})
    .catch(console.error);

  //with xml http request

  //create an xhr object
  const xhr = new XMLHttpRequest();
  //open
  xhr.open("GET", "data.txt", true);

  //optional - use for showing the spinner or loader
  xhr.onprogress = function () {
    // console.log(xhr.readyState, "xhr.readyState");
  };

  xhr.onload = function () {
    // console.log(xhr.readyState, "xhr.readyState");
    // console.log(this.status, "this.status");
    if (this.status == 200) {
      output.innerHTML = this.responseText;
    }
  };

  xhr.onerror = function (error) {
    console.error(error, "Request error...");
  };

  xhr.send();



/* 2nd Request */

    fetch("data.json").then((Response) => Response.json())
    .then((data) => {
       let outputTemp = "";
       data.forEach((singleRow) => {
        outputTemp += `<ul>
        <li>Id:${singleRow.id}</li>
        <li>Name:${singleRow.name}</li>
        <li>Company:${singleRow.company}</li>
        <li>Phone:${singleRow.phone}</li>
        </ul>`
       });
       console.log(outputTemp,"outputTemp");
       output.innerHTML = outputTemp
    })
    .catch(console.error);
});