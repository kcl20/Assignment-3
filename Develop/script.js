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


  function getCharacterTypes() {
    
  }


getLength();
getCharacterTypes(); 
}


// Add event listener to generate button, triggers the writePassword function when clicked
generateBtn.addEventListener("click", writePassword);
