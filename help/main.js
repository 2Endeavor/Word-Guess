var clicker = document.getElementById('clicker'); //button
var guessedLetters = document.getElementById('lettersGuessed'); // box of all letters used
var areaToPutStuff = document.getElementById('board'); // word (mid guess possibly?)
var letterClicked = document.getElementById('myGuesser'); // place you put the letter

var words = ['Albany', 'Olympia', 'Sacramento'];
var lettersUsed = [];  // this is only letters that were not in the word?
var selectedWord = '';
var remainingTries = 5;
var totalWins = 0;

function letterCheck() {
  if (!selectedWord.toLowerCase().includes(letterClicked.value.toLowerCase())) {
    remainingTries--;
  }
  lettersUsed.push(letterClicked.value);
  // draw the letter

  var letterWeGuessed = document.createElement('h3');
  var newContent = document.createTextNode(letterClicked.value); 
  letterWeGuessed.appendChild(newContent);
  guessedLetters.appendChild(letterWeGuessed);
  drawBoard();
}

function checkVictory(wordNotComplete) {
  if (!wordNotComplete) {
    alert('you win!');
  } else if (wordNotComplete && remainingTries == 0) {
    alert('you lose');
  } else {
    // continue the game... no logic needed
  }
}

function drawBoard() {
  var lettersRemain = false; // start by assuming they have everything
  areaToPutStuff.innerHTML = '';
  for (let i = 0; i < selectedWord.length; i++) {
    const letter = selectedWord[i];
    var ix = lettersUsed.indexOf(letter);
    if (ix === -1) {
      // draw a dash
      var resultElement = document.createElement('h3');
      var resultValue = document.createTextNode('__'); 
      resultElement.appendChild(resultValue);
      areaToPutStuff.appendChild(resultElement);
      lettersRemain = true;
    } else {
      var resultElement = document.createElement('h3');
      var resultValue = document.createTextNode(letter); 
      resultElement.appendChild(resultValue);
      areaToPutStuff.appendChild(resultElement);
      // draw the letter
    }
  }
  checkVictory(lettersRemain);

  // we probably need to make sure there is css separating the items a bit
}

function startGame() {
  remainingTries = 10;
  selectedWord = words[1];
  drawBoard();
}

// things to do on start
startGame();
clicker.addEventListener('click', letterCheck);