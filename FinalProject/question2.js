/* eslint-disable */
function twoSum(nums, target_num) {
  const map = [];
  const indexnum = [];

  for (let x = 0; x < nums.length; x++) {
    if (map[nums[x]] != null) {
      var index = map[nums[x]];
      indexnum[0] = index;
      indexnum[1] = x;
      break;
    } else {
      map[target_num - nums[x]] = x;
    }
  }
  return indexnum;
}
console.log(twoSum([10, 20, 10, 40, 50, 60, 70], 50));

// function deleteArrayElement(arr,idx){
//     let resultArr = [];
//     for(let i=0;i<arr.length; i++){
//         if(i===idx) continue;
//             resultArr.push(arr[i]);
//     }
//     return resultArr;
// }
// let result = deleteArrayElement([-4,0,1,2,-3,4,0,9,8],3);

// console.log(deleteArrayElement(result));
