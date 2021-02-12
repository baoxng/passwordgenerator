// Assignment Code
// Assignment Code
var generateBtn = document.querySelector("#generate");

//character codes 
var lowerCases= "abcdefghijklmnopqrstuvwxyz";
var upperCases= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters= "!@#$%^&*()_+?><:;-";
var numbers= "0123456789";


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
 
    var lengthEl = +passLength; 
    var lowerCaseEl = passlCase;
    var upperCaseEl = passuCase;
    var specialCharacterEl= passspecialC;
    var numberEl = passnumber;
    var passwordText = document.querySelector("#password");

    //Connect all functions into one random
    const randomFunc= {
    lower: getlowerCase,
    upper: getupperCase,
    special: getspecialCharacter,
    number: getnumber
  }


  // Add event listener to generate button
  generateBtn.addEventListener("click", () => {
    const lengths= lengthEl;
    const haslowerCase = lowerCaseEl; 
    const hasupperCase = upperCaseEl; 
    const hasspecialCharacter = specialCharacterEl; 
    const hasnumber = numberEl; 
    passwordText.innerHTML= generatePassword ( lengthEl,
      haslowerCase, hasupperCase, hasspecialCharacter, hasnumber);
    
    })

  //Generate password function.

    function generatePassword (lowerCaseEl, upperCaseEl, specialCharacterEl, numberEl, length) {
      let generatedPassword = "";

      const typesCount= lowerCaseEl + upperCaseEl + specialCharacterEl + numberEl;

      console.log ("typesCount:", typesCount);
      const typesArr= [{lowerCaseEl}, {upperCaseEl}, {specialCharacterEl}, {numberEl}].filter(
        item => Object.values(item)[0]
        );
        console.log ("typesArr:", typesArr);

        if(typesCount === 0){
        return "";
      }
     
      
      for(let i = 0; i <= length; i += typesCount) {
        typesArr.forEach((types) => {
          const funcName = Object.keys(types)[0];
          console.log("funcName", funcName);
          generatedPassword += randomFunc;

          console.log(generatedPassword)
        });

           
      }
        
    }


  // Function to get random lower case.
  function getlowerCase() {
    var lowerCases= "abcdefghijklmnopqrstuvwxyz";
    return lowerCases[Math.floor(Math.random() * lowerCases.length)];
    
  }
  


  //Function to get random upper case.
  function getupperCase() {
    var upperCases= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upperCases[Math.floor(Math.random() * upperCases.length)];
  }

  //Function to get random special characters.

  function getspecialCharacter() {
    var specialCharacters= "!@#$%^&*()_+?><:;-";
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  }


  // Function to get random numbers.

  function getnumber() {
    var numbers= "0123456789";
    return numbers[Math.floor(Math.random() * numbers.length)]; 
  }