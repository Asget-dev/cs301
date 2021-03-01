"use strict";
//  let y;
// //console.log(typeof("6"/"3"));
// console.log(typeof(y++));

let x=null;
let y;
console.log(typeof(x));//object
console.log((y));//undefined
console.log(x++);//x = x + 1===>  x = object + 1=> 0 
y++;//y=y+1=> y = undefined + 1=>NaN
console.log(x,y);//1,NaN
y=false;
console.log(x<y);//1<false==>1<0==>false
x+="2"; //x=x+"2" ==> x=1+"2" ===> 12
console.log(x);//12
console.log(x>y);//12>0===>true

// const x = 6;
// console.log(x);//6
// if(x==6){
// let y = 2*x;// y = 2 * 6=12
// console.log(y);//12
// console.log(x);// 6
// }
// console.log(x); //6
//console.log(y); // refference error


// let x;
// if(x) {
// const y=5
// };
// console.log(y);


// let x;
// if(!x) {
// const y=5
// };
// console.log(y);

// let x = 1;
// let y = '2';
// let z = true;
// let s = x + y;
// console.log(s) // output?  12
// console.log(typeof s) // output?  string
// x = x + z;
// console.log(x) // output?  //2
// console.log(typeof x) // output? // nuber
// y = x++ * y;    // 1+1*'2' 32
// console.log(x); // output? 2
// console.log(typeof x); // output? numer
// s = parseInt(s) // numbrt 12
// s+='3';////123
// console.log(s); // output? 123
// console.log(typeof s); // output? string
// z= !z;
// console.log(z); // output? false
// console.log(typeof z); // output? boolean