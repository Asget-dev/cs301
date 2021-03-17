/* eslint-disable */
function countDuplicate(arr){
    let duplicateCount = 0;
    arr.sort((a,b)=>a-b);
    console.log(arr);
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]===arr[i+1]){
            duplicateCount++;
        }
    }
    return duplicateCount;
}


let result = countDuplicate([-4,-4,4,0,1,2,-3,4,0,9,8],3);

console.log(result);