"use strict";

function testCalories(){
    let dis = 10;
    let elev = 20;
    let weight = 54;
    
    let calories = calculateCaloriessBurned(dis,elev, weight);
    console.log(calories);

}


function calculateCaloriessBurned(distance, elevation, weight){
    let result =distance * elevation * weight;
    return result;
}

testCalories();