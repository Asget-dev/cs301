"use strict";

exports.power = power;
exports.countDigits = countDigits;
exports.reverse = reverse;
/**
 * @param{number} numOne is number
 * @param{number} numTwo retern number
 * @returns {number} n
 */
function power(numOne,numTwo){
    if(numTwo===0){
    return 1;
    }else {
        return numOne* power(numOne,numTwo-1);
    }
}
console.log(power(2,3));

/**
 * 
 * @param {number} num is a number
 * @returns{number} retun number 
 */
function countDigits(num) {
    if (num===0){
        return 0;
    }else{
        return 1 +countDigits(parseInt(num/10));
    }
}

console.log(countDigits(664415));

 /**
 * 
 * @param {string} str is string
 * @returns {string} abc
 * 
 * 
 */
function reverse(str) {
    if (str === ""){
       return ""; 
    } else{
        return reverse(str.substr(1)) + str.charAt(0);
    }
}
console.log(reverse("banana"));