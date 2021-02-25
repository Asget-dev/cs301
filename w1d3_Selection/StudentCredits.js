"use strict";
const prompt = require("prompt-sync")();

const studentName = prompt("Enter your name ");
const numberOfCredit = +prompt("Enter number of credits ");

if(numberOfCredit < 30){
    console.log(studentName, " Freshman" );
}else if(numberOfCredit <60){
    console.log(studentName, " Sophomore");
}else if(numberOfCredit < 90){
    console.log(studentName, " Junior");
}else{
    console.log(studentName, " Senior");
}