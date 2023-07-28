// Author: Kelly Kuhn
// Date: July 27, 2023

/* Using an array for the three colors, draw a stoplight 
    using a for loop and only one circle() call in your 
    code. */


// Define the colors for the stoplight
// Global Variables
let colors = ["red", "yellow", "green"];

// Setup function to create the canvas size
function setup(){
  // Set the canvas size to fit the stoplight
  createCanvas(700, 700);
}

// Start the draw function
function draw(){
  // Background color is gray-ish
  background(220);
  // Create the size of each circle
  let circleSize = 80;
  // Vertical spacing between circles
  let spacing = 175;

  // Start the for loop to draw the circles for each color using < 3 for the
  // three colors - red yellow and green
  for (let i = 0; i < 3; i++) {
    // Draw the circles at different vertical positions 
    // with different colors
    fill(colors[i]);
    circle(width / 2, spacing * (i + 1), circleSize);
  }
}