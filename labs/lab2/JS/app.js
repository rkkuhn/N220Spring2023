// Author: Kelly Kuhn
// Class: N220
// Date: 7-5-2023


// Create an application that outputs to the console every
// draw call to P5. This number should start a zero and
// increase bye one every frame.

// Global variable
let i = 0;

// Creating the size of the canvas
function setup() {
  createCanvas(400, 400);

}

function draw() {
// This is the function that starts at zero and continues to
// count in an infinite loop. 
    console.log(i++)
}


// Create an application that draws a circle where the mouse 
//is at. (Use  the P5 variables mouseX and mouseY for this). 
//When the mouse is on the right half of the canvas, draw the 
//circle in red. When the mouse is on the left side of the 
//canvas, draw the circle in blue.

// Creating the size of the canvas and background color yellow
function setup() {
    createCanvas(400, 300);
    }
    
    var diameter = 10; // size of the circle

// Function draw created  
    function draw() {
    background(255, 255, 0); //background color is red
    
    // If statement showing mouseX>200 (1/2 of the screen)
    // then the color is blue, ELSE the color on the other
    // side of the screen is red.
    if(mouseX>200){
        fill(255, 0, 0);
        circle(mouseX,mouseY,diameter);
    }
    else{
    fill(0, 0, 255);
        circle(mouseX,mouseY,diameter);
    }
}


// Create a canvas 800px x 600 px.

// Make an application that starts drawing a ball on the left 
// hand of the screen - make it move to the right 5 pixels 
// per frame.

// Write the code so that when the circle reaches 800 pixels 
// to the right, move the circle to the far left of the screen.


// Global Variables
var circleX; //x variable position of the circle is null
var radius = 25; //radius of the circle

function setup() {
  //creating a 800x600 canvas
  createCanvas(800,600);
  //assigning 0 as x coordinate for the circle
  circleX=0;
  // Using red as fill lime greenish
  fill(124,252,0);
}


function draw() {
  // Using a light blueish background
  background(176,230,250);

  // Drawing a circle at x=circleX, y=height/2 (middle) and 
  // with diameter=radius*2
  circle(circleX, height/2, radius*2);
  
  //adding 5 to the x value of circle and if it reaches width (800), wrapping
  //around from 0. so that circle will appear on far left when it reaches far right
  circleX=(circleX+5)%width;
}