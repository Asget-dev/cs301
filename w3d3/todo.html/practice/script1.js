
/* eslint-disable */
let result;
function addition(){
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;
    result= +numberOne + +numberTwo;
    let btn =document.getElementById("output").innerHTML = result; 
    btn.style.color="red";
  }
 let btn = document.getElementById("ok").onclick=addition;
 
// function init(){
//     document.getElementById("ok").onclick = okClick;
// }


// let init = function(){
//     document.getElementById("ok").onclick = okClick;
// }
// window.onload = init;


// other way to wright the function
//or
// window.onload = () =>{
//     document.getElementById("ok").onclick = okClick;
// };

//to change the content or style in side javascript


//css and javascript
// function okClick(){
//     let btn = document.getElementById("ok");
//     btn.style.color = "red";
//     btn.style.fontSize = "5em";

// }
//     document.getElementById("ok").onclick = okClick;

//separate css and javascript
//css and javascript
// function okClick(){
//     let btn = document.getElementById("ok");
//     btn.className = "styled";

// }
//document.getElementById("ok").onclick = okClick;