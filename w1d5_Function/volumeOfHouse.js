"use strict";
const prompt = require("prompt-sync")();

// let width = +prompt("Please enter width");
// let depth = +prompt("Please enter depth");
// let height = +prompt("Please enter height");
// let sweep = +prompt("Please enter sweep");

function doInputOutput(){
    let r = houseVolume(4,2,5,7);
    console.log(r);
}
function houseVolume(a, b, c, d){
    let houseVolume= (livingVolume() + roofVolume());
    return houseVolume;
}


function livingVolume(a,b,c){
    let x = a * b * c;
   return x;
}

function roofVolume(a, b, c){
    return triangleArea(a,b,c);
}
function triangleArea(a,b,c){
    let s = (a,b,c)/2;
    let triangleArea = Math.sqrt*(s*(s-a)*(s-b)*(s-c));
    return triangleArea;
}

doInputOutput();