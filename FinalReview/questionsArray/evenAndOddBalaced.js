/* eslint-disable */
let number = [1,2,55,4,6,11,66,1];
function evenOddBalace(num) {
    let sum1 = 0;
    let sum2 = 0;
  for (let i=0; i<=number.length; i++) {
    if (number[i] % 2 === 0) {
        sum1++;
    }else{
        sum2++
    }
  }
  if(sum1>sum2||sum2>sum1){
    console.log(`there is ${sum1} even number and ${sum2} odd`);
}else{
    console.log("equal")
}
}
evenOddBalace(number);