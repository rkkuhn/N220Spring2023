// Author: Kelly Kuhn
// Class: N220
// Date: 7-6-2023

// Use a loop to recreate this composition with only one line having a 
// drawing command on it (rect/circle/line/etc..). 



function setup() {
    // Canvas size
    createCanvas(400, 300);

    // Background color is gray-ish
    background (211,211,211);
    
  }

  function draw() {
    // Using a gray-ish background
    background (211,211,211);

    // Using noFill in order to see between the lines other wise it is
    // one big white circle
    noFill();

    // Starting the for loop variable at 0, i is looping less than 15x, and
    // add 1 to each time to i in the loop.
    for (var i=0; i<15; i++){

      // Creating circle size - i*10 creates the next circle out starting
      // at the center.
      circle (200, 150, i*10)
    }
  }  