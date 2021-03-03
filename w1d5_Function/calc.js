"use strict";

// let calc = function(callBack,number1,number2){
//     if(callBack==="add"){
//         return number1 + number2;
//     }else if(calcType === "multiply"){
//         return number1 * number2;
//     }
// }

// console.log(calc(2,3,'add'))
// console.log(calc(2,3,'multiply'))

let add = function(number1, number2){
    return number1 + number2;
}

let multiply = function(number1, number2){
    return number1 * number2;
}

let calc = function(callback,number1, number2){
    return callback(number1, number2);
}

console.log(calc (2,3, function(number1, number2){
    return number1- number2;
}))
console.log(calc(add,2,3));
console.log(calc(multiply,2,3));