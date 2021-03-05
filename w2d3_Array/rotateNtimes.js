"use strict";
// eslint-disable-next-line strict
let number = [32, 105, -22];
let jTimes = number.length-1;


// eslint-disable-next-line require-jsdoc
function rotateLeft(j,arr){
    for(let i=0; i<jTimes;i++){
        let firstElement = arr.pop();
        arr.unshift(firstElement);   
    }
    return arr;
}

console.log(rotateLeft(-11,number));