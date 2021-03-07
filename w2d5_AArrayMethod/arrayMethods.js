"use strict";
/* eslint-disable */

exports.insertArray = insertArray;
exports.isArrayEqual = isArrayEqual;
exports.reverse2String = reverse2String;
exports.enhancedIncludes = enhancedIncludes;
exports.isPalindrome = isPalindrome;
exports.ssReverse = ssReverse;
//exports.ssReverse =ssReverse;

/* 0.  Write a function that will take an index and two arrays 
and splice the second array into the first at the given position */

/**
 * 
 * @param {number} index is integer for array index
 * @param {Array} target is array to be spliced
 * @param {Array} insert holds elements to splice
 * @returns {Array} the spliced array
 */
function insertArray(index, target, insert){

    target.splice(index, 0, ...insert);
    return target;


}


function isArrayEqual(firstArray, secondArray) {
  if (firstArray.length != secondArray.length) {
    return false;
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
}


function isPalindrome(arr) {
  let copy =[];
  for(let i=0; i<arr.length; i++){
      copy.push(arr[i]);
  }
for (let i = 0; i < arr.length; i++) {
  if (arr.shift() !== copy.pop()) {
    return false;
  }
}return true;
}



function reverse2String(name){
    name.reverse();
    let str=name.join("_");
    return str;
}


function enhancedIncludes(arr, num){
  let newArray = [];
  newArray.push(arr.includes(num));
  newArray.push(arr.indexOf(num))
  newArray.push(arr.indexOf(num,-1));
  return newArray;
}



function ssReverse(arr) {
  let copy = arr.slice();
  let reversed = copy.splice(0,copy.length,copy.reverse());

  return reversed;
}