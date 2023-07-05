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