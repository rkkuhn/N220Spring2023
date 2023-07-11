// Kelly Kuhn
// July 11, 2023

/* Build an application where, when a user clicks on the screen, a 
'brick' is created at that x and y location, and falls down to the 
bottom of the screen at a speed of 5 pixels / frame. There can be 
multiple bricks in this application, so you will need to use two arrays 
and a loop to draw all of the bricks. */


// Creating blank array for brick
let bricks = [];

// Function to create canvas siz
function setup(){
  createCanvas(400, 400);
}
// Starting the draw function
function draw(){
  background(0);

  // For Loop to create the bricks
  for (let i = 0; i < bricks.length; i++){
    bricks[i].update();
    bricks[i].show();
  }  
}
// Function that creates a new brick at the mouse coordinates
function mouseClicked(){
  let brick = new Brick(mouseX, mouseY);
    bricks.push(brick);
  }

// Brick class
  class Brick{
    constructor(x, y){
      this.x = x;
      this.y = y;
      this.speed = 5;
    }

    // This section updates the brick location and speed
    update(){
      this.y += this.speed;
    }

    // Display the brick
    show(){
      fill(255, 0, 0);
      rect(this.x, this.y, 50, 25);
    }
  }
    
    // I had to research to figure out how to make sure it was clear
    // once the brick reached the end. This code seemed to do the
    // trick.
  new p5();

