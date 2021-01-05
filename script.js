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

//Variables for password
var lowerCase= "abcdefghijklmnopqrstuvwxyz";
var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacter= "!@#$%^&*()_+?><:;-";
var numbers= "0123456789";



var passLength= prompt ("Select password length, must contain 8-128 characters.")

  if ((passLength >= 8) && (passLength <= 128)){
    alert ("Requirment met.")
  }

  else {
    alert (" Password length must be 8-128 characters long!")
  }

  function getlowerCase() {
    return lowerCase.charAt()
  }

