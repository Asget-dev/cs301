/* eslint-disable */
const prompt = require("prompt-sync")();

let noOfItem = +prompt("Please enter number of items: ");

let total = 0;
for(let i=1; i<=noOfItem; i++){
    let price = +prompt("Please enter price of the item: ");
    total = total + price;
}

if(total > 99){
    total = total - 10/100*total;
}
console.log(total);