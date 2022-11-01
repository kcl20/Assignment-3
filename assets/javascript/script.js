// Assignment code here
var length_criteria = 0
var minimum_length = 8
var maximum_length = 128
var number_of_character_types_selected = 0
var minimum_character_types = 1

var character_types = []
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
    input_length_string = prompt('How many characters would you like your password to be?');

    // convert it to a number regardless of what the user entered
    input_length_number = parseInt(input_length_string);

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
      character_types.push('lowercase')
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
      character_types.push('uppercase')
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
      character_types.push('numeric')
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
      character_types.push('special')
    };
    // console.log("Special Characaters:" + specialTypeSelected);
  }

  function showConsoleLog () {
  // print the variables to console after all prompts have been answered 
    console.log("Lowercase: " + lowercaseSelected);
    console.log("Uppercase: " + uppercaseSelected);
    console.log("Numbers: " + numericTypeSelected);
    console.log("Special characters: " + specialTypeSelected);
    
  }

  function check_minimum_character_types () {
    if (character_types.length < minimum_character_types) {
      alert("Please select at least one character type.")
      getLowercase();
      getUppercase();
      getNumbericType();
      getSpecialType();
      check_minimum_character_types ();
     }
    }

  function generateRandomPassword() {
// number keycodes from 48 (number 0) to 57 (number 9), 10 numbers
// alphabet keycodes from 65 (A) to 90 (Z) uppercase, 26 letters
// alaphabet keycodes from 97 (a) to 122 (z) lowercase, 26 letters
// special characters keycodes from 33 (!) to 47 (/), 15 chars
// 58 (:) to 64 (@), 7 chars
// 91 ([) to 96 (`), 6 chars 
// 123 ({) to 126 (~), 4 chars

  console.log("Character types selected: " + character_types);
  console.log(character_types.length);

var possible_characters = ""
if (lowercaseSelected) {
  possible_characters += "abcdefghijklmnopqrstuvwxyz"
}
if (uppercaseSelected) {
  possible_characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}
if (numericTypeSelected) {
  possible_characters += "0123456789"
}
if (specialTypeSelected) {
  possible_characters += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
}

console.log("Possible characters: " + possible_characters);
// clear the array afterwards for next time
character_types = [];







for (i=0; i < input_length_number; i++) {
  var random_number = Math.floor(Math.random() * possible_characters.length);
  console.log("Random number: " + random_number);
  password = possible_characters.charAt(random_number);
  console.log("Password: " + password);
}

}
  
  

  
  // trigger functions
  getLength();
  getLowercase();
  getUppercase();
  getNumbericType();
  getSpecialType();
  showConsoleLog();
  check_minimum_character_types ();
  generateRandomPassword();

}




// Add event listener to generate button, triggers the writePassword function when clicked
generateBtn.addEventListener("click", writePassword);
