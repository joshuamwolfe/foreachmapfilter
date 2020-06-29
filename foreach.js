import "./styles.css";

//see notes in notion 8.12 foreach map filter
//current file sanity check
console.log("Current File: foreach.js");
// Declare Variables & Arrays
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const names = ["adam", "walid", "carlos", "maralee", "leigh", "amanda"];

const jobs = [
  {
    fistN: "Adam",
    lastN: "Sandler",
    Job: "server"
  },
  {
    fistN: "Joshua",
    lastN: "Wolfe",
    Job: "human resources"
  },
  {
    fistN: "Walid",
    lastN: "Asef",
    Job: "marketing"
  },
  {
    fistName: "John",
    lastN: "Smith",
    Job: "accountant"
  },
  {
    fistName: "William",
    LastN: "Rocktoff",
    Job: "cashier"
  }
];

//doublevalues
function doubleValues(array) {
  const doubledValues = [];
  for (let i = 0; i < array.length; i++) {
    array[i] += array[i];
    doubledValues.push(array[i]);
  }
  return doubledValues;
}
// index = value
console.log(doubleValues(numbers2));

// what is
// how is

//onlyevenvalues
function onlyEvenValues(array) {
  const evenValues = [];
  for (let i = 0; i < array.length; i++) {
    let x = array[i];
    let y = 2;
    let z = x % y;
    if (z === 0) {
      evenValues.push(array[i]);
    }
  }
  return evenValues;
}
// index = value
console.log(onlyEvenValues(numbers));

//showfirstandlast
function showFirstAndLast(array) {
  const firstlast = [];
  for (var i = 0; i < array.length; i++) {
    // console.log(array[i][0]);
    firstlast.push(array[i][0]);
  }
  return firstlast;
}
console.log(showFirstAndLast(names));

//addKeyandValue
https://stackoverflow.com/questions/19590865/from-an-array-of-objects-extract-value-of-a-property-as-array
function addKeyAndValue(jobs) {}

console.log(addKeyAndValue(jobs));

// function

//vowelCount
https://www.w3resource.com/javascript-exercises/javascript-function-exercise-7.php