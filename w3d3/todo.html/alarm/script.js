/* eslint-disable */


function goClick() { 
    const seconds = +document.getElementById("sec").value;
    setTimeout(alarm, seconds * 1000);
    setTimeout(alarm,2000);
} 

function alarm(){
    const bodyElement = document.getElementById("body");
    bodyElement.className = "awesome";
}

window.onload = ()=>{
    document.getElementById("go").onclick = goClick; 
}