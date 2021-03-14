/* eslint-disable */
let number =[1,2,3,4,5];

function SumOfPrimesEven(num){
    let sum=0;
    for(let i=0;i<num; i++){
        sum=sum+num[i];
    }
    return sum;
}
function isSumOfPrimesEven(myCallback){
    let x = myCallback%2;
    if(x===0){
        return true;
    }else{
        return false;
    }
}

SumOfPrimesEven("j",number);