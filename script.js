// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

/*Variables for password
var lowerCase= "abcdefghijklmnopqrstuvwxyz";
var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacter= "!@#$%^&*()_+?><:;-";
var number= "0123456789"; */

// To prompt password length
var passLength= ""
 /* if ((passLength >= 8) && (passLength <= 128)){
    alert ("Requirment met.")
  }

  else {
    alert (" Password length must be 8-128 characters long!")
    
  } */

  //Loop Password prompt until condition is true.

    var passLength = prompt ("Select password length, must enter a number between 8 and 128.")

    while ((passLength <= 8) || (passLength >= 128)) {
      alert (" Password length must be a number from 8 to 128!");
      
    }


   


// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);


  //Connect all functions into one random
  const randomPass ={
    lower: getlowerCase,
    upper: getupperCase,
    special: getspecialCharacter,
    number: getnumber
  };


  // Function to get random lower case.
  function getlowerCase() {
    var lowerCase= "abcdefghijklmnopqrstuvwxyz";
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];
    
  }

  //Function to get random upper case.
  function getupperCase() {
    var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upperCase[Math.floor(Math.random() * upperCase.length)];
  }

  //Function to get random special characters.

  function getspecialCharacter() {
    var specialCharacter= "!@#$%^&*()_+?><:;-";
    return specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
  }


  // Function to get random numbers.

  function getnumber() {
    var number= "0123456789";
    return number[Math.floor(Math.random() * number.length)];
  }



