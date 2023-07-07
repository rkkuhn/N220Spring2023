// Author: Kelly Kuhn
// Class: N220
// Date: 7-6-2023

// Use a loop to draws 25 black circles to the screen, oriented 
// horizontally.

// However,

//    When the iterand is divisible by 3, draw a purple circle instead 
//    When the iterand is divisible by 5, draw a green square instead 
//    When the iterand is divisible by 3 AND 5, draw a blue square instead 


// Creating the starting function to create the circles
function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    // Background color is a light blue
    background(135,206,250);
    var y = 100;
    
    // 25 black squares
    for (let i = 0; i < 25; ++ i) {
        let x = i*50; // x variable is i * 50
        // Researched the === to get my code to run - I found it on StackOverflow
        // Edited Jan 30, 2020 at 22:18
        // Rabbid76's user avatar
        // Rabbid76
        // 201k2626 gold badges131131 silver badges172
        // this checks whether its two operands are Equal and returns 
        // a Boolean result


        if (i % 5 === 0) {
            // Sets the green squares should be on top
            fill(0, 255, 0);
            square(x, y, 50);
        }
        else if (i % 3 === 0) {
            // Sets the purple circle
            fill(153, 31, 240);
            ellipse(x+25, y+25, 50, 50);
        }
        else if (i % 3 == 0 && i % 5 == 0) {
            // Sets the last blue square
            fill(0, 0, 255);
            square(x, y, 50);
        }   
        else {
            // Black circle
            fill(0);
            ellipse(x+25, y+25, 50, 50);
        }
    }
}