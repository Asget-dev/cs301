/* eslint-disable */

function reverseDigits(num) {
  let reversed = 0;//3
  while (num > 0) {//12
    let lastdigit = num % 10;//3//2
    reversed = reversed * 10 + lastdigit;//3*10+2=3
    num = Math.floor(num / 10);//123/10=12
  }
  console.log(reversed);//3
}
reverseDigits(123);
