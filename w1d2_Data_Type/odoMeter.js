"use strict";
const prompt = require("prompt-sync")();

const beginningOdometer = prompt("Enter beginning of odmoneter reading");
const endingOdometer=prompt("Enter ending Of odometer reading");
const gallonsUsed = prompt("Enter number of gallons of gas used");
const totalMileage = (beginningOdometer - endingOdometer)/gallonsUsed;
console.log(`Toatl Mileage is`, totalMileage , `mpg` )
