"use strict";
const prompt = require("prompt-sync")();

//Write a Java program to calculate the factorial value of a given number.
let factorial = +prompt("Enter a number");
let num=1;
for(let i=1; i<=factorial;i++){
    num=num*i;
    console.log(num);
}
console.log(num); 