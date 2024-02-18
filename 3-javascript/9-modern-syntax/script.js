// var let & const
// {}

// ===== let ====

// 1- let wala varibale scope ke ander work krta hai aur ye change bhi ho skta hai.
{
    let wwww = "azan";
    wwww = "khan" // change bhi hora
    console.log(wwww,"wwww") // work krega yahan
}
// console.log(wwww,"wwww") // yahan nhi krega

// === const ====

// 2- const wala varibale scope ke ander work krta hai aur ye change nhi ho skta.
{
const companyNAme = "CodeDEV";
// companyNAme = "suqadDev" chane nhi ho skta
console.log(companyNAme,"companyNAme")
}
// console.log(companyNAme,"companyNAme")

// === var ===
/*
var variable function ke scope ke bahar work krta hai , is liai ke ye azad (global) hai , change bhi hoga.
aur var variable function ke scope mai hai tw work krega , change bhi ho skta hai.
aur var jese kisi block yani (if else,etc) mai daaltay hain tw ye work nhi krta yani console bahar bhi ho skta hai aur ander bhi.
*/
{
var azan = "work"
// console.log(azan,"azan") ye yahan bhi work krega aur neachay bhi 
}
// console.log(azan,"azan") // yahan bhi q ke function ke scope mai nhi hai ye.

function khan(){
    console.log(azan,"azan")

    var ahmed = "oye bhie";
    console.log(ahmed,"ahmed")
}
khan()
// console.log(ahmed,"ahmed") // error q ke var abhi function ke scope mai hai. sahi!

let ali = true
if(true){
    var blockYaniIfElseEtcKeAnderWorkNhiKrega = "azan"
    console.log(blockYaniIfElseEtcKeAnderWorkNhiKrega,"blockYaniIfElseEtcKeAnderWorkNhiKrega")
}
// console.log(blockYaniIfElseEtcKeAnderWorkNhiKrega,"blockYaniIfElseEtcKeAnderWorkNhiKrega")

//  templeta literal yani  backtags `` or interpolution ${}

const fname = "hafiz";
const lname = "Azan";
console.log(fname,lname)

let fuName = "my name is "+ fname + " " + lname+"";
console.log(fuName,"fuName ye esay hee pass wala hai")

const fullName = `my name is${fname} ${lname}`
console.log(fullName,"fullNameYeTemplate literal wala hai")

//Array Methods
const products = [
    {
      id: 1,
      name: "Product One",
      price: 100,
    },
    {
      id: 2,
      name: "Product Two",
      price: 200,
    },
    {
    id: 3,
    name: "Product Three",
    price: 300,
  },
    {
      id: 4,
      name: "Product Four",
      price: 400,
    },
  ];

/*

-Loop Methods
map
filter
forEach
some
every
find
findIndex
reduce

-Array Changes method
push
pop
unshift
slice
splice
shift
*/

console.time();
products.forEach((singleProduct)=>{
    // return singleProduct.id // ismai single return nhi krta
    console.table(singleProduct)
})
console.timeEnd();
// ======= map
//  acha map array mai jab ham return krengay kisi specific yani 1 cheez ko tw wo hamay bataye ga
// console mai aur ham new array bhi bana sktay hain ismai kisi specific cheez ka;

let ProductNewArray;

ProductNewArray = products.map((single) =>{
    // return single.id;
    // return single.price;
    // return single.name;
    return{
        NameArrayNew : single.name,
        PriceArryNew : single.price,
        idArryNew : single.id,
    };
});
console.log(ProductNewArray,"ProductNewArray")
// ==================

// filter 
//wo product filter kar ke lao jis ki id brabar ho kisi specific ke
// ismia kisi specific ke zareeai single objct le skta hun agar object ho tw
let onceArray;
onceArray = products.filter((singleThing )=> singleThing.id === 1)
// onceArray = products.filter((singleThing )=> singleThing.name === "Product Three" )
console.log(onceArray,"filterWalaHaiYe")

// find 
// ye single object ya value return krega sahi!
let twoArray;
twoArray = products.find((singlePro) => singlePro.id === 1)
console.log(twoArray,"find object Wala");

twoArray = products
.map((singleProduct) => singleProduct.id)
.find((singleProduct) => singleProduct === 4) // value laayega
console.log(twoArray,"find value Wala");

// aur findIndex laayega array ka index
let threeArray
threeArray = products
.findIndex((singleIndex) => singleIndex.price === 200)
console.log(threeArray ,"index wala")

