"use strict";

let number1 = [0,1,2,9,8,7];
//let number2 = [6,5,4,3,4,5];
let copy=[];
for(let i=0;i<=number1.length;i++){
    copy.unshift(number1.indexOf(i));
}
console.log(copy);