

// Define an array to store the last ten positions of the mouse
let positions = [];

function setup() {
  createCanvas(400, 400);
}

function draw(){ 
  background(220);
  
  // Store the current mouse position in the array
  positions.push(createVector(mouseX, mouseY));
  
  // Limit the array size to the last ten positions
  if (positions.length > 10) {
    positions.shift();
  }
  
  // Draw circles at the stored mouse positions
  for (let i = 0; i < positions.length; i++) {
    let pos = positions[i];
    let diameter = map(i, 0, positions.length - 1, 50, 10); // Vary the circle size based on position index
    ellipse(pos.x, pos.y, diameter, diameter);
  }
}
//<script>
    let positions = [];

    function setup() {
      createCanvas(400, 400);
    }

    function draw() {
      background(220);

      // Store the current mouse position in the array
      positions.push(createVector(mouseX, mouseY));

      // Limit the array size to the last ten positions
      if (positions.length > 10) {
        positions.shift();
      }

      // Draw circles at the stored mouse positions
      for (let i = 0; i < positions.length; i++) {
        let pos = positions[i];
        let diameter = map(i, 0, positions.length - 1, 50, 10); // Vary the circle size based on position index
        ellipse(pos.x, pos.y, diameter, diameter);
      }
    }
//  </script>
