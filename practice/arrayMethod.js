"use strict";

let arr1 = [1,2,3];
let removed = arr1.shift();

console.log(arr1.toString());// 2 and 3
console.log(arr1);// [2 , 3]
console.log(removed);


arr1.unshift(1);
console.log(arr1);//[1,2,3]


arr1.pop();
console.log(arr1);

arr1.push(5);
console.log(arr1);

