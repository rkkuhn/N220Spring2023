// Author: Kelly Kuhn
// Date: 7-21-23

/*
The problem:

Create a game of space invaders using P5.js.

Requirements:

3+ rows of aliens, moving downwards + back and forth, speeding up over time.
Player ship that moves left and right

Player can shoot bullets every .5 seconds when a key is depressed
If a player bullet hits an alien, play a small animation and remove it from the alien grid. Add one to player score.
Display player score (1 point per alien)

Aliens shoot bullets at the player randomly.
If the player gets hit by a bullet or an alien makes it past the player's Y position, stop the game and show "game over" on the screen.
If all the aliens are killed, respawn the whole grid.
*/

// Global Variables
let player;
let aliens = [];
let bullets = [];
let alienBulletProbability = 0.005;
let score = 0;
let isGameOver = false;

// Create the canvas
function setup(){
   createCanvas(1000, 1000);
}

// Class Player
class Player{
    constructor(){
      this.x = width / 2;
      this.y = height - 50;
      this.w = 50;
      this.h = 20;
      this.speed = 5;
    }
  
    move(){
      // Movement control using left and right arrow keys
      if (keyIsDown(LEFT_ARROW) && this.x > 0){
        this.x -= this.speed;
      }
      if (keyIsDown(RIGHT_ARROW) && this.x + this.w < width){
        this.x += this.speed;
      }
    }
  
    display(){
      // Drawing the player's spaceship
      fill(0, 255, 0);
      rect(this.x, this.y, this.w, this.h);
    }
  }

  // Class Alien
  class Alien{
    constructor(x, y){
      this.x = x;
      this.y = y;
      this.r = 20;
      this.xDir = 1;
      this.speed = 1;
    }
  
    move(){
      // Create the movement of the alien and bouncing off the left and right
      // edges.
      this.x += this.speed * this.xDir;
      if (this.x + this.r >= width || this.x - this.r <= 0){
        this.xDir *= -1;
        // Move the alien ship down when hitting one of the edges
        this.y += 20;
      }
    }
  
    display(){
      // Drawing the aliens
      fill(255, 0, 0);
      ellipse(this.x, this.y, this.r * 2);
    }
  }



  function draw(){
    // Game loop: runs continuously
  
    background(0);

  
    if (!isGameOver){
      // Gameplay logic when the game is not over
  
      player.move();
      player.display();
  
      for (let alien of aliens){
        alien.move();
        alien.display();
      }
  
    } else{
      // Gameplay logic when the game is over
      displayGameOver();
    }
  
    // This is a call out for the score for each time an alien is hit
    displayScore();
  }

  function checkGameOver(){
    for (let alien of aliens){
      if (alien.y + alien.r >= player.y){
        isGameOver = true;
        break;
      }
    }
  
    for (let bullet of bullets){
      if (bullet.dir === 1 && bullet.hits(player)){
        isGameOver = true;
        break;
      }
    }
  }

  function displayGameOver(){
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2);
  }
  
  function displayScore(){
    fill(255);
    textSize(24);
    textAlign(RIGHT, TOP);
    text("Score: " + score, width - 20, 20);
  }
  function initializeAliens(){
    const rows = 3;
    const cols = 10;
    const spacingX = 70;
    const spacingY = 50;
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        aliens.push(new Alien(j * spacingX + 100, i * spacingY + 50));
      }
    }
  }

  function move(){
    // Movement control using left and right arrow keys
    if (keyIsDown(LEFT_ARROW) && this.x > 0){
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW) && this.x + this.w < width){
      this.x += this.speed;
    }
  }

  // Display
  function display(){
    // Drawing the player's spaceship
    fill(0, 255, 0);
    rect(this.x, this.y, this.w, this.h);
  }
  function display(){
    // Drawing the aliens
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.r * 2);
  }
  
  // Player Bullets
  function keyPressed(){
    if (key === " "){
      if (!isGameOver){
        bullets.push(new Bullet(player.x, player.y, -1));
      }
    }
  }

  // Alien Bullets random drops
  if (random() < alienBulletProbability){
    const randomAlien = random(aliens);
    bullets.push(new Bullet(randomAlien.x, randomAlien.y, 1));
  }

  // When bullets hit by using a class
  class Bullet{
    // constructor and move function
  
    display(){
      // Drawing the bullets
      fill(255);
      ellipse(this.x, this.y, 5);
    }
  
    hits(target){
      // Check if the bullet has hit the target (player or alien)
      const d = dist(this.x, this.y, target.x, target.y);
      return d < target.r;
    }
  }
