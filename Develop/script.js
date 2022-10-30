// Assignment code here
var length_criteria = 0
var minimum_length = 8
var maximum_length = 128
var number_of_character_types_selected = 0
var minimum_character_types = 1
// var character_types = ["lowercase", "uppercase", "numeric", "special"]
var lowercaseSelected = false;
var uppercaseSelected = false;
var numericTypeSelected = false;
var specialTypeSelected = false;

// Get references to the #generate html element, used for the event listener
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {

  // trigger function to generate the password
  var password = generatePassword();

  // grab the password readonly text area
  var displayPasswordText = document.querySelector("#password");

  // display the generated password in the #password html element
  displayPasswordText.value = password;

}



// function to generate password
function generatePassword() {

  function getLength() {
    let input_length_string = prompt('How many characters would you like your password to be?');

    // convert it to a number regardless of what the user entered
    let input_length_number = parseInt(input_length_string);

    // check if within min and max length
    console.log("User inputted length:" + input_length_number);
    if (input_length_number >= minimum_length && input_length_number <= maximum_length) {
      console.log("Length is within bounds.")} 
    else {
      console.log("Length is out of bounds.");
      alert("Please enter a number between " + minimum_length + " and " + maximum_length + ".");
      // rerun the function to get the length
      getLength();
    }
    
  }


  function getLowercase() {
    let lowercasePrompt = prompt('Would you like to include lowercase letters? (y/n)');
    // console.log(lowercasePrompt);

    // if answer is not y or n, rerun the function.
    if (lowercasePrompt != 'y' && lowercasePrompt != 'n') {
    alert("Please enter 'y' or 'n'.");
    getLowercase();
  }
    // set variable to true if y
    if (lowercasePrompt === 'y') {
      lowercaseSelected = true
    }

    // console.log("Lowercase:" + lowercaseSelected); 
  }

  function getUppercase() {
    let uppercasePrompt = prompt('Would you like to include uppercase letters? (y/n)');
    // console.log(uppercasePrompt);

    // if answer is not y or n, rerun the function.
    if (uppercasePrompt != 'y' && uppercasePrompt != 'n') {
      alert("Please enter 'y' or 'n'.");
      getUppercase();
    }
    // set variable to true if y
    if (uppercasePrompt === 'y') {
      uppercaseSelected = true
    };
    // console.log("Uppercase:" + uppercaseSelected);
  }  

  function getNumbericType() {
    let numericTypePrompt = prompt('Would you like to include numbers? (y/n)');
    // console.log(numericTypePrompt);

    // if answer is not y or n, rerun the function.
    if (numericTypePrompt != 'y' && numericTypePrompt != 'n') {
      alert("Please enter 'y' or 'n'.");
      getNumbericType();
    }
    // set variable to true if y
    if (numericTypePrompt === 'y') {
      numericTypeSelected = true
    };
    // console.log("Numbers: " + numericTypeSelected);
  }

  function getSpecialType() {
    let specialTypePrompt = prompt('Would you like to include special characters? (y/n)');
    // console.log(specialTypePrompt);

    // if answer is not y or n, rerun the function.
    if (specialTypePrompt != 'y' && specialTypePrompt != 'n') {
      alert("Please enter 'y' or 'n'.");
      getSpecialType();
    }
    // set variable to true if y
    if (specialTypePrompt === 'y') {
      specialTypeSelected = true
    };
    // console.log("Special Characaters:" + specialTypeSelected);
  }

  
  function generateRandomPassword() {

  }
  
  

  
  //trigger functions
  getLength();
  getLowercase();
  getUppercase();
  getNumbericType();
  getSpecialType();
  generateRandomPassword();

}




// Add event listener to generate button, triggers the writePassword function when clicked
generateBtn.addEventListener("click", writePassword);
