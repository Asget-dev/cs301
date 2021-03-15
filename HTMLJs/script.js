/* eslint-disable */


function swap(){
    var tmp = document.getElementById("c").value;
    document.getElementById("c").value = document.getElementById("d").value;
    document.getElementById("d").value = tmp;
}
window.onload=()=>{
    document.getElementById("go").onclick = swap;
}