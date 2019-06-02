// GLOBAL VARIABLES
var win = 0; // tracks wins
var wordList = ["Olympia", "Nashville", "Sacramento"]; //list of words computer selects from
var fullAlphabetList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // letters allowed

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
  // things i need to do to start a new game
  guessesRemaining = 10;
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
  checkLetter(activeWordLength, activeWordForGame, currentGuessDiv)
 
  // for every letter that has been guessed let's show that to the user with a space separating
  document.getElementById("guesses").innerHTML = lettersGuessed.join(" ");
  document.getElementById("remainingGuesses").innerHTML = guessesRemaining;
} 

  // *****check letters function******
  // for loop to loop thru the array to compare keyword with user arrays; use if else statement to compare
  // if it is there, add letter to guessesandSuccesses array . if it doesn't exist (else statement) push the letter into the letters guessed array and subtract 1 from guesses remaining
function checkLetter() {
  for (i = 0; i < activeWordLength; i++) {
    LetterinWord= activeWordForGame[i]
    console.log(currentGuessDiv);
    
    
    // if (event.key.indexOf) {
    //   console.log(event.key.indexOf);
      
      // console.log(keyWord, "this is not a letter in the word")

  //   } else { "this letter is in position" + i };
  // }
  } // End checkletter loop
} // end check letter


// *****Round complete function******
// else if statement to see if the user won or loss 
// start game function will be called from here




//MAIN PROCESS
startGame(currentGuessDiv);
document.onkeyup = function (event) {
  currentGuessDiv.textContent = event.key;

 
  //Now we store the letter to the letterGuessed array. Pushes the variable event.key to the end of the letterGuessed array
  if (currentGuessDiv)
    lettersGuessed.push(event.key);
  //change the mystery word from a string into an array
  lettersThatHaveBeenGuessed = activeWordForGame.split(""); //converts the 
  //  console.log (W[0]);
  //look at each letter guessed and determine if it is in the W array




  event.key = " "
  
};