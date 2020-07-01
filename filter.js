//see notes in notion 8.12 foreach map filter
console.log("Current File: filter.js");

// Declare Variables & Arrays
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const names = ["adam", "walid", "carlos", "maralee", "leigh", "amanda"];
const names = [
  {
    name: "adam"
  },
  {
    name: "walid"
  },
  {
    name: "carlos"
  },
  {
    name: "maralee"
  },
  {
    name: "amanda"
  }
];
const jobs = [
  {
    first: "Adam",
    last: "Sandler",
    Job: "server",
    isCatOwner: true
  },
  {
    first: "Joshua",
    last: "Wolfe",
    Job: "human resources",
    isCatOwner: true
  },
  {
    first: "Walid",
    last: "Asef",
    Job: "marketing"
  },
  {
    first: "John",
    last: "Smith",
    Job: "accountant"
  },
  {
    first: "William",
    last: "Rocktoff",
    Job: "cashier"
  }
];

// filterByValue
// Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.
function filterByValue(array, key) {
  return array.filter(function(value) {
    return value[key] !== undefined;
  });
}
console.log("jobs: " + filterByValue(jobs));

//find
// Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.
function find (array, value) {
  returns x;
};


//findInObj
// Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.
function findInObj(array, key, value) {

};

//removeVowels
// Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
function removeVowels(string) {

};

// doubleOddNumbers
// Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).
function doubleOddNumbers(array) {

};