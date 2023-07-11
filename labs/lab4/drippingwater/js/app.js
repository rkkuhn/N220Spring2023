// Kelly Kuhn
// July 11, 2023

/* Build an application that, every ten frames, draws a circle at the 
top center of the screen. This circle should move down the screen at 
5 pixels / frame. Done properly, there will be multiple circles on the 
screen at once. Thus, you will need to use an array to store, at a 
minimum, the Y location of each circle. */


// Setting global variable
let circles = [];

// Function to create canvas siz
function setup() {
  createCanvas(400, 400);
}

// Staring draw function and creating a whit background
function draw() {
  background(220);
  
  // If statement checking if it's time to create a new circle
  if (frameCount % 10 === 0) {
    let newCircle = {
      x : width / 2,
      y : 0
    }
    circles.push(newCircle);
  }
  
  // For statement to update and display all circles
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    
    // Command to move the circle down by 5
    circle.y += 5;
    
    // Display the circle
    fill(0);
    ellipse(circle.x, circle.y, 20);
  }
}

