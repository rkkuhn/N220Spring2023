// Author: Kelly Kuhn
// Date: August 1, 2023

/* Bad word catcher with array methods
Recreate the above exercise, but using the array.filter 
and array.includes methods. */


function badWordCatch(){

    var wordInput = document.getElementById("wordInput").value;
    wordInput = wordInput.toLowerCase();
  
    // split the words by spaces (" ")
    var arr = wordInput.split(" ");
    // bad words to look for, keep this array in lowercase
    var badWords = ["clear", "water", "tires"];
    
    // .toLowerCase will do the case match!
    var foundBadWords = arr.filter(el => badWords.includes(el));
    
    document.getElementById("wordsFound").innerHTML = foundBadWords.join(", ");
    document.getElementById("wordAmount").innerHTML = foundBadWords.length;
    
    
  }
   