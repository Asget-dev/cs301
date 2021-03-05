"use strict";

let reverse = [1, 2, 3, 5, 6, 7, 8, 9, 10];

// eslint-disable-next-line require-jsdoc
function reverseNumber(arr) {
    let num = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    num.push(arr[i]);
  }
  return num;
}
reverseNumber(reverse);
