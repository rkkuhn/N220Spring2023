let locs = [ 10, 20, 40, 10 ];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(10,10,10, 10);

      if(frameCount % 60 == 0) {
fill(255,0,0);
circle(0, locs[0], 30)
      }

      if(frameCount % 20 == 0) {
        fill(255,0,0);
        circle(40, locs[1], 30)
      }

      if(frameCount % 40 == 0) {
        fill(255,0,0);
        circle(80, locs[2], 30)
      }

      if(frameCount % 80 == 0) {
        fill(255,0,0);
        circle(120, locs[3], 30)
      }
}