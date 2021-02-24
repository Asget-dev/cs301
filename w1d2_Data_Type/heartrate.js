"use strict";
const prompt = require("prompt-sync")();

const age = prompt("Enter your age");
const range = 220 - age;
const slowest = 0.67*range;
const fastest = 0.85*range;
console.log(`slowest rate ` , slowest);
console.log(`fastest rate ` , fastest);
