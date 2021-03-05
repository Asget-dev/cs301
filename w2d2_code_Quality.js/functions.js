"use strict";
exports.checkPrime = checkPrime;

/**
 *
 * @param {prime_number} number is a number to be tested
 * @return {undefined} result 
 */
function checkPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}