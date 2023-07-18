// Author: Kelly Kuhn
// Date: July 17, 2023; July 18, 2023

/* Take your ball bounce assignment and recode it using an object to store 
the ball's size, color, and velocity. No global variables or hardcoded 
values should be used in your update function. */


let ball;

function setup(){
  createCanvas(400, 400);
  
  // Create the ball object
  ball = {
    x: width / 2,
    y: height / 2,
    size: 50,
    color: color(255, 0, 0),
    velocityX: random(-5, 5),
    velocityY: random(-5, 5),
  };
}

function draw(){
  background(220);
  
  // Update and display ball
  updateBall(ball);
  displayBall(ball);
}

function updateBall(ball){
  // Update ball's position based on velocity
  ball.x += ball.velocityX;
  ball.y += ball.velocityY;
  
  // See if the ball hits the canvas edges this is so the ball will
  // bounce away from the edges
  if (ball.x + ball.size / 2 >= width || ball.x - ball.size / 2 <= 0){
    ball.velocityX *= -1;
  }
  if (ball.y + ball.size / 2 >= height || ball.y - ball.size / 2 <= 0){
    ball.velocityY *= -1;
  }
}

function displayBall(ball){
  // Display the ball
  fill(ball.color);
  ellipse(ball.x, ball.y, ball.size);
}