/* eslint-disable */
let arr=["I","study","JavaScript","right","now"];

//remove 3 first elements and replace them with another
//returns the removed element

let removed = arr.splice(0,3,"Let's","dance");//from index 0 remove 3 emlement
console.log(arr);//now["Let's","dance","right","now"]
console.log(removed);