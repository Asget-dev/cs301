"use strict";
const prompt = require("prompt-sync")();

function testSqrt(){
    let input = +prompt("Enter a number");
    let r = Math.sqrt(input);
    console.log(r);
}
testSqrt();