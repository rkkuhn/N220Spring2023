// Author: Kelly Kuhn
// Class: N220
// Date: 7-6-2023

// Use a loop to recreate this composition with only one line having a 
// drawing command on it (rect/circle/line/etc..). 



function setup() {
    // Canvas size
    createCanvas(400, 400);
    
    // Draw method using noLoop so it executes once.
    noLoop();
  }
  
  function draw() {
    // Using a gray-ish background
    background(220);
    // Width as initial diameter
    var diameter=width;

    // Looping as long as diameter is or above
    while(diameter>=5){
      // Drawing a circle centered, with using diameter 5
      circle(width/2, height/2, diameter);
      //subtracting 5 from diameter.
      diameter-=5;
    }
  }