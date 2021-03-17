/* eslint-disable */
function deleteArrayElement(arr,idx){
    let resultArr = [];
    for(let i=0;i<arr.length; i++){
        if(i===idx) continue;
            resultArr.push(arr[i]);
    }
    return resultArr;
}
let result = deleteArrayElement([-4,0,1,2,-3,4,0,9,8],3);

console.log(deleteArrayElement(result));