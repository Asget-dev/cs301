"use strict";
exports.addends = addends;
exports.getMiddle = getMiddle;


/**
 *
 * @param {Array} arr is a number to be tested
 * @return {undefined} result
 */
function addends(arr) {
  let index = 0;
  let sum = arr[index] + arr[arr.length - 1];
  return sum;
}

/**
 * 
 * @param {Array} arr is array of numbers.
 * @returns{number} middle element in array. 
 */
function getMiddle(arr){
    //console.log((arr.length)/2);
    let index = Math.floor(arr.length/2);
    if(arr.length%2!==0){
        return arr[index];
    }else{
        let number = arr[index] + arr[index - 1];
        return number ;
    }

}