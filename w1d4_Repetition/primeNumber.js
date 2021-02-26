"use strict";
const prompt = require("prompt-sync")();

let numberInput = +prompt("Enter a number");
let i;
for (i = 2; i < numberInput; i++) {
  if (numberInput % i === 0) {
    break;
  } 
}
if (numberInput === i) {
  console.log("prime");
} else {
  console.log("not prime");
}
