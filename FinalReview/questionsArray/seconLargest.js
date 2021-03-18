/* eslint-disable */
let number = [1,2,55,4,5,6,11,66,66];
number.sort(secondLargest);
number.pop([number.length-1]);
console.log(number[number.length-1]);

function secondLargest(a,b){
    if(a===b){
        return 0;
    }else if(a>b){
        return 1;
    }else{
        return -1;
    }
}

