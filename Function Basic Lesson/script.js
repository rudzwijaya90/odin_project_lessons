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
  console.log(capitalize("thIS IS nOT aLl upPERcASe")); //return "This is not all uppercase"

 function capitalize2(str) {
    if (!str) return str; // Return if the string is empty

    let firstLetter = str[0].toUpperCase(); // Capitalize the first letter
    let restOfString = ''; // Initialize an empty string for the rest

    // Loop through the string starting from the second character
    for (let i = 1; i < str.length; i++) {
        restOfString += str[i].toLowerCase(); // Add each character in lowercase
    }

    return firstLetter + restOfString; // Combine and return
}
console.log(capitalize2("thIS IS nOT aN upPERcASe PAraGrAPh"));
  
  function lastLetter(str){
    let lastChar;
    if (!str) return str; // Return if the string is empty
    for (let i = 0; i < str.length; i++){
      lastChar = str[i];
    } return lastChar;
  }
  console.log(lastLetter("Should be"));
  console.log(lastLetter("Elephant"));

  function lastLetter2(str){
    let lastChar = "";
    if (!str) return str; // Return if the string is empty
    for (let i = str.length - 1; i < str.length; i++){
      lastChar = str[i];
    } return lastChar;
  }
  console.log(lastLetter2("Should"));
  console.log(lastLetter2("ElephanT"));