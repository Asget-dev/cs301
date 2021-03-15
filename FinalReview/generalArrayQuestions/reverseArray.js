/* eslint-disable */
"use strict";

let reverse = [1, 2, 3, 5, 6, 7, 8, 9, 10];
console.log(reverse.toString());
console.log(reverse.join("-"));
let num=[];
for(let i=reverse.length-1; i>=0; i--){
    
   num.push(reverse[i]);
}

console.log(num);