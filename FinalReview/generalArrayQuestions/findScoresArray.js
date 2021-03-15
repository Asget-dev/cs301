/* eslint-disable */

function findAverage(num) {
  let sum = 0;
  let avg;
  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];
  }
  avg = sum/num.length;
  return  avg;
}
let x = [10, 20, 40, 50];
console.log(findAverage(x));




let score2=[];
for(let i=0; i<10; i++){
  score2[i]=Math.ceil(Math.random()*10);
}
console.log(findAverage(score2));


