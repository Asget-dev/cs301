/* eslint-disable */

let x = [1,3,4,6,4,7,2];

function sumOddindicesValues(num){
    let sum=0;
    for(let i=1; i<num.length;i=i+2){
        sum= sum+x[i];
    }
    return sum;
}

console.log(sumOddindicesValues(x));
