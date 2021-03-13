"use strict";
/* eslint-disable */

    let result;
    function addition(){
        let numberOne = document.getElementById("numberOne").value;
        let numberTwo = document.getElementById("numberTwo").value;
        result= +numberOne + +numberTwo;
        document.getElementById("output").innerHTML = result; 
      }
  
      function subtraction(){
        let numberOne = document.getElementById("numberOne").value;
        let numberTwo = document.getElementById("numberTwo").value;
        result=+numberOne - +numberTwo;
        document.getElementById("output").innerHTML = result; 
      }
  
      function multiply(){
        let numberOne = document.getElementById("numberOne").value;
        let numberTwo = document.getElementById("numberTwo").value;
        result=+numberOne * +numberTwo;
        document.getElementById("output").innerHTML = result; 
      }
  
      function division(){
        let numberOne = document.getElementById("numberOne").value;
        let numberTwo = document.getElementById("numberTwo").value;
        result=+numberOne / +numberTwo;
        document.getElementById("output").innerHTML = result; 
      }

  
      function display(){
        let inputValue =  document.getElementById("textbox1").value;
        let textbox2 = document.getElementById("textbox2");
        textbox2.value = inputValue;
        document.getElementById("textbox1").value = "";
    }
    

// function showFullName(){
//     let fName = document.getElementById("fname").value;
//     let lName = document.getElementById("lname").value;
   
//     let fullName = fName +" "+ lName;
//     document.getElementById("output").innerHTML = fullName;
// }

