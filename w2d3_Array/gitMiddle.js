"use strict";
exports.getMiddle = getMiddle;

//let number = [1,2,3,4,5,6];
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
//console.log(getMiddle(number));