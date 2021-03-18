/* eslint-disable */

// let x =[1,1,1,12,2,25,1];
// x.sort((a,b)=>a-b)
// console.log(x);
// function mostFrequent(x){
//     max = 1;
//     count = 0;
//     let item;
//     for(let i=0; i<x.length; i++){
//         for(let j=i; j<x.length;j++){
//             if(x[i]===x[j])
//             count++;
//             if(max<count){
//                 max=count;
//                 item=x[i];
//             }
//         }count = 0;
//     }
//     return count;
//     console.log(`${item} ${max} times`);
// }
// console.log(mostFrequent(x));

var arr1=[4, 3, 6, 8, 3, 8, 4, 9, 6, 4];
function mostFrequent(num) {
    let count = 1;
    let max = 0;
    let item;
    for (var i = 0; i < num.length; i++) {
      for (var j = i; j < num.length; j++) {
        if (num[i] == num[j]) max++;
        if (count < max) {
          count = max;
          item = num[i];
        }
      }
      max = 0;
    }
    return item;
  }
  console.log(mostFrequent(arr1));