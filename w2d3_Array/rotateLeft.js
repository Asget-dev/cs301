"use strict";
// eslint-disable-next-line strict
let number = [1,2,3,4,5,6];


// eslint-disable-next-line require-jsdoc
function rotateLeft(arr){
    let firstElement = arr.pop();
    arr.unshift(firstElement);
    return arr;
}

console.log(rotateLeft(number));