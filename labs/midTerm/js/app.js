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
let player; // instance for player class displayed by the space ship
let aliens = []; // an array to store instances in the Alien Class
let bullets = []; // an array to store instance of the Bullet Class
let alienBulletProbability = 0.005; // Probability value representing the
                                    // chance of aliens firing bullets
let score = 0; // integer => players score
let isGameOver = false; // a boolean to track if the game is over or not

// Create the canvas
function setup(){
   createCanvas(1000, 1000);
}
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
        if (keyIsDown(RIGHT_ARROW) && this.x + this.w < width) {
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
      // Horizontal movement and bouncing off the edges
      this.x += this.speed * this.xDir;
        if (this.x + this.r >= width || this.x - this.r <= 0){
            this.xDir *= -1;
        // Move down when hitting the edge
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
    // Game loop: runs continuously and handles the game play
    background(0);
  
    if (!isGameOver){
        // Game play logic when the game is not over depending on the location
        // of the alien
        player.move();
        player.display();
  
    for (let alien of aliens){
        alien.move();
        alien.display();
    }
  
    } 
        else{
      // Game play logic when the game is over
            displayGameOver();
    }
  
    displayScore();
  }
  
  
  // This method is called to handle player movement using the keyIsDown
  // command.
  function move(){
    // Movement control using left and right arrow keys
    if (keyIsDown(LEFT_ARROW) && this.x > 0){
        this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW) && this.x + this.w < width){
        this.x += this.speed;
    }
  }

  // Another method calling the player's ship and the alien method to draw
  // them on the canvas
  function display(){
    // Drawing the player's spaceship
    fill(0, 255, 0);
    // player is a rectangle
    rect(this.x, this.y, this.w, this.h);
  }
  function display(){
    // Drawing the aliens
    fill(255, 0, 0);
    // Aliens are a circle/ellipse
    ellipse(this.x, this.y, this.r * 2);
  }
  
  
  // Player Bullets function. If the game is not over a new bullet is created
  // and added to the array bullets
  function keyPressed(){
    if (key === " "){
        if (!isGameOver){
        // -1 ensures the bullet moves upward toward the alien
            bullets.push(new Bullet(player.x, player.y, -1));
      }
    }
  }

  // Alien Bullets random drops down toward the player
if (random() < alienBulletProbability){
    const randomAlien = random(aliens);
    // bullets.push method creates a new bullet
    // 1 ensures the bullet moves downward toward the player
    bullets.push(new Bullet(randomAlien.x, randomAlien.y, 1));
}

  // When bullets hit by using a Bullet class
class Bullet{
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
  
// Create the function to check if game is over 
function checkGameOver(){
    for (let alien of aliens){
        if (alien.y + alien.r >= player.y){
            isGameOver = true;
            break;
        }
    }
 
    // if the player is hit by a bullet
    for (let bullet of bullets){
        if (bullet.dir === 1 && bullet.hits(player)){
            isGameOver = true;
            break;
        }
    }
  }
  
// If game is over display the following message  
function displayGameOver(){
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2);
  }

// When the game is over display the players score right top  
function displayScore(){
    fill(255);
    textSize(20);
    textAlign(RIGHT, TOP);
    text("Score: " + score, width - 20, 20);
  }
// Respawn aliens using initializeAliens function
  function initializeAliens(){
    const rows = 3;
    const cols = 10;
    const spacingX = 70;
    const spacingY = 50;
  
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++){
            aliens.push(new Alien(j * spacingX + 100, i * spacingY + 50));
        }
    }
  }