//  aur (every) return karta hai boolean ko
// agar sab ki condition true hain tw true return krta hai 
// sab true hongay tw true warna false
let four;
four = products.every((singleCheez) => singleCheez.price < 500 )
console.log(four,"every wala")

// aur (some) mai kisi 1 ki condition true hain tw tw tru warna false dega

let five;
five = products.some((singleSome) => singleSome.price > 0)
console.log(five,"some wala")

//reduce
// 1st param me condition return hogi jo jama karna hai
//2nd me ap doge accumulator = jama karne wala 
//initial value 0 hai

let six;
six = products.reduce((jamakrnewala,singleprice) => {
    console.log(jamakrnewala , singleprice.price)
    return jamakrnewala + singleprice.price;
}, 0);
console.log(six,"reduce wala")

// destructuring with array

const vehicels = ["mustnag","fX","RIO"];
console.log(vehicels,"vehicles")
// const car = vehicels[0]
// const ChotiCar = vehicels[1]
// const daala= vehicels[2]
// console.log(car,ChotiCar,daala)

// const [car,daala,ChotiCar] = vehicels;
//       ya
const [car,,ChotiCar] = vehicels; //  ham ismai skip bhi kr sktai hain 
console.log(car,ChotiCar)

//  destructuring with objects 

const vehicleOne = {
    brand: "Ford",
    model: "Mustang",
    type: "car",
    year: 2021,
    color: "red",
  };
  
  const { brand, model, type } = vehicleOne;
  console.log(brand, model, type)

//primitive vs reference
//Object & Array are reference type

// problem
const objectOne = {name : "hafiz"}
const objectTwo = objectOne;
objectTwo.name = "Azan";
console.log(objectOne.name)
console.log(objectTwo.name)
// solve

const object3 = {name : "Azan"}
const Object4 = {...object3}
Object4.name = "ahmed"
console.log(object3)
console.log(Object4)

//primitive type example
const numberOne = 10;
let numberTwo = numberOne;

numberTwo = 20;

console.log(numberOne); //10
console.log(numberTwo); //20

//Spread Operator = ... in array / object

// array ki under ki value spread opretor ke zareeai combined krne ke liai bhi hotay hain 
// dono ko jhorne ke liai hota hay spred opretor
const number1 = [1,2,3];
const number2 = [6,7,8,9];
const numberCombined = [...number1 , 4,5, ...number2] 
console.log(number1,number2,numberCombined)

const Object10 = {
    brand:"ford",
    model:"mustang",
    color:"red"
}
console.log(Object10,"object10 hai ye")

// dono mai ek hee cheez ho tw ye over ride krdega .  

const UpdateObject10 = {
    brand:"car",
    year: 2022,
    color:"yellow"
}
console.log(UpdateObject10,"UpdateObject10 hai ye")

const combineObject = {...Object10,...UpdateObject10}
console.log(combineObject,"combineObject")

//Optional chaining '?.'

let variable = {}
// console.log(variable.price.value) // ERROR 
console.log(variable?.price?.value) // Undefined

//Nullish coalescing operator '??'

let a;
console.log(a ?? "anoymouse")
// console.log(a !== null && a !== undefined ? "anoymouse" : "");

//Comparison with || 

let nameOne = null;
let nameTwo = null;
let nameThree = "working"

// show the first truthy value;
console.log(nameOne || nameTwo || nameThree || "hello")

// logical OR vs nullish ??

// yahan nichay tw defined hai tw ku nhi ara 
// waja =  logical OR  = ko jab ham camparison mai laaatay hain
// jab ham defined krtay hain 0 ko tw ye hamai ye agla argument pass kara deta hai
// q ke ye confused hojata hai ke ye 0 = false is waja se || in pipe line ke baad 
// wali value lai aata hai 

let height = 0;
console.log(height || 100); // 0 ana chahiye lkn nhi ara
console.log(height ?? 100);

// aur nullish ?? mai hamay ye esa hee dega jesa defined kia hoga warna || iske baad wala dega
/*

==== logical OR ====

alert(true || true) // true
alert(true || false) // true
alert(false || true)  // true
alert(false || false) // false  

koi 1 condition true hogui tw wo true dega

=== logical And && ===

alert(true && true) // true
alert(true && false) // false
alert(false && true)  // false
alert(false && false) // false  

dono condition true hongi tw true return krega 

*/
/*
Rest opretor
ye function ke parameter mai hota hai
*/

function check(fparam, ...lparam){
  console.log(fparam,lparam)
}
check(1,2,3,4,5,6,7,8,9)