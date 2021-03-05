"use strict";
exports.addends = addends;
exports.getMiddle = getMiddle;
exports.rotateLeft = rotateLeft;
exports.rotateRight = rotateRight;
exports.rotateNRight = rotateNRight;
exports.fmrString = fmrString;

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
function getMiddle(arr) {
  //console.log((arr.length)/2);
  let index = Math.floor(arr.length / 2);
  if (arr.length % 2 !== 0) {
    return arr[index];
  } else {
    let number = arr[index] + arr[index - 1];
    return number;
  }
}

/**
 *
 * @param {Array} arr is array of numbers
 * @returns{number} rotate the  the elements in an array to the left by 1.
 */
function rotateLeft(arr) {
  let firstElement = arr.pop();
  arr.unshift(firstElement);
  return arr;
}

/**
 *
 * @param {Array} arr is array of numbers
 * @returns{number} rotate the  the elements in an array to the right by 1.
 */
function rotateRight(arr) {
  let firstElement = arr.unshift;
  arr.push(firstElement);
  return arr;
}

/**
 *
 * @param {Array} arr is array of numbers
 * @returns{number} rotate the  the elements in an array to the n times.
 */
function rotateNRight(arr) {
  for (let i = 0; i < arr.length; i++) {
    let firstElement = arr.pop();
    arr.unshift(firstElement);
  }
  return arr;
}

/**
 * @param {Array} arr is array of numbers
 * @returns{number} Filters out negative values
 * @return {number} Maps the filtered elements to sum of its digits
 * @return {number}Reduce to get sum of all the elements and returns this value
 */
function fmrString(arr) {
  let newArray = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArray[j] = arr[i];
      j++;
    }
  }

  let sum = 0;
  let value = 0;
  for (let l = 0; l < newArray.length; l++) {
    value = newArray[l];

    while (value !== 0) {
      sum = sum + (value % 10);
      value = Math.floor(value / 10);
    }
  }
}



function matrixAddition(){
    for(let i=0; i<)
}
