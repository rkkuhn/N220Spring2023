// Author: Kelly Kuhn
// Date: July 27, 2023

/* Create an application with a moving circle and a 
rectangle at the bottom of the screen. Using a 
rectangular hit test, have the ball bounce when the 
circle collides with the rectangle.

 For your collision code:

function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {
     var colliding = false;
     if(circleX > rectX && circleX < rectX + rectW) {
         if(circleY > rectY && circleY < rectY + rectH) {
               return true;
         }
    }
    return false;
} */


// Global Variables
let circle_x; //circles x position
let circle_y; //circles y position
let circle_xspeed = -2; //circles speed in x direction
let circle_yspeed = 2; //circles speed in y direction
let circle_radius = 30;

let rect_width = 400;//width of rectangle
let rect_height = 50;  //height of rectangle

let rect_x = -400;  //rectangles x position
let rect_y = 600;  //rectangles y position
let rect_xspeed = 2; //rectangles speed in x direction

function setup(){ 
  createCanvas(800, 700);
  circle_x = width - 2*circle_radius;  //width is the screen width which is a builtin keyword
  circle_y = 2*circle_radius;
} 
// Create the draw function
function draw(){ 
  // background color white  
  background(255);
  
  //make an ellipse with major axis = minor axis , aka a circle
  ellipse(circle_x, circle_y, 2*circle_radius, 2*circle_radius); 
  
  //setting new position for circle
  circle_x += circle_xspeed; 
  circle_y += circle_yspeed; 
  
   // make the rectangle
  rect(rect_x,rect_y, rect_width, rect_height);
  
    if(rect_x > width){   //if rectangle moves out of canvas, set its position again to start
        rect_x = -rect_width;
    }
  
    //setting new position for rectangle
    rect_x += rect_xspeed;
  
  //checking for collision, if yes then bounce back the circle
    if(collideRect( circle_x, circle_y, rect_x, rect_y, rect_width, rect_height)) circle_yspeed = -circle_yspeed;
}

// Create the function for the circle colliding with the rectangle
function collideRect(circleX, circleY, rectX, rectY, rectW, rectH){
    // Start the loop
    var colliding = false;
        if(circleX + circle_radius > rectX && circleX + circle_radius  < rectX + rectW){
            if(circleY + circle_radius  > rectY && circleY + circle_radius  < rectY + rectH){
        return true;
            }           
        }
    return false;

}