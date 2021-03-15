/* eslint-disable */
"use strict";
let sum = function(x,y){
    let sumResult = x+y;
    console.log(sumResult);
};

let mode = function(xx,yy){
    let modeResult = xx%yy;
    console.log(modeResult);
};


function myCalculator(x,y, myCallback){
    return myCallback(x,y);
}

myCalculator(3,4,mode);
myCalculator(3,4,sum);
