// Author: Kelly Kuhn
// Date: July 25th, 2023

/* Create a number guessing name, using an input and a button to gather a 
number. The number to be guessed should be a hard-coded whole number between 
1 and 20.

Tell the user if the number is too high, equal to, or too low than a number 
you have hard-coded in your application. Remove the text in the input when 
the user clicks the button. */



    // Hard-coded number to be guessed between 1 and 20
    const targetNumber = Math.floor(Math.random() * 20) + 1;

    // Create the function checkGuess using document.getElementById
    function checkGuess(){
      const guessInput = document.getElementById("guessInput");
      const userGuess = parseInt(guessInput.value);

      // Setup the if, else if, and else statements from the guesses
      // Please enter a valid number
      // Too high
      // Too low
      // Congratulation! You guessed it.
      if (isNaN(userGuess) || userGuess < 1 || userGuess > 20) {
        document.getElementById("result").textContent = "Please enter a valid number between 1 and 20.";
      } else if (userGuess === targetNumber) {
        document.getElementById("result").textContent = "Congratulations! You guessed the correct number.";
      } else if (userGuess < targetNumber) {
        document.getElementById("result").textContent = "Too low! Try again.";
      } else {
        document.getElementById("result").textContent = "Too high! Try again.";
      }

      // Reset the input field
      guessInput.value = "";
    }
