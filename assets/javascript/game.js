


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



console.log("I see you :-)");
// Create a variable called guessesRemaining to track the number of guesses the user has
var guessesRemaining = 10;
//Number of wins will be incremented by one with each word guessed
var win = 0;

// capitol is the array 50 capitols that are possible words
var capitol =["Olympia", "Nashville","Sacramento"];

// create an array of possible letters that can be guessed
var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// keyWord is the word the user is trying to guess. This word is randomly selected from the capitol array.
var keyWord = capitol[Math.floor(Math.random() * capitol.length)];
// var keyWord is currently a string; make it an array

//NOB is the Number Of Blanks needed to represent the keyword
var NOB = keyWord.length;

var lettersGuessed = [];
// The following stores the letter selected to a temporary variable
var userTextDiv = document.getElementById('user-text');
console.log(userTextDiv);
document.onkeyup = function(event){
  userTextDiv.textContent = event.key;
  //Now we store the letter to the letterGuessed array. Pushes the variable event.key to the end of the letterGuessed array
  if(userTextDiv)
  lettersGuessed.push(event.key);
  //change the mystery word from a string into an array
   var W = keyWord.split("");
  //look at each letter guessed and determine if it is in the W array
   for (i=0;i<W.length;i++){
    console.log(W[i], userTextDiv)
  }

  

  console.log(W, keyWord);
  //console.log(event.key);
  console.log(lettersGuessed)
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






console.log(keyWord);




