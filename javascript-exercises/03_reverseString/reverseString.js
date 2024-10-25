const reverseString = function(str) {
    let result = []
    for (let i = str.length -1; i >= 0; i--){
        result.push(str[i]); //push every character from the last character 
    } return result.join("");
};

// Do not edit below this line
module.exports = reverseString;
