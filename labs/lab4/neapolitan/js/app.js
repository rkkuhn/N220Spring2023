// Author: Kelly Kuhn
// Date: 7-10-23

/* Program: Create an array with strings for three different colors. 
Looping through that array, draw a rectangle for each of those colors to 
the screen horizontally, like neapolitan ice cream. */

// Step 3: Declare an array of colors
const colors = ['rgb(242, 160, 161)', 'rgb(252, 230, 201)', 'rgb(182, 215, 168)'];

function setup() {
  // Step 4: Set up the canvas
  createCanvas(400, 200);
}

function draw() {
  background(220);

  // Step 5: Draw the rectangles
  const rectWidth = width / colors.length;
  const rectHeight = height;

  for (let i = 0; i < colors.length; i++) {
    const x = i * rectWidth;
    const y = 0;

    fill(colors[i]);
    rect(x, y, rectWidth, rectHeight);
  }
}