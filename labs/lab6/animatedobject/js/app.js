// Author: Kelly Kuhn
// Date: 7-16-2023; 7-18-2023

/* Create an object with properties for the x, y, and size of a circle. 
In the draw function, add 1 to one or more of these properties, and then 
draw the circle described by the object to the screen. */

// Blank Variable for circle
let circle;

//Create the setup fuction
function setup(){
  // Canvas Size
  createCanvas(400, 400);
  
  // Properties for circle using x, y, and size
  circle = {
    x: 75,
    y: 75,
    size: 50
  };
}

// Create the draw funtion
function draw(){
  // Set background color
  background(220);
  
  // Update circle properties
  // The x wil have 1 added every time we go through this function
  circle.x += 1;
  // The y will have 1 added every time we go through this function
  // The increase in the x and y creates the diagonal movement 
  circle.y += 1; 
  // Size will increase each time by 0.5
  circle.size += 0.5; 
  
  // Draw the circle
  ellipse(circle.x, circle.y, circle.size, circle.size);
}
 // Run the sketch
 new p5();