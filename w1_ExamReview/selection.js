"use strict";
const prompt = require("prompt-sync")();

//let a = +prompt("Enter a number");

//find even
/* function isEven(number){
    if(number % 2 === 0){
        console.log(`yes ${number} is even number`)
    }else
    console.log("Sorry try again")
}
isEven(a); */

//find odd
// function isEven(number) {
//   if (number % 2 !== 0) {
//     console.log(`yes ${number} is odd number`);
//   } else console.log("Sorry try again");
// }
// isEven(a);

//quadratic formula
// let a = +prompt("Enter a number");
// let b = +prompt("Enter a number");
// let c = +prompt("Enter a number");

// let input1;
// let input2;
// let number1 = (b**2-4*a*c);
// if(number1>0){
// let number1 = Math.sqrt(b**2-4*a*c);
// input1 = (-b+(number1))/2*a;
// input2 = (-b-(number1))/2*a;
// }
// console.log(input1);
// console.log(input2);

// calculate sales commision
// let salesAmount = +prompt("Enter the sales amount");
// let rate;

// if(salesAmount < 300){
//     rate = 0;
// }else if(salesAmount <600){
//     rate = 0.02;
// }else if(salesAmount < 1000){
//     rate = 0.25;
// }else{
//     rate = 3;
// }
// let commision = salesAmount * rate;
// console.log(commision);

// let age = +prompt("Enter the age");
// let attended = +prompt("Enter the games attended");
// let price;
// if(age<18){
//     if(attended < 6){
//         price = 8;
//     }else if(attended < 11){
//         price = 6;

//     }else{
//             price = 5;
//         }
//     }
// else if(age <55){
//     if(attended <11){
//         price = 10;
//     }else{
//         price = 8
//     }
// }else{
//     if(attended < 56){
//       price =8;
//     }else{
//         price = 6;
//     }
// }

//what is the output
/* let x = 1, y = 7;
let message = "Welcome";
if(x<2){
    if(y>10){
        message = "Hello";
    }else{
        message = "Good bye";
    }
}else{
    message = "Goodbye";
}
console.log(message);// Good bye */

//what is the output
/* let x = 1, y = 7;
let message = "Welcome";
if(x<2){
    if(y>10){
        message = "Hello";
    }
}else{
    message = "Goodbye";
}
console.log(message);//welcome */

// let num_One = +prompt("Enter the first number");
// let num_two = +prompt("Enter the second number");
// let diff;

// if(num_One > num_two){
//     diff = num_One - num_two;
// }else{
//     diff = num_two - num_One;
// }
// console.log(diff);

//console.log(++x);

// let Nstuden = prompt("Enter x");
// let Nteam = prompt("Enter y");
// let defvalue = Math.floor(Nstuden/Nteam);
// let extra = Nstuden%Nteam;

// if(extra==0){
//     console.log(`${Nteam-extra} terms of ${defvalue}`);
// }else{
//     console.log(`${extra}terms of ${defvalue+1} and ${Nteam-extra} terms of${defvalue}`)
// }

// let x = 10;
// function main() {
//   let x = 0;
//   console.log("x1 is " + x); //0
//   x = 20;
//   console.log("x2 is " + x); //20
//   if (x > 0) {
//     x = 30;
//     console.log("x3 is " + x); //30
//   }
//   console.log("x4 is " + x);//30;
//   function f(x) {
//     console.log("x5 is " + x);50;
//   }
//   f(50);
//   console.log("x6 is " + x);//30
// }
// main();
// console.log("x7 is " + x);//10

// Output?
// function A(){
//     console.log("A is called");//1
//     console.log("Before B is called");//2
//     B();
//     console.log("After B is called")//7
//     }
//     function B(){
//     console.log("B is called");//3
//     console.log("Before C is called");//4
//     C();
//     console.log("After C is called");//6
//     }
//     function C(){
//     console.log("C is called");//5
//     }
//     A();
//     console.log("After A is called");//8

// let x = 10;
// function main() {
//   let x;
//   console.log("x1: " + x);//undefined
//   if (x > 0) {
//     let x = 30;
//     console.log("x2: " + x);//30
//   }
//   x = 40;
//   let f = function (x) {
//     console.log("x3: " + x);//50
//   };
//   f(50);
// }
// main();

// function a() {
//   console.log(x); // consult Global for x and print 20 from Global
// }
// function b() {
//   let x = 10;
//   a(); // consult Global for a
//   console.log(x);//10
// }
// let x = 20;
// b();

// function b() {
//   function a() {
//     console.log(x);//10
//   }
//   let x = 10;
//   a();
//   console.log(x);//10
// }
// let x = 20;
// b();

// function b() {
//   function a() {
//     console.log(x);//20
//   }
//   a();
//   console.log(x);//20
// }
// let x = 20;
// b(); // 20

// function f() {
//   let a = 1,
//     b = 20,
//     c;
//   console.log(a + " " + b + " " + c); // 1 20 undefined
//   function g() {
//     let b = 300,
//       c = 4000;
//     console.log(a + " " + b + " " + c); // 1 300 4000
//     a = a + b + c;
//     console.log(a + " " + b + " " + c); // 4301 300 4000
//   }
//   console.log(a + " " + b + " " + c); // 1 20 undefined
//   g();
//   console.log(a + " " + b + " " + c); // 4301 20 undefined
// }
// f();
console.log(typeof("6"/"2"))