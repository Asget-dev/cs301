/* eslint-disable */
const prompt = require("prompt-sync")();

// let x;
// do{
//      x = prompt("enter some text");
// }while(x !== "stop");

//or
let input ;
while(true){
      input = prompt("enter some text");
     if(input === "stop"){
         break;
     }
}