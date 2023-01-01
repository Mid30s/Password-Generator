// Assignment Code
var generateBtn = document.querySelector("#generate");

// ARRAYS
// array for lowercase
var LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// array for uppercase
var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// array for numbers
var Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// array for special characters
var Special = [" ","~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?", "/"];
// array for all
var arrCharacters = [];

function generatePassword() {
  //choose password length

  var passwordLength = 0;
  passwordLength = prompt ("Choose a password between 8 and 128 characters.")
  if ((passwordLength < 8 || passwordLength > 128) || isNaN(passwordLength)) {
    passwordLength = prompt("Please try again! Choose at least between 8-128 characters.");
  }else {
    alert("Your password will be " + passwordLength + " characters long.");    
  }

  //confirm to include lowercase
  includeLowercase = confirm("Do you want to include lowercase characters?");
  if (includeLowercase) {
    alert("Your password will included lowercase characters.");
  } else {
    alert("Your password will not included lowercase characters.")
  }

  //confirm to include uppercase   
  includeUppercase = confirm("Do you want to include uppercase characters?");
  if (includeUppercase) {
    alert("Your password will included uppercase characters.");
  }else {
    alert("Your password will not included uppercase characters.")
  }

  //confirm to include number 
  includeNumbers = confirm("Do you want to include numbers?");
  if (includeNumbers) {
    alert("Your password will include numbers.");
  }else {
    alert("Your password will not include numbers.");
  }
  
  //confirm to include special characters
  includeSpecial = confirm("Do you want to include special characters?");
  if (includeSpecial) {
    alert("Your password will include special characters.");
  }else {
    alert("Your password will not include special characters.")
  }

  //No character selected situation
  if (includeLowercase === false && includeUppercase === false && includeNumbers === false && includeSpecial === false) {
      passwordLength = prompt("No characters was selected, Please try again! How many characters do you want to use for your password? Choose between 8-128 characters.");
  };

  // if character type selected, add to array for all
  if (includeLowercase){
  arrCharacters = arrCharacters.concat(LowerCase);
  }

  if (includeUppercase){
  arrCharacters = arrCharacters.concat(UpperCase);
  }

  if (includeNumbers){
  arrCharacters = arrCharacters.concat(Numbers);
  }

  if (includeSpecial){
  arrCharacters = arrCharacters.concat(Special);
  }
 //test random number
 console.log("Test: " + arrCharacters[Math.floor(Math.random() * arrCharacters.length)]);

 //create password
 var randomPassword = '';
 for(var i = 0; i < passwordLength; i++) { 
  randomPassword += arrCharacters[Math.floor(Math.random() * arrCharacters.length)];
 };
 return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


