/* eslint-disable */
const prompt = require("prompt-sync")();

let input = prompt("Please enter some words separated by commas: ");
let replaced = input.replace("for",4);
console.log(replaced);