// // alert("working");

// let store =["aaa",1111, "bbb", "ccc", "ddd",]; //Array

// store ={
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
// };

// //  object

// // console.log(store);
// // console.log(store);

// store = "something";
// store = 12345;
// store = true;
// store = false;
// store = null;
// store = undefined;
// store = Symbol("values of symbol");

// // console.log(store);

// // primitive Example

// let HafizAzan_marks = 100;
// let AzanAhmed_marks = HafizAzan_marks;

// AzanAhmed_marks = 90;

// // console.log (HafizAzan_marks, "HafizAzan_marks");
// // console.log (AzanAhmed_marks, "AzanAhmed_marks");

// // Refrence Type Example // 

// // ====Easy Example of object =========

// let HafizAzan_marks_obj = {marks: 100,};
// let AzanAhmed_marks_obj = {...HafizAzan_marks_obj};

// AzanAhmed_marks_obj.marks = 90;

// // console.log(HafizAzan_marks_obj.marks, "HafizAzan_marks_obj");
// // console.log(AzanAhmed_marks_obj.marks, "AzanAhmed_marks_obj");

// // const info = {
// //     name : "HafizAzan",
// //     Designation: "Software Engineer",
// // };

// // // const info2 = info;
// // const info2 = {...info};

// // info2.name ="AzanAhmed";
// // info.name ="azankhan";

// // console.log (info.name);
// // console.log(info2.name);

// // ====Easy Example of Array =========

// const arrayone = [1,2,3];
// const arraytwo = [...arrayone];

// arraytwo.push(4);

// console.log(arrayone); 
// console.log(arraytwo);

// //====3 Types Variable=== 
// // 1-let
// // 2-const
// // 3-var

// // {} = scope

// // function name(){
// //}

// // let
// // ye work krta hai scope mai

// {
// let working = "aaaa";
// console.log(working,"working");
// }

// // ===constant=====
// // ye work krta hai scope mai and ye change nhi ho skta. 

// {
// const coachingname = "squad Coder Dev";
// console.log(coachingname); 
// }
// coachingname = "dev ,dev";

// // var
// // ye work nhi krta scope mai siwaai function scope ke

// // {
// // var headphone = "sony";
// // }
// // console.log(headphone);

// function name(){
//     var playstation = "sony";
//     console.log (playstation);
// }

// // variable mein letter small or capital krne se java mai koi farq nhi parhta like : if we write the some1 and some2 so jo console kia hoga usme error nhi aayega for example:

// let some = "azan";
// let Some = "hafiz"

// console.log(some,"some");
// console.log(Some,"Some");

// name  variable

// (1)       (2)            (3)         (4)
// letter , underscore , camelCase , PascalCase


// const company = "aaa"; 
// 1
// const company1234 = "aaa";
// 2
const html_css_javascript = "course";
// 3
const htmlCssJavascript = "course";
// 4
const HtmlCssJavascript = "course";

// console.log(HtmlCssJavascript, "HtmlCssJavascript");
// console.log(typeof HtmlCssJavascript, "HtmlCssJavascript");

// // type conversion
// parseInt / new Number  : ye convert karta hai String ko number mai
// new Number() , parseInt()
const mouseprice = "500";
console.log(mouseprice, "mouseprice");
console.log(typeof mouseprice, "mouseprice");

console.log(parseInt(mouseprice, "mouseprice"));
console.log(typeof parseInt(mouseprice, "mouseprice"));

// const mouseNumebr = (parseInt(mouseprice))
// console.log(mouseNumebr, "mouseNumber");

// new number: ye convert karta hai number mai string ko

// let testing_variable = new Number("2");
// testing_variable = new Number(true); // 1
// testing_variable = new Number(false); // 0
// testing_variable = new Number(null); // 0
// testing_variable = new Number("hello"); // Nan = Not a Number
// testing_variable = new Number([1, 2, 3, 4]); // Nan = Not a Number

