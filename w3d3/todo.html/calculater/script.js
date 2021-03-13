/* eslint-disable */
function tipCalculater(){
    let bill = document.getElementById("inputOne").value;
    let tip  = document.getElementById("inoutTwo").value;
    var tipValue = bill * (tip/100)
    var finalBill = bill + tipValue
    document.getElementById("output").innerHTML = finalBill;
    let display=document.getElementById("output").innerHTML;
    let color=display.fontcolor("green");
        
    document.getElementById("output").innerHTML = color ;
  }
window.onload=()=>{
document.getElementById("calculate").onclick = tipCalculater;
}
