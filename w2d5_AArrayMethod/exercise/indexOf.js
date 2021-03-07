/* eslint-disable */
let arr = [1, 2, 3];
//let arr2 = [5,6,7,8,9];

// // syntax arr.indexOf(value inside array where is indicated, it indecate in x index)
// console.log(arr.indexOf(2));// the out put is 1 since the index of 2 is 1
// console.log(arr.indexOf(2,1));// the out put is 1(means true) // the value in the index of 2 is 1
// console.log(arr.indexOf(false));//
// console.log(arr.indexOf(null))//since we don't have the value of null inside the array the out put will be -1

// console.log(arr.includes(1));// it return boolean true or true
// console.log(arr.includes(1,1));// false






function ssReverse(number) {
  let newArray = [];
  newArray = number.slice();
  console.log(newArray);
  let x=[];
  let j=0;
  for (let i = 0; i < newArray.length; i++) {
     x.splice(i,0,newArray[j]);
     
     j++;
  }
  return x;
}
console.log(ssReverse(arr));


// function shiftPush(r,y){
//     let newArray = [];
//     let x = [];
//     x = r.slice();
//     console.log(x);
//     x.
//     // for(let i=0; i<x.length; i++){

//     // }
// }
// console.log(shiftPush(arr,arr2));