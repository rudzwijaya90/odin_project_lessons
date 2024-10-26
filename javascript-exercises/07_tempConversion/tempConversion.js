const convertToCelsius = function(temp) {
  let result = (temp - 32) / 1.8;
  return parseFloat(result.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let result = (temp * 1.8) + 32;
  return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
