"use strict";
const prompt = require("prompt-sync")();

/* Fibonacci series up to N terms. N
being positive integer from user input.  */

let number_one=0;
let number_two=1;
let c;
let input_number = +prompt("Enter a number");

while(number_one<=input_number){
    console.log(number_one);
    c=number_one+number_two;
    number_one=number_two;
    number_two=c;
    
}
