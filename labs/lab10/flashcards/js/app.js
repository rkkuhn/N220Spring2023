// Author: Kelly Kuhn
// Date: Aug. 4, 2023

/*
An application with 3 buttons that ask questions. 
For instance, they might ask "What is the capital 
of Indiana?". Each button should have a data-answer 
attribute that lists the answer.

When a button is clicked, display the answer to the 
button's question in a div. Use only one function, 
and that function must make use of the button's 
data-attribute.
*/

function myFunction(clicked){
    // if statement for correct answer
    if (clicked=="Indianapolis")

    // requesting div answer when correct
    document.getElementById("answer").innerHTML = "It is the correct answer, good job!"+clicked; 

    else

    // requesting div answer when incorrect
    document.getElementById("answer").innerHTML = "You have the incorrect answer. Correct answer is Indianapolis";
    }