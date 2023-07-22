
let player;
let aliens = [];
let bullets = [];
let alienSpeed = 1;
let alienBulletSpeed = 5;
let playerBulletSpeed = 5;
let score = 0;
let isGameOver = false;

function setup() {
    createCanvas(900, 900);
    player = new Player();
    createAliens();
}

function draw(){
    background(0);
      
    if (isGameOver){
        displayGameOver();
        return;
    }
      
    player.move();
    player.show();

    for (let i = 0; i < bullets.length; i++){
        bullets[i].move();
        bullets[i].show();
        if (bullets[i].toDelete){
            bullets.splice(i, 1);
        }
      }

    for (let i = aliens.length - 1; i >= 0; i--){
        aliens[i].move();
        aliens[i].show();
        if (aliens[i].y > height){
            isGameOver = true;
        }
        if (aliens[i].isShot(bullets)){
          score++;
          aliens.splice(i, 1);
        }
      }

    if (aliens.length === 0){
        alienSpeed += 0.5;
        createAliens();
      }

    aliensShoot();
    checkCollisions();
    displayScore();
}

function createAliens() {
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 10; j++){
            aliens.push(new Alien(j * 60 + 80, i * 60 + 60));
        }
      }
    }

function keyPressed(){
    if (keyCode === LEFT_ARROW){
        player.setDir(-1);
    } else if (keyCode === RIGHT_ARROW){
        player.setDir(1);
    }
    if (key === ' ') {
        player.shoot();
    }
}

function keyReleased(){
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW){
        player.setDir(0);
    }
}

function aliensShoot() {
    if (random(1) < 0.01){
        let randomAlien = floor(random(aliens.length));
        aliens[randomAlien].shoot();
      }
    }

function checkCollisions() {
    for (let i = bullets.length - 1; i >= 0; i--){
        if (bullets[i].isPlayerBullet){
            for (let j = aliens.length - 1; j >= 0; j--){
                if (aliens[j].hits(bullets[i])){
                    bullets[i].toDelete = true;
                break;
                }
            }
        } else {
          
        if (player.hits(bullets[i])){
            isGameOver = true;
        }
    }
    }
}

function displayScore(){
    textSize(32);
    fill(255);
    text("Score: " + score, 10, 30);
}

function displayGameOver() {
    textSize(64);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2);
}

class Player{
    constructor(){
        this.x = width / 2;
        this.y = height - 20;
        this.dir = 0;
      }

    setDir(dir){
        this.dir = dir;
    }

    move(){
        this.x += this.dir * 5;
        this.x = constrain(this.x, 0, width - 40);
    }

    show(){
        fill(0, 255, 0);
        rect(this.x, this.y, 40, 10);
    }

    shoot(){
        bullets.push(new Bullet(this.x + 18, this.y, true));
    }

    hits(bullet){
        let d = dist(bullet.x, bullet.y, this.x, this.y);
        return d < 20;
    }
}

class Alien{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.isDead = false;
    }

    move(){
        this.x += alienSpeed;
        if (this.x > width - 20 || this.x < 0) {
            alienSpeed *= -1;
            this.y += 30;
            }
        }

    show(){
        fill(255);
        ellipse(this.x, this.y, 20, 20);
    }

    shoot(){
        bullets.push(new Bullet(this.x, this.y, false));
    }

    isShot(bullets){
        for (let bullet of bullets) {
            if (bullet.isPlayerBullet && dist(this.x, this.y, bullet.x, bullet.y) < 10) {
                bullet.toDelete = true;
                return true;
            }
        }
    return false;
    }
}

class Bullet{
    constructor(x, y, isPlayerBullet){
        this.x = x;
        this.y = y;
        this.isPlayerBullet = isPlayerBullet;
        this.toDelete = false;
    }

    move(){
        if (this.isPlayerBullet){
          this.y -= playerBulletSpeed;
        } else {
          this.y += alienBulletSpeed;
        }
    }

    show(){
        fill(255, 0, 0);
        ellipse(this.x, this.y, 6, 6);
    }
}