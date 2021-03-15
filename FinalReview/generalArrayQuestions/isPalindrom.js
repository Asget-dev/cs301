/* eslint-disable */

let num = [1, 2, 3, 2, 1];
//console.log(num.shift(0));
let copy = num.slice();
function isPalindrome(num) {
  for (let i = 0; i < num.length; i++) {
    if (num.shift(i) === copy.pop(i)) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(isPalindrome(num));
