"use strict";
const prompt = require("prompt-sync")();

let digits = +prompt("Enter a number");
let sum =0;
let reminder="";

while(digits>0){
    r=digits%10;
    digits=digits/10;
    sum=sum+r;
  
}
console.log(sum) 