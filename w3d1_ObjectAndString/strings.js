"use strict";

exports.isPersonEqual = isPersonEqual;
exports.countProperties = countProperties;
exports.checkSpam = checkSpam;
exports.suffix = suffix;
exports.getAverageAge = getAverageAge;
exports.sumFirst = sumFirst;




let car={};
//car={make:" Toyota"};
car.make="Toyota";
car.model="camry";
console.log(car);
car.model="Rava4";
console.log(car);
delete car.make;
console.log(car);

//Question number 2

/**
 * 
 * @param {Object} persOne is a person object
 * @param {Object} persTwo is a person object
 * @returns {boolean} return boolean
 */
function isPersonEqual(persOne, persTwo) {
    if (persOne.name !== persTwo.name || persOne.age !== persTwo.age) {
        return false;
    } else {
        return true;
    }
} 

//Question number 3
/**
 * 
 * @param {Object} obj is any object
 * @returns {number} count of properties
 */
function countProperties(obj) {
    let count = 0;
    for (const number in obj) {
        count++;
        number;
    }
    return count;
}

//Question number 4

/**
 * 
 * @param {string} str is any string
 * @returns {boolean} true if is lottery or prize
 */
function checkSpam(str) {
    if (str.includes("lottery") || str.includes("prize")) {
        return true;
    } else {
        return false;
    }
}

//Question number 5

/**
 * 
 * @param {string} str1 is any string
 * @param {string} str2 is any string
 * @returns {string} the common suffix or ""
 */
function suffix(str1, str2) {
    let text = "";
    let shortest = Math.min(str1.length, str2.length);

    for (let i = shortest - 1; i >= 0; i--) {
        if (str1[i] === str2[i]) {
            text = str1[i] + text;
        } else {
            return text;
        }
    }
    return text;

}

//Question number 6
/**
 * 
 * @param {String} text string
 * @return {String} return string
 */
 function titleCase(text){
    return text[0].toUpperCase()+text.substr(1,text.length-1);
    }
    let str3="hello";
    console.log(titleCase(str3));


//Question number 7
/**
 * @param {Array} users is array of objects
 * @returns {number} average age
 */
function getAverageAge(users) {
    let average = 0;
    for (const user of users) {
        average += user.age;
    }
    average = average / users.length;
    return average;
}

//Question number 8
/**
 * @param {Array} arr subarrays of numbers
 * @returns {number} sum of first elements 
 */
function sumFirst(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {  
        sum += arr[i][0];
    }
    return sum;
}