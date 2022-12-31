// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Character type

const characterTypes = {
  uppercase: 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(''),
  lowercase: 'abcdefghijklmnopqrstuvwxyz'.split(''),
  numerical: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  special: [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
  }
  
  function generatePassword() {
    var passwordLength = 0;

    passwordLength = prompt ("Choose a password between 8 and 128 characters.")
    if ((passwordLength < 8 || passwordLength > 128) || isNaN(passwordLength)) {
      passwordLength = prompt("How many characters do you want to use for your password? Choose at least between 8-128 characters.");
      }
      else {
       alert("Your password will be " + passwordLength + " characters long.");
     
    }

    includeLowercase = confirm("Do you want to include lowercase characters?");
    if (includeLowercase) {
       alert("Your password will included lowercase characters.");
      } else {
       alert("Your password will not included lowercase characters.")
    }

     
    includeUppercase = confirm("Do you want to include uppercase characters?");
    if (includeUppercase) {
       alert("Your password will included uppercase characters.");
      }else {
       alert("Your password will not included uppercase characters.")
    }
     
    includeNumbers = confirm("Do you want to include numbers?");
    if (includeNumbers) {
       alert("Your password will include numbers.");
      }else {
       alert("Your password will not include numbers.");
    }
     
    includeSpecial = confirm("Do you want to include special characters?");
    if (includeSpecial) {
       alert("Your password will include special characters.");
      }else {
       alert("Your password will not include special characters.")
    }
     

    if (includeLowercase === false && includeUppercase === false && includeNumbers === false && includeSpecial === false) {
      numberOfCharacters = prompt("How many characters do you want to use for your password? Choose between 8-128 characters.");
     };
    



     








  }