/* eslint-disable */
let num = [1, 2, 3, 4, 5, 6];
function isSumBalanced(num) {
    let odd = 0;
    let even = 0;
  for (let i = 0; i < num.length; i++) {
      if(i%2==0){
          even++;
      }else if(i%2!==0){
          odd++
      }
  }if(even> odd||odd<even){
      return false;
  }else{
      return true;
  }
}
console.log(isSumBalanced(num));
