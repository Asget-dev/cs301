"use strict";
exports.addends = addends;


/**
 *
 * @param {addends} number is a number to be tested
 * @return {undefined} result
 */

//let number = [1, 2, 3, 4, 5, 6];
// eslint-disable-next-line require-jsdoc
function addends(arr) {
  let index = 0;
  let sum = arr[index] + arr[arr.length - 1];
  return sum;
}

//console.log(addend(number));
