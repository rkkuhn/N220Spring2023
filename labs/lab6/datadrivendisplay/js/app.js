// Author: Kelly Kuhn
// Date: July 17, 2023; July 18, 2023

/* Make an object with all the properties for a graphic on the screen 
- width, height, color, position. In your create or draw function draw 
that object using the data in your object. */


let graphic;

function setup(){
  createCanvas(400, 400);
  
  // Initialize the graphic object
  graphic ={
    width: 100,
    height: 100,
    color: 'red',
    x: 200,
    y: 200
  };
}

function draw(){
  background(220);
  
  // Draw the graphic using the object's properties
  fill(graphic.color);
  rect(graphic.x, graphic.y, graphic.width, graphic.height);
}

