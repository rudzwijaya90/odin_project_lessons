// https://www.theodinproject.com/lessons/foundations-function-basics

function add7(num){
    return num + 7;
  }
  console.log(add7(5));
  
  function multiply(num1, num2){
    return num1 * num2;
  }
  console.log(multiply(7, 6));
  
  function capitalize(str) {
      if (!str) return str; // Return if the string is empty
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  console.log(capitalize("thIS IS nOT aLl upPERcASe"));
  
  function lastLetter(str){
    let lastChar;
    if (!str) return str; // Return if the string is empty
    for (let i = 0; i < str.length; i++){
      lastChar = str[i];
    } return lastChar;
  }
  console.log(lastLetter("Should"));
  console.log(lastLetter("Elephant"));