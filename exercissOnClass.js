"use strict";

let scores = [10,20,30,40,50];

// eslint-disable-next-line require-jsdoc
function findAverage(arr){
    let arraySum = 0;
    for(let i=0;i < arr.length; i++){
        arraySum = arraySum + arr[i];
    }

    let arrayAvg = arraySum/arr.length;
    return arrayAvg;
}

console.log(findAverage(scores));

let scores2 = [];
for(let i=0; i<10; i++){
    scores2[i] = Math.floor(Math.random()*10);

}

console.log(findAverage(scores2));