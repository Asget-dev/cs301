/* eslint-disable */

let x = [2,3,-1,-4,3,2,1];
let min = 1;
function findMin(num){
    for(let i=0; i<x.length; i++){
        if(x[i] < min){
            min = x[i] ;
        }
    }    
    return min;
}
console.log(findMin(x));
