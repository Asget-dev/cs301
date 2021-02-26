"use strict";
const prompt = require("prompt-sync")();
//• Write a loop that prints all even number between 1 to 20 (inclusive)
/* for(let i=0;i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
} */
// let i=1;
// while(i<=20){
//     console.log(i)
//     i=i+1;
// }
//Write a loop that keeps on prompting for age until you enter age
//older than 18
// let number = prompt("Please enter age older than 18 ")
// while(number<18){
//     number = prompt("Please enter age older than 18 ")
// }
// console.log("great")
// let number;// = prompt("Please enter age older than 18 ")
// do{
//     number = prompt("Please enter age older than 18 ") 
// }while(number<18)
// console.log("grate");


// Print out the balance of a savings account that compounds interest
// monthly. Prompt the user for the 
// • initial amount.• annual interest rate • number of years to compound

let user_input = prompt("Please enter a command");
while(user_input!=="Stop"){
    console.log("your command was" + user_input);
    user_input = prompt("Please enter a command");
}

let user_input;
do{ 
    console.log("your command was" + user_input);
    user_input = prompt("Please enter a command");
}while(user_input!=="Stop");
console.log("exiting")


// let i =0;
// while(i<3){
// console.log(i);
// i++;
// }

/* change for loop into while loop
for(let i=0; i<3;i++){
    console.log(i);
}
//using while loop
let i=0;
while(i<3){
console.log(i);
i++;
} */

/* Repeat until the input is correct
let input;
do{
    input = +prompt("Enter a number > 100");
    
}while(input<=100 && input)//The check && num is false when num is null or an empty string. Then the while loop stops too.
console.log("Good jon");
 */

/* Output prime numbers */
// let n=10;
// for(let i=2; i<=input; i++){
//     for(let j=2; j<i; j++){
//         if(i%j===0)continue input;
//     }
//     console.log(i);
// }
