const fibonacci = function(numArg) {
    let result
    if (typeof numArg !== 'number') {
        result = parseInt(numArg)
    } else {
        result = numArg
    }

    if (result < 0) return "OOPS";
    if (result == 0) return 0;
    
    let n1 = 0;
    let n2 = 1;
    for (let i = 1; i < result; i++){
        let current
        current = n1 + n2;
        n1 = n2;
        n2 = current;
    }
    return n2;
};

// Do not edit below this line
module.exports = fibonacci;
