# Word-Guess
Every word in this hangman game is a state capitol. 
This was a very challenging assignment for me! I ignored the html and focused on the js file. When I finally ran out of time, I had an ugly user screen with code that was 80% complete.


What currently works:
1.	JS randomly selects a word from the array of capitol names
2.	JS creates a display of dashes that convey to the player the number of letters in the word
3.	JS listens for keyup event and takes the letter selected by the user and puts it into an array of lettersGuessed.
4.	JS compares the letter submitted by the user with the word selected by the program
5.	When a letter is correctly selected, the program replaces a blank with the letter
6.	Letters selected that have no match to the word selected by the program, will be placed at the bottom of the screen


Things That Need to Be Done:

JS file:
1.	The wordList array needs to contain all 50 capitols
2.	Decrement guessesRemaining by 1 when a wrong letter is guessed and display the information for the user
3.	Signal a player when the game has been won
4.	Signal a player when the game has been loss
5.	Only allow letters to be entered

HTML file:
1.	Fix bug: letter guessed is showing up in lower case on the left side of the screen.

3.	Doesn’t appear that bootstrap is working
4.	Make the screen visually appealing to the user with all the information displaying

I’m very frustrated because I know what I want to do but can’t figure out how to do it. At this point I feel like I haven’t got a firm handle on anything.
I realized with this project that I’m not comfortable with functions. Specifically, when/where to call them and how to work with their inputs and outputs.
I also realized with this project the importance of pseudo-coding and using it to break large tasks into smaller elements

