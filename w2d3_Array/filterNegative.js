
"use strict";
const prompt = require("prompt-sync")();

let nTimes = +prompt("How manu digits you want to enter");
let inputNumber;
let positiveNumber = [];
let count = 0;
while(count<nTimes){
   
    inputNumber = +prompt("Please enter the number");

    if(inputNumber>0){
        for(let i=0; i<nTimes.length;i++){
            let sum = 0;
            for(let j=0; j<=i.length;j++){
                sum = sum + j[0];
                positiveNumber = sum.unshift;

            }
        }
    }
     count++;
}
console.log(positiveNumber);

