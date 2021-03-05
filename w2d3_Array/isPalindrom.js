"use strict";

// eslint-disable-next-line require-jsdoc
function isPalindrome(arr){
    let copy=[];
    for(let num of arr){
       copy.push(num); 
    }

for(let i=0; i<arr.length; i++){
    if(arr.shift() !== copy.pop()){
        return false;
    }
}
return true;
}

console.log(isPalindrome(["mom",2,2,1]));