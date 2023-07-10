// Author: Kelly Kuhn
// Date: 7-10-23

/* Program: Create an array with strings for three different colors. 
Looping through that array, draw a rectangle for each of those colors to 
the screen horizontally, like neapolitan ice cream. */

function setup(){
createCanvas(400, 300);
}

function draw(){
    background (81, 66, 245);
    line(0, 50, 400, 300);

    rectMode(CENTER);

    rect(200, 150, 150, 150);

}
