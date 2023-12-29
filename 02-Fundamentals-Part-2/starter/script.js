"use strict";

/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


///////////////////////////////////////
// Functions
function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


///////////////////////////////////////
// Arrow functions

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));


///////////////////////////////////////
// Functions Calling Other Functions

function cutPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAverage = (score1, score2, score3) => {};


// Arrays

const friends = ['Micheal', ' Steven', 'Peter'];


const years = new Array(1990,1991,1995);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';


friends.push('Fouad');
// console.log(friends);
const firstName = 'Fouad'
const fouad = [firstName, 'Mesrane', 2024 - 1995 , friends ]
console.log(fouad)

friends.unshift(23);

const lastEle = friends.pop();
console.log(lastEle)


// Objects

const jonas = {
    firstName : 'Jonas' ,
    lastName : 'Mesrane',
    age : 2024 - 1995,
    job : 'Developer',
    friends : ['Mi' , 'Peter', ' Steven']
}

jonas.age;

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

*/

const jonas = {
  firstName: "Jonas",
  lastName: "Mesrane",
  birthYear: 1995,
  job: "Developer",
  friends: ["Mi", "Peter", " Steven"],
  hasDriversLicence: true,
  getSummary : function(){
    const result = `${this.firstName} is a ${this.calAge()} years old ${this.job}, and he has ${this.checkLicence()} drivers's licence`;
    return result;
  }  ,
  checkLicence : function(){
      if(this.hasDriversLicence){
        return 'a';
      } else {
        return 'no'
      }
  },
  // calAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calAge : function(){
  //   return 2037 - this.birthYear;
  // }

  calAge : function(){
   this.age = 2037 - this.birthYear;
   return this.age;
  }

  
};

// jonas.calAge();
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

//challenge
console.log(jonas.getSummary());


