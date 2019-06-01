


//     
//      
// TODO: filter out non-letters

// TODO: create a victory function
//       if the person has guessed all the letters they win
//
//       if they have exhausted all their chances they lose

//       if they haven't guessed the word and have more chances remaining,
// they continue to guess. 
// TODO: need a play again button that clears resets the variables




// GLOBAL VARIABLES
var guessesRemaining = 10; // tracks the number of guesses remaining
var win = 0; // tracks wins
var wordList =["Olympia", "Nashville","Sacramento"]; //list of words computer selects from
var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] // letters allowed

var keyWord = "";

var W = []; // array of letters for word to be guessed

var NOB = 0;    // This is the length of the random word
var blanksAndSuccesses =[]; // this will hold the blanks and correct guesses
var lettersGuessed = [];
// The following stores the letter selected to a temporary variable
var userTextDiv = document.getElementById('user-text');

//         FUNCTIONS


// START GAME FUNCTION
function startGame(){
  guessesRemaining = 10;
  keyWord = wordList[Math.floor(Math.random() * wordList.length)];
  W = keyWord.split("");
  NOB = keyWord.length;
  lettersGuessed = [];
  blanksAndSuccesses =[];
  for (i=0; i<NOB; i++){
    blanksAndSuccesses.push("_")  
  }
  document.getElementById("dashes").innerHTML=blanksAndSuccesses.join(" ");
  document.getElementById("guesses").innerHTML=lettersGuessed.join(" ");
  document.getElementById("remainingGuesses").innerHTML= guessesRemaining;


console.log(blanksAndSuccesses);

  console.log(keyWord);
}

// CHECK LETTERS FUNCTION
// for loop to loop thru the array to compare keyword with user arrays; use if else statement to compare
// if it is there, add letter to guessesandSuccesses array . if it doesn't exist (else statement) push the letter into the letters guessed array and subtract 1 from guesses remaining

// ROUND COMPLETE
// else if statement to see if the user won or loss 
// start game function will be called from here





//MAIN PROCESS
startGame();
document.onkeyup = function(event){
  userTextDiv.textContent = event.key;
  //console.log(event.key);
  //Now we store the letter to the letterGuessed array. Pushes the variable event.key to the end of the letterGuessed array
  if(userTextDiv)
  lettersGuessed.push(event.key);
  //change the mystery word from a string into an array
   var W = keyWord.split(""); //converts the 
   console.log (W[0]);
  //look at each letter guessed and determine if it is in the W array
   for (i=0;i<W.length;i++){
    if (event.key.indexOf){
      W[i]=-1
      console.log (keyWord, "this is not a letter in the word")
    
    }else{"this letter is in position" + i};
  }
  event.key=" "
  console.log(lettersGuessed);

  

  
};


// TODO: Need a conditional if statement that looks at the letter guessed (var: letterGuessed) and determines if it is part part of the mystery word
// TODO: Make sure the key pressed is a letter. Compare the letter pressed (var: letterGuessed) to the array of possible selections (var: [alpha] if result is a -1 tell user to select a letter)
//console.log(letterGuessed);
//TODO: if letter was previously guessed then the user should be prompted to select something else
//TODO: If the letter part of the word's array:
//      a. display the letter guessed on the screen in the proper position
//      b. run the victory function
//       If the letter is not part of the word's array:
//      a.Place the letter in the letters guessed array
//      b. guessesRemaining--
//      c. run the victory function











