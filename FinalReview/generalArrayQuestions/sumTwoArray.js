/* eslint-disable */
let x=[1,2,3,4,5];
let y=[5,4,3,9,1];

function sumArray(num1, num2){
    sum=[0];
    for(let i=0; i<x.length;i++){
        sum= num1[i] + num2[i];
      console.log(sum);
    }
    
}

console.log(sumArray(x,y));