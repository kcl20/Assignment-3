// Assignment code here
var length_criteria = 0
var minimum_length = 8
var maximum_length = 128
var number_of_character_types_selected = 0
var minimum_character_types = 1
var character_types = ["lowercase", "uppercase", "numeric", "special"]
var character_type_selected = [false, false, false, false]

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

}






// Add event listener to generate button, triggers the writePassword function when clicked
generateBtn.addEventListener("click", writePassword);
