<script>
    // Array to store bricks
    let bricks = [];

    function setup() {
      createCanvas(400, 400);
    }

    function draw() {
      background(220);

      // Draw all the bricks
      for (let i = 0; i < bricks.length; i++) {
        bricks[i].update();
        bricks[i].show();
      }
    }

    function mouseClicked() {
      // Create a new brick at the mouse position
      let brick = new Brick(mouseX, mouseY);
      bricks.push(brick);
    }

    // Brick class
    class Brick {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 5;
      }

      // Update the brick's position
      update() {
        this.y += this.speed;
      }

      // Display the brick
      show() {
        fill(255, 0, 0);
        rect(this.x, this.y, 50, 25);
      }
    }
    
    // Create a P5.js sketch
    new p5();
  </script>

