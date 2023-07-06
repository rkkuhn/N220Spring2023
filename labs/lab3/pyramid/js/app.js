// Author: Kelly Kuhn
// Class: N220
// Date: 7-6-2023

// Using nested loops (one within the other) recreate this composition 
// with only one line having a drawing command on it 
// (rect/circle/line/etc..). 


function setup() {
  //Canvas size is 400x400
  createCanvas(400, 400);
}

function draw() {
  // white background
  background(255);
  // White as stroke color
  stroke(255);
  // Red as fill color
  fill(255,0,0);
  // Using 40 as size of one rectangle
  var grid_size=40;
  //looping from 0 to 3 for 4 times
  for(var i=0;i<4;i++){
    //looping from 0 to i (i+1 times)
    for(var j=0;j<=i;j++){
      //drawing a rectangle with (j*grid_size, i*grid_size) as top left 
      //coordinate and grid_size as length and width
      rect(j*grid_size, i*grid_size, grid_size, grid_size);
    }
  }
}

