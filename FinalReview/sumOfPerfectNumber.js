/* eslint-disable */

function sumOfPerfectNumber(num){
    let sum=0;
    for(let i=1; i<num; i++){
        if(num%i==0){
            sum=sum+i;
        }
    }
    if(sum===num){
        console.log("true")
    }else{
        console.log("false");
    }
}
sumOfPerfectNumber(28);