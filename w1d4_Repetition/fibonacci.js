"use strict";
const prompt = require("prompt-sync")();

/* Fibonacci series up to N terms. N
being positive integer from user input.  */

//difining table
//input====> user enter a number greater than or equal to 0
//process==> loop through the number and add the first number to the  
//the second number and asighn the result to the threed number continue the same stape to 
//the end of the loop.  
//out put the final loop


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
  