// arrow function mai ham ek line ka code esay likh sktay hain;

// normal ;

let hello = function(name){
    return `hello Friend ${name}`
}
console.log(hello("Azan"))

// braces ham remove krdengay agar 1 line code ho tw or ismai return ki bhi need nhi hai
let welcome = () => {
    return "Khan"
}
console.log(welcome())

// agar hamne return krna hai tw 1 line mai code kr ke return hata dain ayr agar 1 parameter hai tw roound braces bhi hata dain 

let hii = name => `hello ${name}`
console.log(hii("khanAzan"))


let hi = (name,age) => `hello ${name} ${age}`
console.log(hi("khanAzan", 17))

// aur agar 1 hee parameter hai jis mai hama define krna hai value ko tw esay krengay

salam = (val) => "hello bhie" + val;
// salam = val => "hello bhie" + val;
console.log(salam("khan")) 


// Syncronous vs ASyncronous 
// Syncronous : iska mtlb line ba line code parhna hai

// console.log("html css");
// console.log("js");
// asdasdasdasd;
// console.log("React js");
// console.log("React Native");
// console.log("github");

// ASyncronous : iska mtlb hamne wait krna hai kisi cheez ka code mai

// console.log("html css");
// console.log("js");
// setTimeout(function(){
//     aaaaaaaaaa;
// },0)
// console.log("React js");
// console.log("React Native");
// console.log("github");

//is js is asyncronous by default ?
//answer is no

//thread
//javascript is single thread
//multi threading task is posible in javascript

//Event Loop

//chrome = v8 engine
//internet explorer = chakra engine
//firefox = spidermonkey

//v8 engine is compiler (translator)

//binary code = 0101010101010101

//how we can convert our normal syncrhronous code to asynchronous
//we have three methdos for that

// 1-Callback (Web Api Callback)
// 2-Promise
// 3-Async Await


//CallBack Example
setTimeout(function(){
    console.log("aaaaa")
},0)

//promise

const Variable = new Promise(function(resolve,reject){
    const Comp = 1;
    if(Comp == 1){
        resolve("Your Code Is Resolve !")
    }else{
        reject("Your Code Is Reject!")
    }
})
// console.log(Variable,"Variable")

Variable.then(function(firstParameter){
    console.log(firstParameter,"firstParameter")
})
.catch(function(error){
    console.log(error,"error")
})

// const variableOne = new Promise((resolve,reject) => {
//     let score = 1;
//     if(score == 1){
//         resolve("your code is resolve");
//     }
//     else{
//         reject("sorry");
//     }
//     variableOne.then((reponse) =>{
//         console.log(reponse,"reponse");
//     })
//     .catch((error)=>console.error)
// });

//fetch is builtin method in javascript and it is used for api
//and fetch is promise
//return karne bad ek or then lagasakte ho

// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(function(ResolveParam){
//     return ResolveParam.json()
// })
// .then(function(woCodeOPenHoJisKiLinkDiHai){
//  console.log(woCodeOPenHoJisKiLinkDiHai,"woCodeOPenHoJisKiLinkDiHai")
// })
// .catch(function(Reject1){
//     console.log(Reject1,"Reject1")
// })

fetch("https://jsonplaceholder.typicode.com/todos")
.then((resonse)=> resonse.json())
.then((data)=> console.log(data,"data"))
.catch(console.error)

// const getTodosData = function(){
//     return(
//         fetch("https://jsonplaceholder.typicode.com/todos")
//         .then(function(resolve){
//             return resolve.json();
//         })
//         .then(function(resolve){
//             return resolve;
//         })
//         .catch(function(reject){
//             console.log(reject)
//         })
//     );
// };

// Async Await 
// ham is mai multiples promises ko handle kr sktay hain 

// const doSomeThing = async function(){
//     const dataOne = await getTodosData();
//     const dataTwo = await getTodosData();
//     const dataThree = await getTodosData();
//     console.log(dataOne , "This Is Data One !")
//     console.log(dataTwo , "This Is Data Two !")
//     console.log(dataThree , "This Is Data Three !")
// };
// doSomeThing()

const getUrl = function(){
    return(
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response)=>{
            return response.json();
        }).then((data) =>{
            return data;
        })
        .catch((error) => console.error)
    )
}

const doSome = async function(){
    const OneData = await getUrl();
    const TwoData = await getUrl();
    const ThreeData = await getUrl();
    console.log(OneData,"OneData")
    console.log(TwoData,"TwoData")
    console.log(ThreeData,"ThreeData")
}
doSome();


