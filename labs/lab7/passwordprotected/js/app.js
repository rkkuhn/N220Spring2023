// Author: Kelly Kuhn
// Date: July 25th, 2023

/* Create an application with two input fields and one button.

When the button is clicked, verify the user has written these (exact) 
strings in the first and second field:

    First field should be  "Username"
    Second field should be  "Password"

If the two fields match, update a DIV on the page with the text "Success" 
or else "Wrong information".

For this assignment: use only one if statement to to the check.

Remember you'll need to use the double-equals (==) to check for equality, 
and the double-ampersand to check if two things are true.

if((oneThingIsTrue) && (anotherThingIsTrue)){ */


// constant values entered from the HTML side and moved to JS.
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const button = document.getElementById("button");
const successDiv = document.getElementById("success");

function checkLogin(){
    // Get the values entered in the input fields for user name and password
    var usernameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;

    // Check if the entered values match the expected strings
    // If equality is present then the first if statement is run
    if (usernameInput == "Username" && passwordInput == "Password"){
        document.getElementById('result').innerText = "Success = Entry Granted";
    // If equality is not met then the else statement is run
    } else {
        document.getElementById('result').innerText = "Wrong User Name or Password = Entry Denied!!! The FBI are on their way, hacker!!!";
    }
}