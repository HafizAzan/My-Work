//oop stands for object oriented programming

//every thing is object in javascript

// object literal
const AzanKhan = {
    name : "Hafiz Azan",
    age : 16
}
console.log(AzanKhan);

function PersonOne(){
    this.name = "Hafiz Azan",
    this.age = 16,
    this.birthday = "2007-01-26"
} 
const Person = new PersonOne();
console.log(Person)
//constructor functions

function PersonTwo(name,age,birthday) {
    this.name = name,
    this.age = age,
    this.birthday = birthday

    this.calculateAge = function(){
        const Defrence = Date.now() - this.birthday.gettime();
        const Age = new Date(Defrence); 
        // + ko absolute kahaingay oop mai
        return Math.abs(Age.getUTCFullYear() - 2007)
    }
}

const Variable = new PersonTwo("Hafiz Azan",16,"2007-01-26");
console.log(Variable)


class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age; //class properties
    }
  
    hello() {
      //class methods
      return "hello";
    }
  
    checkName() {
      return this.name;
    }
  }
  
  const personClass = new PersonClass("Hafiz Azan", 16); //initialize
  const hello = personClass.hello();
  const checkName = personClass.checkName();
  
  console.log({ personClass, hello, checkName });


  class personFour {
    static GenericWork(){
        return "hello Freind!"
    }
  }
const work = personFour.GenericWork()
console.log(work)

//Four Pillars In OOP

/*
Inheritance = Wirasat
Abstraction = Chupa wa
Polymorphism = talk with multiple
Encapsulation = properties wali chizen public/private

in javascript one more thing Prototype Inheritance
*/

// Inheritance //

class Parent{
motherLanguage(){
  return "Urdu"
}
}
// const parentInitialize = new Parent();
// console.log(parentInitialize.motherLanguage(),"language")

// class children extends Parent {};
// const children1 = new children();
// console.log(children1.motherLanguage());

const ExampleARR = []
console.log(ExampleARR.__proto__)

function people(fname,lname,dob){
  this.firstName = fname;
  this.lastName = lname;
  this.birthday = dob;


  // this.calculateAge = function(){
  //   const DateNow = Date.now() - this.birthday.getTime();
  //   const NewDate = Date.now(DateNow);
  //   return Math.abs(NewDate.getUTCFullYear()- 2007)
  // }
};

people.prototype.calculateAge =  function(){
  const Dateabhi = Date.now() - this.birthday;
  const NaiDate = new Date(Dateabhi);
  return Math.abs(NaiDate.getUTCFullYear()- 2007)
};

const PersonPhoto = new people("Hafiz","Azan",0-26-2007)
console.log(PersonPhoto)
console.log(PersonPhoto.__proto__.calculateAge(),"check")
PersonPhoto.calculateAge();


function people1(fname, lname){
  this.fname = fname;
  this.lname = lname;
}
// {fname:"Azan",lname:"khan"}
people1.prototype.greeting = function(){
  return `hello my name is ${this.fname} ${this.lname}`;
}

const epople = new people1("Azan", "khan");
console.log(epople.greeting());

function customer(fname,lname,phone,membership){
  people1.call(this,fname,lname)
  this.phone = phone;
  this.membership = membership;
  return
}
customer.prototype = Object.create(people1.prototype)

const customer1 = new customer("Tom","Holland", "555 5555 555","Standard");
console.log(customer1)
console.log(customer1.greeting())

// polimorphism
class animal{
  constructor(name){
    this.name = name;
  }

  makeSound(){
    return "Generic Sounds Animals"
  }
}

class Dog extends animal{

  makeSound(){
    return "Woof ! Woof!"
  }

  fetch(){
    return `${this.name} is barking`
  }
}

const dog = new Dog("Spike")
console.log(dog)
console.log(dog.name)
console.log(dog.makeSound())
console.log(dog.fetch())

class Cat extends animal{

  makeSound(){
    return "Meow! Meow"
  }

  purr(){
    return `${this.name} is so cute`
}
}

const cat = new Cat("Tom");
console.log(cat)
console.log(cat.name)
console.log(cat.makeSound())
console.log(cat.purr())