/* eslint-disable */
const prompt = require("prompt-sync")();

let input = prompt("enter a text separated by comma");
let arr = input.split(",");
arr.reverse();
let joinedStr =arr.join("-");
console.log(joinedStr);