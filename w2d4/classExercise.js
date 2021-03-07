"use strict";
/**
 * 
 * @param {Arrays} arr 
 * @param {number}  
 */
function invert(arr, separator){
    const reversed = arr.reverse();
    const joined = reversed.join(reversed);
}
const myArray = ["sam","am","i"];
let result = invert(myArray, "<<<>>>");
console.log(result);