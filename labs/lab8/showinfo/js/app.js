// Author: Kelly Kuhn
// Date: July 27, 2023

/*   Create an application with an array of strings, at 
     least three. Create three buttons that are 
     associated with those strings. (For instance, 
     you might have 'home', 'about', and 'art'), and a 
     div to display those strings. Using a single 
     function, make it so that when a button is clicked, 
     the div displays the string associated with it in 
     that array. ("home" button shows index 0, "about" 
     shows index 1, so on..). */


// Array of strings
let contentArray = ['Home content goes here.', 'About content goes here.', 'Art content goes here.'];

function setup() {
  // P5.js setup function (no need to implement anything here for this application)
}

function showContent(index) {
  // Get the div element
  let contentDiv = document.getElementById('contentDiv');

  // Check if the index is valid
  if (index >= 0 && index < contentArray.length) {
    // Set the div content to the corresponding string from the array
    contentDiv.textContent = contentArray[index];
  } else {
    // Display an error message if the index is out of bounds
    contentDiv.textContent = 'Invalid index!';
  }
}