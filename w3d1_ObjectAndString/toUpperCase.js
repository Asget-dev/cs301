/* eslint-disable */
const prompt = require("prompt-sync")();

let input;

do{
    input = prompt("Enter a text");
    input.toLowerCase();
    console.log(input);
}while(input!=="stop");