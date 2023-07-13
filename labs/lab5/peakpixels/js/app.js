// Author: Kelly Kuhn
// Date: July 13, 2023

/* Write the markup and JS to place a square div on the page. 100px by 100px, green background.
Make it so that when the div its clicked, it increases its size by 10% every time.

Hints:

    Make a variable to store the height and with of the object
    to set the height and width, set to varName + "px"
    10% is .1 bigger,or 1.1 * the original size
*/

/* The below two functions I am not sure I need since the default 
background color is white and I am wanting to be able to go beyond
the 400 x 400 which my box does. I think the canvas is below the 
green box. I tested this by changing changing the background color to
black. The green was on top and the black was under the color. I am
leaving it in just out of habit. */


// Function to create canvas size
function setup(){
    createCanvas(400, 400);
  }
  // Starting the draw function
  function draw(){
    background(255, 255, 255);
  }
// Created the function peakPixels
function peakPixels(){

	// Accessing the div using id square which was called out in the 
    // HTML body.
	var x = document.getElementById('square');

	// Creating the width from the div and increasing 10% , adding px 
    // to it. 
	var div_width = x.offsetWidth + (0.1 * x.offsetWidth)+"px";

	// Creating the height from the div and increasing 10% , adding px 
    // to it.
	var div_height = x.offsetHeight + (0.1 * x.offsetHeight)+"px";

	// Setting the width of div to new div_width
	x.style.width = div_width;

	// Setting the height of the div to new div_height
	x.style.height = div_height;
}
