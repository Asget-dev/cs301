"use strict";
const prompt = require("prompt-sync")();

/* input    ====> user enter status and number of books overdue
   process  ====> when user enter status it catagorieses based on the status. Once it found the status and again it catagorieses based on the number of books overdue. Finaly, it passes to the output
   output   ====> based on the process it prints out how many loan is allowed during weeks */

const status = prompt("Enter a status");
const numberOfBook = +prompt("How many books you need");

if(status === "student"){
    if(numberOfBook<=0){
        console.log("your loan duration in weeks is 6")
    }else if(numberOfBook<=3){
        console.log("your loan duration in weeks is 4")
    }else{
        console.log("your loan duration in weeks are 2")
    }
}else if(status === "Faculty"){
    if(numberOfBook>=0){
        console.log("your loan duration in weeks is 12")
    }else if(numberOfBook>2){
        console.log("your loan duration in weeks is 10")
    }else{
        console.log("your loan duration in weeks are 8")
    }
}else{
    if(numberOfBook>=0){
        console.log("your loan duration in weeks is 4")
    }else if(numberOfBook>2){
        console.log("your loan duration in weeks is 3")
    }else{
        console.log("your loan duration in weeks are 2")
    }
}