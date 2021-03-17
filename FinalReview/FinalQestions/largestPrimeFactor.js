/* eslint-disable */
function largestPrimeFactor(number){
    if(number<=1){
        return 0;
    }
    

    let factor=[];
    for(let i=0; i<=number/2; i++){
        if(number%i===0){
            factor.push(i);
        }
    }

 


    
}
console.log(largestPrimeFactor(10));