/* eslint-disable */
const prompt = require("prompt-sync")();

function isSumFirstLast(num) {
  let lastDigit = num % 10;
  let firstDigit = 0;

  while (num > 0) {
    num = Math.floor(num / 10);

    if (num % 10 === num) {
      firstDigit = num;
    }
  }

  let sum = firstDigit + lastDigit;

  return sum % 2 !== 0;
}
isSumFirstLast(123);
