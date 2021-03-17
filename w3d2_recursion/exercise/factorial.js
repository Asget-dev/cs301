/* eslint-disable */
function factorial(num){
    if(num==0){
        return 1;
    }else{
        return num * factorial(num-1);
    }
}

console.log(factorial(5));



function factorialRec(num){
    let x=1;
    for(let i=0; i<num;i++){
        let y = x + i
    }return y;
}
console.log(factorial(5));