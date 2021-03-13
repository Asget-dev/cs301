
/* eslint-disable */
function okClick(){
    alert("ok");
}

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
function okClick(){
    let btn = document.getElementById("ok");
    btn.className = "styled";

}
document.getElementById("ok").onclick = okClick;