"use strict";
const prompt = require("prompt-sync")();

const quarts = prompt("Enter a volume in quarts");
const volumeInput = quarts * 0.946353; 
console.log(quarts ,`quarts is`, volumeInput);