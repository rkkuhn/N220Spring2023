// This program is to create a simple design
// showing off 5 different drawing methods
// from the lectures.
// Author: Kelly Kuhn
// Class: N220
// Date: 6-23-23; 6-28-23

// Global Variables
let xPosition = 0;
let xPosition2 = 0;
let yPosition = 0;

// Creating canvas and background color
function setup(){
    createCanvas(800, 600);
    background(255);
    if (keyIsDown (DOWN_ARROW)){
        fill (0);
    }
        else{
        fill (255);
        }
}
// Creating the beginning of the draw function
// and circle #1
function draw(){
    xPosition ++;

 // Crude method to create variable for the circle.   
    variable1 = 299;
    variable2 = 50;
    variable3 = 40;

    fill (135, 199, 80);
    strokeWeight (10);
    stroke = (255);
    circle(xPosition, variable1, variable2);

// Creating motion with both circle 1 and 2
// Below the circle will fall at and steady
// angle using the x and y coordinates. 
    xPosition2 = xPosition2 + 1;
    yPosition = yPosition + 1;
    fill (199,80,93)
    circle (xPosition2, yPosition, variable3);

 // Fun concept that when the up arrow is
 // pushed the color of the square will change    
    if (keyIsDown (UP_ARROW)){
        fill (0);
    }
        else{
        fill (80, 199, 199);
        }
// Creating a square
    square (xPosition, 450, 100);

 

}
