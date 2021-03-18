"use strict";
exports.mostFrequentSight = mostFrequentSight;
exports.divisibleSumPairs = divisibleSumPairs;
exports.findMinDistance=findMinDistance;
exports.computeHeight =computeHeight;
exports.countSocksPairs=countSocksPairs;
/**
 * 
 * @param {Array} num return the
 * @returns {max} return the max number
 */
function mostFrequentSight(num) {
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

/**
 * @param {Array} arr return the
 * @param{number} num is 
 * @returns {max} return the max number
 */
  function divisibleSumPairs(arr,num){
    let count = 0;
    for(let i=0; i<arr.length-1; i++){
      for(let j=i+1; j<arr.length; j++){
            if(((arr[i]+arr[j])%num)==0){
                   count++;
            }
        }
    }
    return count;
}


/**
 * 
 * @param {Array} num return the
 * @returns {max} return the max number
 */
      function countSocksPairs(num) {
        let pairs = 0;
        const obj = {};
        num.forEach(i => {
            if (obj[i]) {
                pairs += 1;
                obj[i] = 0;
            } else {
                obj[i] = 1;
            }
        });
        return pairs;
      }

/**
 * 
 * @param {num} num height aad 
 * @returns{cycles} return cycles
 */
  function computeHeight(num) {
    let cycle = 1;
    let height = 1;

    while (cycle <= num){ 
        if(cycle % 2 !== 0 ){ 
            height *= 2;
        }else{
            height++; 
        }
        cycle++;
    }
    console.log(height);
}

/**
 * @param {num} num a number
 *@returns {distance} return the ; 
 */
function findMinDistance(num) {
  let distances = [];
  for(let i = 0; i<num.length; i++){
      if(num.indexOf(num[i]) !== num.lastIndexOf(num[i])){
      let minDistance = num.lastIndexOf(num[i]) - num.indexOf(num[i]);
          distances.push(minDistance);
      }
  }

  if(distances.length === 0){
      return -1;
  }else{
      distances.sort(function(num, num2) {
        return num - num2;
      });
  
      return distances[0];
  }
}





