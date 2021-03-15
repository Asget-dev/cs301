/* eslint-disable */
"use strict";
function myDisplayer(result){
    console.log(`Result of the calculation is ${result}`);
}
function myCalculator(x,y, myCallback){
    let sum = x+y;
    myCallback(sum);
}

myCalculator(3,4,myDisplayer);