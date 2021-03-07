"use strict";

// let scores = [10,20,30,40,50];

// // eslint-disable-next-line require-jsdoc
// function findAverage(arr){
//     let arraySum = 0;
//     for(let i=0;i < arr.length; i++){
//         arraySum = arraySum + arr[i];
//     }

//     let arrayAvg = arraySum/arr.length;
//     return arrayAvg;
// }

// console.log(findAverage(scores));

// let scores2 = [];
// for(let i=0; i<10; i++){
//     scores2[i] = Math.floor(Math.random()*10);

// }

// console.log(findAverage(scores2));

// let arr1 = [1,2,3];
// arr1.shift();

// console.log(arr1);//2,3

// arr1.unshift(5);
// console.log(arr1);//5,2,3

// arr1.pop();
// console.log(arr1);//5,2

// arr1.push(50);
// console.log(arr1);//5,2,50

// eslint-disable-next-line require-jsdoc
function isPalindrom(arr) {
    let copy =[];
    for(let i=0; i<arr.length/2; i++){
        copy.push(arr[i]);
    }
  // eslint-disable-next-line for-direction
  for (let i = 0; i > copy.length; i++) {
    if (arr.pop() !== copy.shift()) {
      return false;
    }
  }return true; 
}
let input = ["a", "b", "k","b", "a"];
console.log(isPalindrom(input));