//  4 is types of promises 

/*
* promise.all
* promise.allSettled
* promise.race
* promise.any
*/

/*1  promise.all  
is mai agar ek bhi promise reject hojaye tw sab reject hojatay hain warna reject naho tw sab resolve hotay hain 
*/

// Promise.all([
//     new Promise(function(resolve){
//         setTimeout(() => resolve("phela hai"),3000)
//     }),
//     new Promise((resolve) => setTimeout(() => resolve("2sra hai"),2000)),
//     new Promise((resolve) => setTimeout(() => resolve("3sra hai"),3000)),
//     // new Promise((reject) => setTimeout(() => reject(1),3000)),
// ])
// .then(function (resolve){
//     alert(resolve)
// })
// .catch(function (reject){
//     console.log(reject,"error")
// });


Promise.all([
    new Promise((resolve) => setTimeout(()=>resolve("first hai"),5000)),
    new Promise((reslove) => setTimeout(()=>reslove("2sra Hai"),3000)),
    new Promise((resolve) => setTimeout(()=>resolve("3sra haui"),5000)),
]).then((completed)=>{
    alert(completed,"completed")
}).catch(console.error);


/* 2 promise.allSettled
is mai ye hota hai ke agar ek ya do theen  promise reject hojain tw ye unhai resolve mai hee shumaar kr leta hai
*/

// Promise.allSettled([
// new Promise((resolve,reject) => setTimeout(() => resolve(1),4000)),
// new Promise((reject,resolve) => setTimeout(() => reject(new Error("whoops!")),5000)),
// new Promise((resolve,reject) => setTimeout(() => resolve(3) ),5000)
// ])
// .then((resolve) => console.log(resolve))
// .catch(alert);

Promise.allSettled([
    new Promise((resolve,reject) => setTimeout(()=> resolve(1),2000)),
    new Promise((resolve,reject) => setTimeout(()=> reject(new Error("oopsy!")),2000)),
    new Promise((resolve,reject) => setTimeout(()=> resolve(4),2000))
]).then((data) => console.log(data))
.catch(alert)

/* promise.race
is mai jo phelay aaya usne paya its means  phelay aayaen phelay paaaiyen
*/

Promise.race([
    new Promise((resolve,reject) => setTimeout( ()=> resolve(1),2000)),
    new Promise((resolve,reject) => setTimeout( ()=> reject(new Error("ooops!")),5000)),
    new Promise((resolve,reject) => setTimeout(()=>resolve(2),6000)),
])
.then(alert);

/* promise.any     
    is mai phelay promise ko resolve kr kay baaqio ko reject kr deta hai iska apna bharam hai !
*/

Promise.any([
new Promise((resolve,reject)=>setTimeout(()=>reject(new Error("kharab hogaya yrr!😊")),2000)),
new Promise((reject,resolve)=>setTimeout(()=>resolve(1),8000)),
new Promise((reject,resolve)=>setTimeout(()=>resolve(5),8000)),
]).then(alert);

// JSON VS XML
// ye dono formater hain yani in ke zareeai data send or receive hota hai asyncrounusly

// JSON Example
// {
//   "employees":[
//       { "firstName":"John", "lastName":"Doe" },
//       { "firstName":"Anna", "lastName":"Smith" },
//       { "firstName":"Peter", "lastName":"Jones" }
//   ]
// }

// XML Example
//{
    /* <employees>
    <employee>
     <lastName>Doe</lastName  <firstName>John</firstName>Name>
    </employee>
    <employee>
      <firstName>Anna</firstName> <lastName>Smith</lastName>
    </employee>
    <employee>
      <firstName>Peter</firstName> <lastName>Jones</lastName>
    </employee>
  </employees> */
//  }


// AJAX STANDS FOR Asynchronous Javascript AND Xml
// Set of Web Technologies
// Send & Receive Data asynchronously
// Does not interfere with the current
// Json has replaced XML for the most part

//Ajax Features

// make async requests in the background
// no page reload/refersh
// fetch Data
// Very Intractive
// Display The Data or Append the Data

//API
// Application programming interface

//get data from url & send data from url

// Popular tools for ajax

// Fetch Api
// Axios
// Superaragent
// JQuery
// Node Http


/* 
Request Method

* GET : get data
* POST : store data
* PUT : update data
* PATCH : update data partically
* DELETE : data delete

*/