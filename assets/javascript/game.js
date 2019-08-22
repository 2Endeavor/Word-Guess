// TODO: fix edge cases. Player should only be able to select alpha characters. Players shouldn't lose additional guesses when the enter the same wrong letter more than once 
// TODO: add hints when a letter is guessed. Each state should include the general geographical location, The year it became a state, the states  top products, The states number it joined the union
// TODO: encouraging words when they have three letters remaining "You're so close, you've almost got it!"
// TODO: when the answer is revieled I want to show a picture of the state and capitol. Maybe a photo and maybe with the continental US and a pin to show where the state and capitol is on the map
// TODO: tap into an API that will list fun things to see and do in the state. 
// TODO: list national parks that are in the state
// TODO: add an interesting font

// GLOBAL VARIABLES
var win = 0; // tracks wins
var wordList = ["DOVER", "HARRISBURG", "TRENTON", "ATLANTA", "HARTFORD", "BOSTON", "ANNAPOLIS", "COLUMBIA", "CONCORD", "RICHMOND", "ALBANY","RALEIGH", "PROVIDENCE", "MONPELIER", "FRANKFORD", "NASHVILLE", "COLUMBUS", "BATON ROUGE", "INDIANAPOLIS", "JACKSON", "SPRINGFIELD", "MONTGOMERY", "AUGUSTA", "JEFFERSON CITY", "LITTLE ROCK", "LANSING", "TALLAHASSEE", "AUSTIN", "DES MOINES", "MADISON", "SACRAMENTO", "ST PAUL", "SALEM", "TOPEKA", "CHARLESTON", "CARSON CITY", "LINCOLN", "DENVER", "BISMARCK", "PEIRRE", "HELENA", "OLYMPIA", "BOSIE", "CHEYENNE", "SALT LAKE CITY", "OKLAHOMA CITY", "SANTA FE", "PHOENIX", "JUNEAU", "HONOLULU"]; //list of words computer selects from
var activeWordForGame = ""; // this is the word that is randomly selected from the list
var activeWordLength = 0; // This is the length of the random word
var guessesRemaining = 10; // tracks the number of guesses remaining
var mysteryWord = []; // array of letters for word to be guessed
var lettersGuessed = []; // array of letters guessed
var blanksAndSuccesses = []; // this will hold the blanks and correct guesses
var currentGuessDiv = document.getElementById('user-text');// The following stores the letter selected to a temporary variable





// startGame function runs and gets the game ready. Once this function runs nothing happens until the player pushes a button, activating function(event)
function startGame(parameter1) {
  console.log("line 26 startgame ()")

  guessesRemaining = 10; // tracks the number of guesses remaining
 
  
  activeWordForGame = wordList[Math.floor(Math.random() * wordList.length)]; // select a word
  mysteryWord = activeWordForGame.split(""); // split the word into letters and put it into an array
console.log("line 33 activeWordForGame " + activeWordForGame)

  console.log("startgame() mystery word " + mysteryWord)
  
  activeWordLength = activeWordForGame.length;
  lettersGuessed = [];
  blanksAndSuccesses = [];

  // draw the initial board (it's gonna be all dashes)
  for (i = 0; i < activeWordLength; i++) {
    if(mysteryWord[i]===" "){
      blanksAndSuccesses.push("...")
    }
    else{

      blanksAndSuccesses.push("__")
    }
    }
  
  console.log("blanksAndSuccesses " + blanksAndSuccesses)

  // throw all the dashes into a string and then put a space between each dash
  // document.getElementById("dashes").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("dashes").innerHTML = blanksAndSuccesses.join(" ");

 
  // for every letter that has been guessed let's show that to the user with a space separating
  console.log("line 48 lettersGuessed " +lettersGuessed)
  document.getElementById("guesses").innerHTML = lettersGuessed.join(" ");
  document.getElementById("remainingGuesses").innerHTML = guessesRemaining;
  
  document.getElementById("wins").innerHTML = win;

  
};// end startgame function


// drawBoard function is called by processRound(). This updates the information on the screen
function drawBoard() {
  console.log("line 56 drawing the board")

  document.getElementById("dashes").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("guesses").innerHTML = lettersGuessed.join(" ");
  document.getElementById("remainingGuesses").innerHTML = guessesRemaining;
};



