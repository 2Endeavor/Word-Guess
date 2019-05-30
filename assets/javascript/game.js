console.log("I see you :-)");
//Number of wins will be incremented by one with each word guessed
var win = 20;

// capitol is the array 50 capitols that are possible words
var capitol =["Olympia", "Nashville","Sacramento"];
//keyWord is the capitol randomly chosen by the computer from the array capitol
//var keyWord = capitol[2];


// Generating a random selection from the capitol array
var keyWord = capitol[Math.floor(Math.random() * capitol.length)];
//NOB is the number of blanks needed to represent the keyword
var NOB = keyWord.length;

var lettersGuessed = [];

var userText = document.getElementById("user-text");
document.onkeyup = function(event){
  userText.textContent = event.key;
  lettersGuessed.push(userText);
  console.log(event.key);

};










console.log(keyWord, NOB,lettersGuessed);




