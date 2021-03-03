"use strict";

//fuction expresion
let add = function(number1, number2){
    return number1 + number2;
}

let multiply = function(number1, number2){
    return number1 * number2;
}

let calc = function(callback,number1, number2){
    return callback(number1, number2);
}


// anonymous function

/* console.log(calc (2,3, function(number1, number2){
    return number1- number2;
})) */



//arrow function
 let division = (number1, number2) =>{
    return number1 + number2;
 }
 let subtraction = (number1, number2) =>{
     return number1 - number2;
 }
 

console.log(calc(add,9,3));
console.log(calc(multiply,9,3));
console.log(calc(division,9,3));
console.log(calc(subtraction,9,3));