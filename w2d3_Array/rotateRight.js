"use strict";
// eslint-disable-next-line strict
let number = [1,2,3,4,5,6];




// eslint-disable-next-line require-jsdoc
function rotateRight(arr){
    let firstElement = arr.unshift;
    arr.push(firstElement);
    return arr;
}

console.log(rotateRight(number));