// console.log(testing_variable, "testing_variable");
// testing_variable = (parseFloat ("100,20"));

// console.log(parseFloat("100.20"));
// console.log(typeof parseFloat("100.20"));

// string methods

// const testing_variable = "This is string and String is equal to text";
// console.log(testing_variable,"testing_variable");
// console.log(typeof testing_variable,"testing_variable");

// let testingvariable = new String(12121);
// let TestingVariable = new String(true);

// console.log(new String(12121));
// console.log(typeof new String(12121));

// console.log(new String(true));
// console.log(typeof new String(true));


// 2nd methods

// let someVariable = 1;

// testing_variable = someVariable.toString(); 
// testing_variable = (1).toString();
// console.log(testing_variable,"(1).toString")
// console.log(testing_variable,"someVariable.toString")

// testing_variable = "azan".toUpperCase();
// console.log(testing_variable,"azan".toUpperCase);
// testing_variable = "ayesha".toUpperCase();
// console.log(testing_variable,"ayesha".toUpperCase);

// Boolean methods

// testing_Variable = new Boolean(1);
// testing_variable = new Boolean(0);
// TestingVariable = new Boolean(null);


// console.log(TestingVariable,"TestingVariable");
// console.log(typeof TestingVariable,"TestingVariable");

TESTINGVARIABLE = {
    name : "AzanKhan",
    designation : "developer",
    coachingname : "squad coder dev",
};

// console.log(TESTINGVARIABLE);
// console.table(TESTINGVARIABLE);
// console.error(TESTINGVARIABLE);
// console.warn(TESTINGVARIABLE);
// console.info(TESTINGVARIABLE);

// arethmteic opreators:

// const testing_variable =  5 + 5;
// testing_variable =  5 - 5;
// testing_variable =  5 / 5;
// testing_variable =  5 % 5;
// testing_variable =  5 * 5;

// console.table(testing_variable);
// console.table(typeof testing_variable);

// math objects

// let testing_variable = Math.PI;  // (3.14159)
// testing_variable = Math.E; (2.71828)
// let roundVaribale = Math.round(99.49); 
// roundVaribale = Math.round(99.50)
// console.table(roundVaribale);
// console.table(typeof roundVaribale);

// The Math.floor() function returns the largest number less than or equal to a given number.

/*==================================
=            math floor            =
==================================*/
// for positive numbers
val = Math.floor(2.9);
val = Math.floor(2.4);
val = Math.floor(2.50);
val = Math.floor(3.80);
val = Math.floor(100.50);

console.table(val);
console.table(typeof val);

// for nagitive numbers

val = Math.floor(-2.5);
val = Math.floor(-2.80);
val = Math.floor(-4.80);
val = Math.floor(-5.100);

console.info(val);
console.info(typeof val);

/*=====  End of math floor  ======*/

// let testing_variable = Math.pow(5,4); // 5 * 5 * 5 * 5 = 625
// testing_variable = Math.min(1,2,3,4,5,6,7,8,9,);
// testing_variable = Math.max(1,2,3,4,5,6,7,8,9,50);
// testing_variable = Math.random();

// console.info(testing_variable);
// console.info(typeof testing_variable);

//String Concatination (text ko jorne ki bat hori hai)

const firstName = "Hafiz" ;
const secondName = "Azan" ;
const fullName = firstName +" "+ secondName ;
console.log(fullName);

//======================

let testing_Variable = "hello! This is Javascript and \"I will teach you.\"my Self Azan";

console.log(testing_Variable);

testing_Variable = 
"hello! This is Javascript and \n \n 'I will teach you.'my Self Azan";
console.log(testing_Variable);

testing_Variable = 
"hello! My name is \n \n'"+ fullName +" and my age is' 16 years old";

console.log(testing_Variable);

// template literal:

// `` = back tag
// // ${} = interpolation

testing_Variable = 
`hello! "My name is'${fullName}'

and my age is" 16 years old `;
console.log(testing_Variable);

