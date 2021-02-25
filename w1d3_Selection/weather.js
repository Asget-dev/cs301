"use strict";
const prompt = require("prompt-sync")();

const weatheType = prompt("Enter weather type");
if(weatheType==="hot"){
    console.log('sandals');
}else if(weatheType==="galoshes"){
    console.log("galoshes")
}else if(weatheType==="boots"){
    console.log("boots")
}else{
    console.log(sneakers);
}