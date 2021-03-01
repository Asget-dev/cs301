"use strict";
const prompt = require("prompt-sync")();

/* input ====> user add the age and season.
process===> based on the input using strict equal and greter than sign it catagorieses the age and the season passing it to the out put. 
output ====> based on the input and process the bedtime will be print. */

const age = +prompt("Enter your age ");
const season = prompt("Enter the season ");

if(age<=5){
    if(season==="summer"||season==="fall"){
        console.log("Bed time is at 8:30 PM");
    }else{
        console.log("Bed time is at 8:00 PM")
    }
}else if(age>=6&&age<=12){
    if(season==="summer"){
        console.log("Bed time is at 9:30 PM")
    }else {
        console.log("Bed time is at 8:30 PM")
    }
}else if(age >=13){
    if(season==="summer"){
        console.log("Bed time is at 10:30 PM")
    }
    else {
        console.log("Bed time is at 9:30 PM")
    }
}