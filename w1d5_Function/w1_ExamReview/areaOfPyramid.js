"use strict";

function testEdge(){
    let r = 20;
    let b = 12;
 
    let result = computingEdge(r,b);
    console.log(result);
 }

function computingEdge(b,h){

    let e;
    e=Math.sqrt(((b**2)/2)+h**2);
    return e;
}
testEdge();