// Create an application that draws a circle where the mouse 
//is at. (Use  the P5 variables mouseX and mouseY for this). 
//When the mouse is on the right half of the canvas, draw the 
//circle in red. When the mouse is on the left side of the 
//canvas, draw the circle in blue.

// Creating the size of the canvas and background color yellow
function setup() {
    createCanvas(400, 300);
    }
    
    var diameter = 10; // size of the circle

// Function draw created  
    function draw() {
    background(255, 255, 0); //background color is red
    
    // If statement showing mouseX>200 (1/2 of the screen)
    // then the color is blue, ELSE the color on the other
    // side of the screen is red.
    if(mouseX>200){
        fill(255, 0, 0);
        circle(mouseX,mouseY,diameter);
    }
    else{
    fill(0, 0, 255);
        circle(mouseX,mouseY,diameter);
    }
}