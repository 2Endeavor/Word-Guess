// GLOBAL VARIABLES
var win = 0; // tracks wins
var wordList = ["Olympia", "Nashville", "Sacramento"]; //list of words computer selects from


var activeWordForGame = "";
var activeWordLength = 0;    // This is the length of the random word
var guessesRemaining = 10; // tracks the number of guesses remaining

var lettersThatHaveBeenGuessed = []; // array of letters for word to be guessed
var lettersGuessed = [];

var blanksAndSuccesses = []; // this will hold the blanks and correct guesses

// The following stores the letter selected to a temporary variable
var currentGuessDiv = document.getElementById('user-text');

//         FUNCTIONS

// start game function
function startGame(parameter1) {
  console.log('the game is starting');
  // things i need to do to start a new game
  guessesRemaining = 5;
  activeWordForGame = wordList[Math.floor(Math.random() * wordList.length)]; // select a word
  lettersThatHaveBeenGuessed = activeWordForGame.split(""); // split the word into letters and put it into an array
  activeWordLength = activeWordForGame.length;
  lettersGuessed = [];
  blanksAndSuccesses = [];

  // draw the initial board (it's gonna be all dashes)
  for (i = 0; i < activeWordLength; i++) {
    blanksAndSuccesses.push("_")
  }

  // throw all the dashes into a string and then put a space between each dash
  document.getElementById("dashes").innerHTML = blanksAndSuccesses.join(" ");
  // checkLetter(activeWordLength, activeWordForGame, currentGuessDiv) // but there is no letter right now
 
  // for every letter that has been guessed let's show that to the user with a space separating
  document.getElementById("guesses").innerHTML = lettersGuessed.join(" ");
  document.getElementById("remainingGuesses").innerHTML = guessesRemaining;
  // end draw board
} 

function drawBoard() {
  document.getElementById("dashes").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("guesses").innerHTML = lettersGuessed.join(" ");
  document.getElementById("remainingGuesses").innerHTML = guessesRemaining;
}

  // *****check letters function******
  // for loop to loop thru the array to compare keyword with user arrays; use if else statement to compare
  // if it is there, add letter to guessesandSuccesses array . if it doesn't exist (else statement) push the letter into the letters guessed array and subtract 1 from guesses remaining
function checkLetter(letterGuessed) {
  for (i = 0; i < activeWordLength; i++) { // look at every letter in word
 
    var currentLetter = activeWordForGame[i].toUpperCase(); // assign the current letter to a variable
    // is the current letter in the word equal to the letter i guessed
    if(currentLetter === letterGuessed.toUpperCase()){
      console.log(guessesRemaining);
      blanksAndSuccesses[i] = currentLetter;
      } 

  }
}



// *****Round complete function******
// else if statement to see if the user won or loss 
// start game function will be called from here

function processRound(letterGuessed) {
  checkLetter(letterGuessed); // find out if it's a match
  drawBoard();
  // check if the game is over


  //Now we store the letter to the letterGuessed array. Pushes the variable event.key to the end of the letterGuessed array
  if (currentGuessDiv) {
    checkLetter(event.key);
    lettersGuessed.push(event.key.toUpperCase());
  }
  //change the mystery word from a string into an array
  lettersThatHaveBeenGuessed = activeWordForGame.split(""); //converts the 


}



document.onkeyup = function (event) {
  currentGuessDiv.textContent = event.key;
  processRound(event.key);
  event.key = " "
};


//MAIN PROCESS
startGame(currentGuessDiv);