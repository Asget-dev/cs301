/* eslint-disable */
function isStack(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
    if (sum == num) {
      return true;
    }if(sum > num){
        return false;
    }
  }
}
console.log(isStack(10));
console.log(isStack(11));
console.log(isStack(12));