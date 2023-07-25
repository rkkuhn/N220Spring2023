// Author: Kelly Kuhn
// Date: July 25, 2023

/* Create an page with an input, and a button. When the button is clicked, 
output the phrase "Hello {Name} to the "developer console," with {Name} 
being the value the user put into the input field. */


// Create a function that will get the input from user and display in
// the developer console per the directions.



function sayHello(){
    // Get the input value
    const name = document.getElementById("nameInput").value;
    // Output the phrase to the developer console
    console.log("Hello " + name);
}

