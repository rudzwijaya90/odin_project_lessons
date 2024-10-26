const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(num) {
  if (num.length === 0){
    return 0;
  }
  let sum = num.reduce((a, b) => a + b);
  return sum;
};

const multiply = function(num) {
  let sum = num.reduce((a, b) => a * b);
  return sum;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	let result = 1
  for (let i = 2; i <= num; i++){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
