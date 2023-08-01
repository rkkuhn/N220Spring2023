// Author: Kelly Kuhn
// Date: Aug 1, 2023

/* 

For the purposes of this exercise, bad words are: clear, 
water, tires.

Create an application that:

    Takes input from a user using a simple text input field.
    Splits the string on spaces
    Loops through  the array looking for bad words in the array
        Adds 1 to a tally count when a bad word is found
    Outputs to the document
        If any bad words were found (found / not found)
        How many bad words, in total, were found
    Clears out the text field so the user can input a new 
    string

For example, if the user input "clear water is clear", 
there are 3 bad words in the string. */


const badWords = ["clear", "water", "tires"];
      
function checkBadWords(){
  const inputText = document.getElementById("textInput").value;
  const wordsArray = inputText.split(" ");
  let badWordCount = 0;

  for (let i = 0; i < wordsArray.length; i++){
    if (badWords.includes(wordsArray[i])){
      badWordCount++;
      // Replacing the bad word with ***
      wordsArray[i] = "***";
    }
  }

  const outputElement = document.getElementById("output");
  if (badWordCount > 0){
    outputElement.innerHTML = `Bad words found: ${badWordCount}<br>Modified text: ${wordsArray.join(" ")}`;
  } else {
    outputElement.innerHTML = "No bad words found.";
  }

  // Clear the text field
  document.getElementById("textInput").value = ""; // Clear the text field
}