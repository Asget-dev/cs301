"use strict";
const prompt = require("prompt-sync")();


//the first patter
 let rows="";
for(let i=1; i<=5;i++){
   
    for(let j=1;j<=i;j++){
       rows+=j +"\t";
    }
    rows+="\n";
}
console.log(rows);

//the second pattern
let rows2="";
for(let i=1; i<=5;i++){
    for(let j=1;j<=i;j++){
        rows2+=i + "\t";
    }
    rows2+="\n";
}
console.log(rows2);


// //the last pattern
let rows3="";
    for(let j=5;j>0;j--){
        for(let i=0; i<j;i++){
        rows3+=j + "\t";
    }
    rows3+="\n";
}
console.log(rows3);

