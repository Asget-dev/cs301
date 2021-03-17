/* eslint-disable */
let number = [2,55,4,5,6,11,66,1];

function evenDominated(num){
    sum1=0;
    sum2=0;
    for(let i=0; i<num.length; i++){
        if(num[i]%2===0){
            sum1++;
        }else {
            sum2++;
        }
    }
    if(sum1>sum2||sum2>sum1){
        console.log(`there is ${sum1} even number and ${sum2} odd`);
    }else if(sum2>sum1){
        console.log(`there is ${sum2} odd number and ${sum1} even`);
    }else{
        console.log("equal")
    }
}
evenDominated(number);