"use strict";
const prompt = require("prompt-sync")();

let counter=2;
const pin = 4456;
let trie = +prompt("enter the 4 digit pin for your account");

while (counter!==0) {
  if (trie === 4456) {
    console.log("Correct, welcome back.");
    break;
  } else {
    console.log("“Incorrect, try again.");
    trie = +prompt("Enter the 4 digit pin number");
  }
  counter--;
}
console.log("Sorry but you have beenlocked out.");
 