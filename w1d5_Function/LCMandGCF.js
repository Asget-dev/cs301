"use strict";
const prompt = require("prompt-sync")();

let number1 = +prompt("Enter the number");
let number2 = +prompt("Enter the number");

function GCF(number1, number2) {
  while (number1 != number2) {
    if (number1 > number2) {
      number1 = number1 - number2;
      
    } else {
      number2 = number2 - number1;
    }
  }
  
 console.log(number1);
 return number1;
}


function LCM(number1, number2){
    let x ,lcm,out;
    
    x = number1 * number2;
    lcm = GCF(number1 , number2);
    out = x/lcm;
    console.log(out);
}

LCM(number1,number2);
