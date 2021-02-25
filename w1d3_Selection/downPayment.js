"use strict";
const prompt = require("prompt-sync")();

const x = +prompt("Enter that amount to calculate down payment for a home lone =");
if (x < 50000) {
  console.log(x * 0.05);
} else if (x < 100000) {
  console.log((1000 + 0.1)*(x - 50000));
} else if (x < 200000) {
  console.log((2000 + 0.15)*(x - 100000));
} else {
  console.log((5000 + 0.1)*(x - 200000));
}
