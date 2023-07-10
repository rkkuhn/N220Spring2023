

let circles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Check if it's time to create a new circle
  if (frameCount % 10 === 0) {
    let newCircle = {
      x: width / 2,
      y: 0
    };
    circles.push(newCircle);
  }
  
  // Update and display all circles
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    
    // Move the circle down
    circle.y += 5;
    
    // Display the circle
    fill(0);
    ellipse(circle.x, circle.y, 20);
  }
}