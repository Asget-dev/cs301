"use strict";
exports.mostFrequent = mostFrequent;
exports.reverseVowels =reverseVowels;
exports.moveZeros = moveZeros;
exports.columnNumber = columnNumber;
exports.isProcupine = isProcupine;
/**
 *
 * @param {Array} num return the
 * @returns {max} return the max number
 */
 function mostFrequent(num) {
    num.sort((num1,num2)=>num1-num2);
    let count = 1;
    let max = 0;
    let item;
    for (var i = 0; i < num.length; i++) {
      for (var j = i; j < num.length; j++) {
        if (num[i] == num[j]) max++;
        if (count < max) {
          count = max;
          item = num[i];
        }
      }
      max = 0;
    }
    return item;
  }


/**
 * @param {string} text num of   
 * @return {string} str 
 */
function reverseVowels(text) {
    const LEN = text.length;
    const str = [...text];
    const vowels = ["a","e", "i", "o", "u", "A","E", "I", "O", "U"];
    const rev = [];
    for (let i = 0; i < LEN; i++) {
      if (vowels.includes(text[i])) { rev.push(text[i]); }
    }
    for (let i = 0; i < LEN; i++) {
      if (vowels.includes(str[i])) { str[i] = rev.pop(); }
    }
    return str.join("");
  }



  /**
 * @param {number[]} nums d
 * @return {void} 
 */
   function moveZeros(nums) {
    let left = 0;
    let len = nums.length;
    let numNonZero = 0;
    while (left < len) {
        if (nums[left] != 0) {
            let tmp = nums[numNonZero];
            nums[numNonZero] = nums[left];
            nums[left] = tmp;
            numNonZero += 1;
            left += 1;
        } else {
            left += 1;
        }
    }
    return nums;
}



// eslint-disable-next-line require-jsdoc
function columnNumber(s){
  // s is a string, but basically converts to a number in base 26 
  // also instead of zero we have 26 
  const dict = {
      A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14,
      O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
  };
  let number = 0;
  let power = 0;
  for (let i = s.length-1; i >= 0; i--) {
      number += Math.pow(26, power)*dict[s[i]];
      power ++;
  }
  return number;
}
/**
 * 
 * @param {Array} num s 
 * @returns {num} num
 */
function isProcupine(num) {
  let firstPrime = num + 1;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (isPrime(firstPrime) && firstPrime % 10 === 9) {
      let nextPrime = firstPrime + 1;
      // eslint-disable-next-line no-constant-condition
      while (true) {
        // eslint-disable-next-line no-undef
        if (isprime(nextPrime)) {
          if (nextPrime % 10 === 9) {
            return firstPrime;
          } else {
            firstPrime = nextPrime;
            break;
          }
        }
        nextPrime++;
      }
    }
    firstPrime++;
  }
}

/**
 *
 * @param {number} num is a number
 * @returns {boolean} is a boolean
 */
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return false;
}
// eslint-disable-next-line valid-jsdoc
/**
 * 
 * @param {Array} arr iad adf
 * @param {target} target is a value that we 
 * @returns  value s a
 */
function sumTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let firstValue = arr[i];
    let nextValue = target - firstValue;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === nextValue) {
        return [i, j];
      }
    }
  }
}
console.log(sumTarget([2, 3, 4, 5, 6], 7));