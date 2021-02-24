"use strict";
const prompt = require("prompt-sync")();

let numberOfBox =prompt("Enter the total number of boxes");
let boxInStack = prompt("Enter the number of boxes palced in each stack");
let totalStack = numberOfBox/boxInStack;
//for example if the employee enteres 74 total boxex and 6 boxes the out put should be 13.
console.log(Math.ceil(totalStack));

