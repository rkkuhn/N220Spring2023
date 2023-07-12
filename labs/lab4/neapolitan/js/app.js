// Author: Kelly Kuhn
// Date: 7-10-23

/* Program: Create an array with strings for three different colors. 
Looping through that array, draw a rectangle for each of those colors to 
the screen horizontally, like neapolitan ice cream. */

// Create an array of colors
const colors = ['rgb(242, 160, 161)', 'rgb(252, 230, 201)', 'rgb(182, 215, 168)'];

// Create the canvas size
function setup(){
  createCanvas(400, 200);
}

// Start the draw function and set the background color
function draw(){
  background(220);

  // Draw the rectangle
  const rectangleWidth = width / colors.length;
  const rectangleHeight = height;

  // Create a for loop for the rectangle to add the different colors
  // to create the neapolitan ice appearance.
  for (let i = 0; i < colors.length; i++){
    const x = i * rectangleWidth;
    const y = 0;

    fill(colors[i]);
    rect(x, y, rectangleWidth, rectangleHeight);
  }
}