/*eslint-disable*/
function testPalindroms(s){
    if(s.length===0 || s.length===1){
        return true;
    }else{
        if(s[0]===s[s.length-1]){
            return testPalindroms(s.substr(1,s.length-2));
        }else{
            return false;
        }
    }
}
console.log(testPalindroms("modm"));