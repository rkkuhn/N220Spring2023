// Author: Kelly Kuhn
// Date: July 23, 2024

/* Create an application that with an input and a button. 
When the user clicks on the button, update a div on the 
page to tell the user if what the user typed into the 
input is divisible by 7 or not. Use a separate function 
from the onclick function to discern if it is divisible. 
This function should return either true if it is 
divisible  or false if it is not. */



 // Create the function to check if the number entered is
 // divided by seven.       
function checkDivisiblity(){
    // Get the value from HTML that the user entered
    let x = document.getElementById("inputvalue").value;
        // the math statement to see if the number is divided by seven
        if( x%7==0){
            // Print this statement if divided by seven
            document.getElementById("result").innerHTML="The number is divisible by 7";
        // return true and exit out of loop
        return true;

        // If the number is not divided by seven the complete this loop
        }else{
            // Print this statement
            document.getElementById("result").innerHTML="The number is not divisible by 7";
        // End the loop and allow the user to try another number.
        return false;

        }

}
