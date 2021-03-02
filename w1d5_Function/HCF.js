"use strict";
const prompt = require("prompt-sync")();

let number1 = +prompt("Enter the number");
let number2 = +prompt("Enter the number");
let originalValue1 = number1;
let originalValue2 = number2;

let x;
function outPutTest(number1, number2) {
    x = (number1*number2);

    LCM(number1,number2);
}
function GCD(number1, number2) {
  while (number1 != number2) {
    if (number1 > number2) {
      number1 = number1 - number2;
      return number1;
    } else {
      number2 = number2 - number1;
      return number2;
    }
  }
}

function LCM(number1,number2) {
  let printLcm = GCD(number1,number2);
 
  let xx =x/ number1;
  console.log(`GCD ${printLcm}`);
  console.log(`LCM${xx}`);
}

outPutTest();
