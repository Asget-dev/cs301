/* eslint-disable */
function fibonacciNumber(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    return fibonacciNumber(num - 2) + fibonacciNumber(num - 1);
  }
}
console.log(fibonacciNumber(6));

function nthFib(n) {
  if (num === 0) {
    return 0;
  } else if (num == 1) {
    return 1;
  } else {
    let prev2 = 0;
    let prev1 = 1;
    let result;
    for (let i = 0; i < num; i++) {
      result = prev2 + prev1;
      prev2 = prev1;
      prev1 = result;
    }
    return result;
  }
}
console.log(nthFib(6));
