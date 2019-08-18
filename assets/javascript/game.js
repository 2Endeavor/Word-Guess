// TODO: fix edge cases. Player should only be able to select alph characters. Players shouldn't lose additional guesses when the enter the same wrong letter more than once 
// TODO: add hints when a letter is guessed. Each state should include the general geographical location, The year it became a state, the states  top products, The states number it joined the union
// TODO: encouraging words when they have three letters remaining "You're so close, you've almost got it!"
// TODO: when the answer is revieled I want to show a picture of the state and capitol. Maybe a photo and maybe with the continental US and a pin to show where the state and capitol is on the map
// TODO: tap into an API that will list fun things to see and do in the state. 
// TODO: list national parks that are in the state
// TODO: add an interesting font

// GLOBAL VARIABLES
var win = 0; // tracks wins
var wordList = ["OLYMPIA", "NASHVILLE", "SACRAMENTO"]; //list of words computer selects from
var activeWordForGame = ""; // this is the word that is randomly selected from the list
var activeWordLength = 0; // This is the length of the random word
var guessesRemaining = 10; // tracks the number of guesses remaining
var mysteryWord = []; // array of letters for word to be guessed
var lettersGuessed = []; // array of letters guessed
var blanksAndSuccesses = []; // this will hold the blanks and correct guesses
var currentGuessDiv = document.getElementById('user-text');// The following stores the letter selected to a temporary variable
var match = false;




// start game function runs and gets the game ready. Once this function runs nothing happens until the player pushes a button, activating function(event)
function startGame(parameter1) {
  console.log('the game is starting line 15');
 
  
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

 
  // for every letter that has been guessed let's show that to the user with a space separating
  document.getElementById("guesses").innerHTML = lettersGuessed.join(" ");
  document.getElementById("remainingGuesses").innerHTML = guessesRemaining;
  
};// end startgame function



function drawBoard() {
  console.log("line 45 here i am at the drawBoard function")
  document.getElementById("dashes").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("guesses").innerHTML = lettersGuessed.join(" ");
  document.getElementById("remainingGuesses").innerHTML = guessesRemaining;
};



// *****check letters function******
//Loop thru the activeWordForGame array and check to see if letter Guessed is a match for any element
function checkLetter(letterGuessed) {
  match = false;
// look at every letter in the word
  console.log("line 56 letterGuessed " + letterGuessed)
  for (i = 0; i < activeWordLength; i++) { 
    console.log("line 58 letterGuessed " + letterGuessed)
    console.log("line 59activewordforgame " + activeWordForGame)
    var currentLetter = activeWordForGame[i].toUpperCase()
    console.log("line 61 currentLetter " + currentLetter)
   
      if(currentLetter === letterGuessed.toUpperCase()){
        blanksAndSuccesses[i] = currentLetter

        console.log("66 current letter line " + currentLetter)
        console.log("67 letterGuessed  line " + letterGuessed)
        console.log("68 the letter matched! ")
        match = true;  
    
    };
  }
  console.log("line 72 done checking the letter")

};






// processRound function looks at the letter selected checks to see if the letter guessed is a match to a letter in the word
function processRound(letterGuessed) {
  console.log("line 83 Here I am")
  checkLetter(letterGuessed); // find out if it's a match
  console.log("line 85 letterGuessed " +letterGuessed)
  drawBoard();
  console.log("line 87 letterGuessed " +letterGuessed)
  
  //Now we store the letter to the letterGuessed array. Pushes the variable event.key to the end of the letterGuessed array
  if (currentGuessDiv) {
    //checkLetter(event.key);
    lettersGuessed.push(event.key.toUpperCase());
  }
  //change the mystery word from a string into an array
  mysteryWord = activeWordForGame.split(""); //converts the 

};

//functions gameStatus() is involked from the event function. It takes in the letter guessed and if it was a match evaluate game 
function gameStatus(letter, word){
  // evaluate if the letter guessed was wrong
  if((mysteryWord.indexOf(letterToEvaluate))===-1){
    //decrement the guessesRemaining by -1
    guessesRemaining --
    //update the board with the number of guesses remaining
    document.getElementById("remainingGuesses").innerHTML = guessesRemaining;
  };
    // TODO: If guessesRemaining = 0 notify the player of the correct word and stop game
    if(guessesRemaining ===0){
      document.getElementById('user-text').innerHTML ="The Capitol is: " + activeWordForGame;
      console.log("you have no guesses remaining")
      console.log("the correct word is" + mysteryWord);

    }

}

// TODO:  if the letter has been correctly guessed
  // TODO: have all the letters been guessed?
      //TODO: if yes, 
          // TODO: increment the number of wins by +1
          //TODO: notifify player and stop the game

      //TODO: if no, allow the player to play again



// When a key is pressed, this function calls processRound and passes the key pressed
document.onkeyup = function (event) {
  console.log("Line 102 Here I am")
  currentGuessDiv.textContent = event.key.toUpperCase();
  processRound(event.key);
  event.key = " "
  letterToEvaluate = event.key.toUpperCase();
  gameStatus(letterToEvaluate, mysteryWord)
  console.log("letterToEvaluate " + letterToEvaluate)
  console.log("line 106 event.key " + event.key)
  console.log("match " + match);
  console.log("mysteryWord " + mysteryWord);
  console.log("letterGuessed " + lettersGuessed)
  console.log(mysteryWord.indexOf(letterToEvaluate))

};


//MAIN PROCESS
startGame(currentGuessDiv);












