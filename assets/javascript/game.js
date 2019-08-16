// GLOBAL VARIABLES
var win = 0; // tracks wins
var wordList = ["Olympia", "Nashville", "Sacramento"]; //list of words computer selects from
var activeWordForGame = ""; // this is the word that is randomly selected from the list
var activeWordLength = 0; // This is the length of the random word
var guessesRemaining = 10; // tracks the number of guesses remaining
var mysteryWord = []; // array of letters for word to be guessed
var lettersGuessed = []; // array of letters guessed
var blanksAndSuccesses = []; // this will hold the blanks and correct guesses
var currentGuessDiv = document.getElementById('user-text');// The following stores the letter selected to a temporary variable



// start game function
function startGame(parameter1) {
  console.log('the game is starting');
 
  
  activeWordForGame = wordList[Math.floor(Math.random() * wordList.length)]; // select a word
  mysteryWord = activeWordForGame.split(""); // split the word into letters and put it into an array
  
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
//Loop thru the activeWordForGame array and check to see if letter Guessed is a match for any element
function checkLetter(letterGuessed) {
  
  var match = 0
  if (guessesRemaining===0){
    break;
  }
for (i = 0; i < activeWordLength; i++) { // look at every letter in the word
  var currentLetter = activeWordForGame[i].toUpperCase();
  if(currentLetter === letterGuessed.toUpperCase()){
    blanksAndSuccesses[i] = currentLetter;
    match ++
    
    } 
  }
  if (match===0){
    console.log ("no match")
    guessesRemaining --
    



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
  mysteryWord = activeWordForGame.split(""); //converts the 


}

document.onkeyup = function (event) {
  currentGuessDiv.textContent = event.key;
  processRound(event.key);
  event.key = " "
};


//MAIN PROCESS
startGame(currentGuessDiv);