testing_Variable = testing_Variable.concat(
    " new things",
    " new things 1",
    " new things 2",
);

// testing_Variable = testing_Variable.replace("16","10");
// testing_Variable = testing_Variable.includes("Azan");

// console.log(testing_Variable);

// COMPARISON
// equaltoo (==) ise data type se faraq nhi parhta;

const productName ="rowparrot";
let customerlocation = "5";
let dummyLocation = 5 ;   //yahan change krne se console change hoga .  
let deliveryCharges = 0;

if(customerlocation == "surjanitown"){
    deliveryCharges = 1000;
}
else if(customerlocation == "shadman"){
    deliveryCharges = 500;
}
else{
    deliveryCharges =  0;
}
console.table(customerlocation,"customerlocation");
console.table(deliveryCharges,"deliveryCharges");

// tripleequalto (===) ise data type se faraq parhta

// console.table(typeof customerlocation);
// console.table(typeof dummyLocation);

if(customerlocation === dummyLocation) {
    deliveryCharges = 10;
}

console.log(deliveryCharges, "delivery Charges");
console.log(testing_Variable, "testing_Variable");

let samaannNaam ="tigerkids";
let orignalLocation = "5";
let Location = 5;  
let deliveryPrices = "Rs:0";

if(orignalLocation === "5"){
     deliveryPrices = "RS:1000"
}
else if(Location === 5 ){
     deliveryPrices = "RS:500"
}
else{
    deliveryPrices = "RS: 0"
}

if(orignalLocation === Location) {
    deliveryPrices = 1000;
}

console.info(deliveryCharges,"deliveryCharges");
console.info(samaannNaam, "samaannNaam");

//not equal to = !=


const mobile = "iphone";
// const mobile = "china";

if (mobile != "china") {
  console.log("mobile is not from china");
} else {
  console.log("your mobile is from china");
}

// 2nd example

let cell = "samsung";
// let cell = "china";

if (cell != "samsung"){
    console.log("so your mobile is not from china");
}
else{
    console.log("othervise your  mobile is from china")
}

//not equal !== / so it will check the both type

 let mobile2 = 1;
if(mobile2 !== "1"){
    console.log("your mobile 2 is dashing");
}

// GREATER OR LESS THAN

// > greater than
// < less than

// 8 > 10 // false
// 8 < 10 // true

let id = 100;

if(id < 40){
    console.log("incorrect")
}
else {
    console.log("correct")
}

if(id > 40){
    console.log("correct")
}
else {
    console.log("incorrect")
}

// LOGICAL OPERATORS

//&& AND = both condition should be true
//|| OR = one condition should be true


//dono condition true honi chahiye
let box = "laptop";
let ram = "4gb";

if(box === "laptop" && ram === "6gb"){
    console.log("i will be happy")
}
else{
    console.log("i will be not happy")
}

//dono mai se koi ek true honi chahiye

let laptop = "hp";
ram = "4gb";


if(laptop === "hp" || laptop === "apple"){
    console.log("i will be happy")
}
else{
    console.log("i will be not happy")
}

//Ternary Operator
// single line if else condition

if(id === 100){
    // console.log("id is hundred")
}
else{
    // console.log("id is not hundred")
}

//ternary operator example
const condition = 
id === 100 ? console.log("id is hundred") : console.log("id is not hundred")

let idNAme = 250;

const condition2 =
idNAme === 250 ? console.log("idName is 250") : console.log("idName is not 250")

//multiple if else conditions

let profile = "azan";

if(profile === "azan"){
    console.log("true variable");
}
else if( profile === "ahmed"){
    console.log("This is true ahmed")
}
else if( profile === "khan"){
    console.log("This is true khan")
}
else if( profile === "aliaan"){
    console.log("This is true aliaan")
}
else if( profile === "kashan"){
    console.log("This is true kashan")
}
else if( profile === "salman"){
    console.log("This is true salman")
}else if( profile === "usman"){
    console.log("This is true usman")
}
else if( profile === "danish"){
    console.log("This is true danish")
}
else{
    console.log("etc")
}
// you can define conditions without braces
// if(profile ===  "khan") console.log("khan is true")
// if(profile !==  "khan") console.log("khan is not true")