// *****check letters function******
//Loop thru the activeWordForGame array and check to see if letter Guessed is a match for any element
function checkLetter(letterGuessed) {
  console.log("Line 68 checkLetter()")
 
// Look at every letter in the word. If the letter has a match to a letter in the word, place the letter at position [i] in the blanksAndSuccesses array. When done return to processRound()

  for (i = 0; i < activeWordLength; i++) { 

    var currentLetter = activeWordForGame[i].toUpperCase()
   
      if(currentLetter === letterGuessed.toUpperCase()){
        blanksAndSuccesses[i] = currentLetter
    
    };
  }
  

};





// processRound function is called from the event listener. 
function processRound(letterGuessed) {
  console.log("line 91 processRound called")
  let charCode = letterGuessed.charCodeAt(0);
  console.log("line 97 charCode of letter guessed " + charCode)
  document.getElementById('player-info').innerHTML =" ";
//Check for edge cases:
// check to make sure the key pressed is an alpha character. If not, direct player to make another selection
  if((charCode<97 || charCode >122) 
  ){
  
    console.log("line 102 not a valid entry")
   
    document.getElementById('player-info').innerHTML ="Not a Valid Entry";
    return;
    

  };
  //Check to make sure the letter has not already been guessed
  console.log("line 122 event.key " + event.key)
  console.log("line 123 lettersGuessed " + lettersGuessed)
  console.log("line 124 letterGuessed " + letterGuessed)
  console.log("line 125 indexof " + (lettersGuessed.indexOf(event.key.toUpperCase())))
  if(lettersGuessed.indexOf(event.key.toUpperCase()) !==-1 ){
    console.log("line 126 lettersGuessed " + lettersGuessed)
    console.log("line 127 letterGuessed " + letterGuessed)
    console.log("this letter has been chosen before");

console.log("line 130 event.key " + event.key)

  }
  else{
    console.log("line 110 entry is valid")
    lettersGuessed.push(event.key.toUpperCase());
 
    // If the selection is valid proceed with evaluating the letter

    //Call function checkLetter to see if the letter selected is in the word. 
    checkLetter(letterGuessed); // find out if it's a match

    // drawBoard();

    
    
    //Now we store the letter to the letterGuessed array. Pushes the variable event.key to the end of the letterGuessed array
    if (currentGuessDiv) {
      console.log("line 120 currentGuessDiv not sure what this is doing")
      //checkLetter(event.key);
      // lettersGuessed.push(event.key.toUpperCase());
      drawBoard();
    }
    //change the mystery word from a string into an array
    mysteryWord = activeWordForGame.split(""); //converts the 
    letterToEvaluate = event.key.toUpperCase();
    gameStatus(letterToEvaluate, mysteryWord)
  }
  
}
  
  

//gameStatus()  is involked from processRound function. It takes in the letter guessed and the mystery word
function gameStatus(letter, word){
  // If letter guessed is wrong, decrement guessesRemaining and update board
  if((mysteryWord.indexOf(letterToEvaluate))===-1){
    guessesRemaining --
    document.getElementById("remainingGuesses").innerHTML = guessesRemaining;
  };

  //If guessesRemaining = 0 notify the player of the correct word 
  if(guessesRemaining ===0){
      document.getElementById('player-info').innerHTML ="The Capitol is: " + activeWordForGame;
      console.log("line 159 win " + win)
      win === 0;
 
      startGame();
  }

  // Check to see if all letters have been guessed
  if (blanksAndSuccesses.indexOf("__")===-1){

    // document.getElementById('correct-answer').innerHTML ="That's Correct. Well Done!"; 
    console.log("line 185 word" + word)
    document.getElementById('correct-answer').innerHTML = activeWordForGame;

      document.getElementById('player-info').innerHTML ="That's Correct!"; 
      // Increment the number of wins by +1
      win ++

      startGame();    
  };

}




// When a key is pressed, this function calls processRound and passes the key pressed
document.onkeyup = function (event) {
console.log("event listener started")
document.getElementById('correct-answer').innerHTML = "";
document.getElementById('player-info').innerHTML =" "; 
  currentGuessDiv.textContent = event.key.toUpperCase();
  // currentGuessDiv.textContent = event.key;

  processRound(event.key);
 
  event.key = " "
  // letterToEvaluate = event.key.toUpperCase();
  // gameStatus(letterToEvaluate, mysteryWord)


};


//MAIN PROCESS
startGame(currentGuessDiv);












