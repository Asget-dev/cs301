/* eslint-disable */


// function swap(){
//     let In = document.getElementById("txtIn");
//     let Out = doucment.getElementById("spnOut");
//     let temp = In.value;
//     In.value = Out.innerHTML;
//     Out.innerHTML = temp;
// }
// window.onload=()=>{
//     document.getElementById("btnSwap").onclick = swap;
// }


// function pageLoad(){
//     document.getElementById("ok").onclick=swap;
// }
// window.onload = pageLoad;

function swap(){
    var tmp = document.getElementById("c").value;
    document.getElementById("c").value = document.getElementById("output").innerHTML;
    document.getElementById("output").innerHTML = tmp;
}
window.onload=()=>{
    document.getElementById("go").onclick = swap;
}