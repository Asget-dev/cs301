"use strict";
/* eslint-disable */
const prompt = require("prompt-sync")();


function checkPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0)
      return false;
    }
        return true;
}
console.log(checkPrime(2));

//B
let x = prompt("Enter a number");

let sum = 0;
function checkPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0)
      return false;
    }
        return true;
}
console.log(checkPrime(x));