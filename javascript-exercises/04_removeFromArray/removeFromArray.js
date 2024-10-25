const removeFromArray = function(arr, ...value) {
    return arr.filter (el => !value.includes(el));
};

const removeFromArray = function(arr, ...value) {
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if (!value.includes(arr[i])){
          result.push(arr[i]);
        } 
    } return result;
    
// Do not edit below this line
module.exports = removeFromArray;
