/*eslint-disable*/
let x = [1,2,3,4,9,9];

function addends(arr){
    return arr[0] + arr[arr.length - 1];
}

function getMiddle(arr){
    let x=Math.floor(arr.length /2);
        if(arr.length%2===0){
            return (arr[x-1] + arr[x]);
        }else{
            return arr[x];
    }
}

function rotateLeft(arr){
    let first = arr[0];
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1]=first;
    return arr;
}

function rotateRight(arr){
    let last = arr[arr.length-1];
    for( i=arr.length-1; i>=0; i--){
        arr[i] = arr[i-1];
    }
    arr[0]=last;
    return arr;
}

function rotateNRight(arr,n){
    let nRotated = arr;
    for(let i=1; i<=n; i++){
        nRotated = rotateRight(arr);
    }
    return nRotated;
}
console.log(addends(x));
console.log(getMiddle(x));
console.log(rotateLeft(x));
 console.log(rotateRight(x));
console.log(rotateNRight(x,5));
