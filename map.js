//see notes in notion 8.12 foreach map filter
console.log("Current File: map.js");

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
    Job: "server"
  },
  {
    first: "Joshua",
    last: "Wolfe",
    Job: "human resources"
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

//doublevalueswithmap
function doubleValuesWithMap(array) {
  return array.map(function(value) {
    return value * 2;
  });
}
console.log("doubledvals: " + doubleValuesWithMap(numbers));

// valTimesIndex
function valTimesIndex(array) {
  return array.map(function(value, index) {
    return value * index;
  });
}
console.log("vatimes: " + valTimesIndex(numbers));

// extractKey
function extractKey(array, key) {
  return array.map(function(value) {
    return value[key];
  });
}
console.log("names: " + extractKey(names));

//extractFullName
function extractFullName(array) {
  return array.map(function(value) {
    let first = value.first;
    let last = value.last;
    return first + " " + last;
  });
}
console.log("extractfullname: " + extractFullName(jobs));
