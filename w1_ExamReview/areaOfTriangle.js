"user strict";

function testPyramid(){
    let pa = pyramidSurfaceArea(8,7);
    console.log(pa);
}

function pyramidSurfaceArea(base, height){
    let edge = Math.sqrt(base*base/2 + height*height);
    let triArea = triangleArea(base,edge,edge);
    let pyramidArea = 4*triArea;
    return pyramidArea;
}
function triangleArea(a,b,c){
    let s = (a+b+c)/2;
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return area;
}

testPyramid();