let portfolio = "khan";
// if(portfolio === "azan") console.log("azan is ture")
if(portfolio !== "azan") console.log("khan is ture")

// EXAMPLE

// var COLOR = "red";
var COLOR = "green";

if(COLOR === "red"){
    console.info("yeah! color is red")
}
else if(COLOR === "blue"){
    console.info("yeah! color is blue")
}
else{
    console.error("color is not blue or red")
}

//switch statement
 
switch ("blue"){
    case "red":
    console.warn("red is right")
    break;
    case "blue":
    console.warn("blue is less right")    
    break; 
    default:
    console.table("color not red & blue")
    break;  
}

//Date Object
//it will get the date from your computer

// let dateValue;
// const today = new Date();

// console.log(today,"today");

// // let birthday = new Date("1-26-2007"); // month date year
// // let birthday = new Date("january 26 2007");
// let birthday = new Date("01/26/2007");
// console.log(birthday);

// dateValue = today.getMonth() +1;
// dateValue = today.getFullYear();
// dateValue = today.getHours();
// dateValue = today.getMinutes();
// dateValue = today.getSeconds();
// dateValue = today.getMilliseconds();
// dateValue = today.getTime();
// console.log(dateValue, "date value");

// today. setMonth(12);
// today. setDate(26);
// today. setFullYear(2007);
// today. setHours(1);
// today. setMinutes(10);
// today. setSeconds(30);

// console.log( 
//     `${today.getDate()} - ${today.getMonth()+1} - ${today.getFullYear()} ` 
// );

let timeGet;
const today  = new Date()
timeGet = today.getTime()
timeGet = today.getHours()
timeGet = today.getDate()
timeGet = today.getDay()
timeGet = today.getMinutes()
timeGet = today.getSeconds()
timeGet = today.getMilliseconds()
timeGet = today.getFullYear()
timeGet = today.getMonth() + 1;


today.setMonth(0) + 1;
today.setDate(26);
today.setFullYear(2007);
// timeGet = today.setDay();
document.write(`${today.getMonth(0) + 1}-${today.getDate(26)}-${today.getFullYear(2007)}`)



let day;
switch(new Date().getDay()){
    case 0:
    day = "sunday";
    break;   
    case 1:
    day = "monday";
    break;   
    case 2:
    day = "tuesday";
    break;   
    case 3:
    day = "wednesday";
    break;       
    case 4:
    day = "thursday";
    break;   
    case 5:
    day = "friday";
    break;   
    case 6:
    day = "saturday";
    break;           
}
console.log(today.getDay());
console.log(day);

function normalFunction(){
    console.log(`normal function`);
}

//with parameter
function printMyName(name){
    console.log(`my name is ${name}`);
}

printMyName("Azan ahmed");
printMyName("Hafiz Azan ahmed");
printMyName("Azan ahmed Khan");
printMyName("Azan attrai");

//with multiple parameter
function printMyFullName(firstName ="", lastname="") {
    console.log(`MY NAME IS ${firstName} ${lastname}`);
}
printMyFullName("AZAN", "NOMAN");

//we can return things from functions

function checkcondition(fname){
    return fname;
}

const checkconditionVariable = checkcondition("hafiz");
console.log(checkconditionVariable,"checkconditionVariable is true");

const fname = "azan";
const lname = "khan";

let fuName = `${fname} ${lname}`
console.log(fuName,"fuName")

let vari = fuName.includes(lname);
console.log(vari,"vari")

let desig = `my name is ${fname}`
let replaceName = desig.replace(`${fname}`,"hafiz Azan" )
console.log(replaceName)