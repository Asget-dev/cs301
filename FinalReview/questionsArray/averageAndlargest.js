/* eslint-disable */
let matrix = [
  [2, 3, 4], //9
  [5, 6, 7], //18
  [9, 8, 4], //21
];
//console.log(number);
//=> return [[3, 6, 7], [4, 7, 9]]

function averageAndlargest(matrix) {
  let total2 = [];
  for (let i = 0; i < matrix.length; i++) {
    let sum = 0;
    let average = 0;
    let total = [];
    let max = 0;
    
    for (let j = 0; j < matrix[i].length; j++) {
      sum = sum + matrix[i][j];
      if(matrix[i][j]>max){
        max=matrix[i][j]
      }
    }average = sum / matrix[i].length;
   
   
   total.push(average);
   total.push(max);
   total2.push(total);
   sum = 0;
  }
  console.log(total2);
  // for (let i = 0; i < total.length; i++) {
  //   if (total[i] > max) {
  //     max = total[i];
  //   }
  // }total2.push(max);console.log(max);
}
averageAndlargest(matrix);

// function averageAndlargest(matrix) {
//     let sum = 0;
//     let average =0;
//     for (let i = 0; i < matrix.length; i++) {
//       for (let j = 0; j < matrix[i].length; j++) {

//           sum=sum+matrix[i][j];
//       }average=sum/matrix[i].length;
//       console.log(average);
//       sum=0;
//     }
//   }
//   averageAndlargest(matrix);
