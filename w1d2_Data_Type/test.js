"use strict";
let prompt = require('prompt-sync')();

let tempInCelsius = prompt("Enter value in celsius: ");
let tempInDegreeFahrenheit = prompt("Enter value in degree celsius");
let tempInDegree = (tempInDegreeFahrenheit-32)*parseFloat(5/9);
let tempInFahrenheit = 9/5*parseFloat(tempInCelsius)+32;
console.log(tempInFahrenheit);
console.log(tempInDegree);


// let a = 2;
// let b = 2;
// let c = 3 -(a+b+1);
// console.log(a--);
// console.log(++c);
// console.log(a);
// console.log(c);

// let a = +prompt("First number?");
// console.log(typeof a);
