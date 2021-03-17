/* eslint-disable */
arr1 = [1,2,3,45,6];
//arr1.sort(myComparator);
arr1.sort((a,b)=>a-b);

console.log(arr1);






//function decoration
function myComparator(a,b){
    return a-b;
}

//function expression
let myComparator2 = function(a,b){
    return a-b;
}

//arrow function
let myComparator3 = (a,b)=>a-b;


console.log(myComparator(1,2))
console.log(myComparator2(1,2))
console.log(myComparator3(1,2))