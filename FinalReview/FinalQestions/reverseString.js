/* eslint-disable */

let x = "Hi how are you";
function reverseString(text){
    let copy ="";
   for(let i=text.length-1; i>=0; i--){
        copy = copy + text.charAt(i);
   }
return copy;
}
console.log(reverseString(x));
