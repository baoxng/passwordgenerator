// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText= document.querySelector ("#password");

// Write password to the #password input 
  function writePassword() {
  var password = generatePassword();  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  } 
  


  //Loop Password length prompt until condition is met.

    var passLength = prompt ("Select password length, must enter a number between 8 and 128.")

    while ((passLength <= 7) || (passLength >= 129)) {
      alert (" Password length must be a number from 8 to 128!");
      passLength = prompt ("Select password length, must enter a number between 8 and 128.")
    }

    //Confrim if lower case is included in password.
    var passlCase = confirm ("Do you want to include lower case letters in your password? Select 'Ok' to include or 'Cancel' to not include in password.")

    // Confirm if upper case is included in password.
    var passuCase = confirm ("Do you want to include upper case letters in your password? Select 'Ok' to include or 'Cancel' to not include in password.")

    //Confirm if special character is included in password.
    var passspecialC = confirm ("Do you want to include special characters in your password? Select 'Ok' to include or 'Cancel' to not include in password.")

    //Confirm if numbers are included in password.
    var passnumber = confirm ("Do you want to include numbers in your password? Select 'Ok' to include or 'Cancel' to not include in password.")


    alert ("Click on Generate Password button to get your password.")
 
    var length = passLength; 
    var lowerCase = passlCase;
    var upperCase = passuCase;
    var specialCharacter= passspecialC;
    var number = passnumber;

 

// Add event listener to generate button
  generateBtn.addEventListener("click", () => {
    const charalength = +length;
    const haslCase = lowerCase; 
    const hasuCase = upperCase; 
    const hasspecial = specialCharacter; 
    const hasnumber = number; 

    passwordText = generatePassword(haslCase, hasuCase, hasspecial, hasnumber);

  });

  
  //Generate password function.
    function generatePassword (lowerCase, upperCase, specialCharacter, number) {
      
      let generatePassword= "";

      const typeCount = lowerCase + upperCase + specialCharacter + number;

      console.log("typescount", typeCount);

      const typesArr = [{lowerCase}, {upperCase}, {specialCharacter}, {number}].filter(
        item => Object.values(item)[0]
        ); 
     

      console.log("typesArry", typesArr);

    }


    //password = generatePassword (
      //passLength, passlCase, passuCase, passspecialC, passnumber
    



 // passwordText.innerText = generatePassword (passLength, passlCase, passuCase, passspecialC, passnumber);

  //Generate password function.


 /* function generatePassword( passLength, passlCase, passuCase, passspecialC, passnumber){
  }
  */

  //Connect all functions into one random
  const randomFunc = {
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



