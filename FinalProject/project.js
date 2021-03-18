"use strict";
exports.mostFrequent = mostFrequent;
exports.reverseVowels =reverseVowels;
exports.moveZeros = moveZeros;
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

//   /**
//    * 
//    * @param {Array} num return  
//    * @returns{max}return the max number
//    */
//   function closestToZero(num){
//     let first = 0;
//     let last = num.length-1; 
//     while(first<last){
//         if((num[first] + num[last]) > num){
//             first--;
//         }else if(num[first] + num[last]>num){
//             last++;
//         }
//     }
//   }

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
 * @return {void} Do not return anything, modify nums in-place instead.
 */
   function moveZeros(nums) {
    let left = 0;
    let len = nums.length;
    let numNonZero = 0;
    while (left < len) {
        if (nums[left] != 0) {
            let tmp = nums[numNonZero]
            nums[numNonZero] = nums[left]
            nums[left] = tmp;
            numNonZero += 1;
            left += 1
        } else {
            left += 1
        }
    }
    return nums;
}