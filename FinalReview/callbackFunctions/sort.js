/* eslint-disable */
"use strict";
let arr1 = [1,3,2,4,5,7,10,22,33];
//console.log(arr1);
arr1.sort(myComparator);//[1, 10, 2, 22, 3,33,  4, 5,  7] it is sorted based on dictionory order but it is not correct
console.log(arr1);

function myComparator(a,b){
    if(a===b){
        return 0;
    }else if(a>b){
        return 1;
    }else{
        return -1;
    }
}

1===1//return 0;
2<1//return negative number
2>1//return positive number


