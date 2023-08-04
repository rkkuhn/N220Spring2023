// Author: Kelly Kuhn
// Date: Aug 4, 2023

/* 
This is an application that will start a div at a 
black color, and as a user presses buttons 
associated with RGB, the div will change to new 
colors. The button presses should affect additively 
- that is. If a div is currently blue, pressing 
+red buttons will change the div to a purple color.

9 buttons (associated with red green and blue). 
There should be a +1, +5, and +10 button for each 
color.

1 div that will change colors to the rgb color 
calculated

1 div that shows the current calculated rgb color

You must use attributes on the buttons for the 
values to change the colors by.
*/


// variables to store rgb value
let red = 0, green = 0, blue = 0;
// writing initial rgb value
document.getElementById("rgbValue").innerHTML = `${red},${green},${blue}`;

// function red1 for red +1 button
function red1(){
    // incrementing red by 1
    red += 1;


// setting style backgroundColor to new rgb value
document.getElementById("colorBox").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
// writing new rgb value
document.getElementById("rgbValue").innerHTML = `${red},${green},${blue}`;
}

// function for red5
// setting style backgroundColor to new rgb value
// writing new rgb value
function red5(){
    //incrementing red by 5
    red += 5;
    document.getElementById("colorBox").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgbValue").innerHTML = `${red},${green},${blue}`;
}

// function for red 10
// setting style backgroundColor to new rgb value
// writing new rgb value
function red10(){
    // incrementing red by 10
    red += 10;
    document.getElementById("colorBox").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgbValue").innerHTML = `${red},${green},${blue}`;
}

// defining functions for green buttons
// setting style backgroundColor to new rgb value
// writing new rgb value
function green1(){
    // incrementing green by 1
    green +=1;
    document.getElementById("colorBox").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgbValue").innerHTML = `${red},${green},${blue}`;
}

// function for green 5
// setting style backgroundColor to new rgb value
// writing new rgb value
function green5(){
    // incrementing green by 5
    green +=5;
    document.getElementById("colorBox").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgbValue").innerHTML = `${red},${green},${blue}`;
}

// function for green 10
// setting style backgroundColor to new rgb value
// writing new rgb value
function green10(){
    // incrementing green by 10
    green +=10;
    document.getElementById("colorBox").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgbValue").innerHTML = `${red},${green},${blue}`;
}

// defining functions for blue buttons
// setting style backgroundColor to new rgb value
// writing new rgb value
function blue1(){
    // incrementing blue by 1
    blue +=1;
    document.getElementById("colorBox").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgbValue").innerHTML = `${red},${green},${blue}`;
}
// defining functions for blue 5
// setting style backgroundColor to new rgb value
// writing new rgb value
function blue5(){
    // incrementing blue by 8
    blue +=5;
    document.getElementById("colorBox").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgbValue").innerHTML = `${red},${green},${blue}`;
}

// defining functions for blue 10
// setting style backgroundColor to new rgb value
// writing new rgb value
function blue10(){
    // incrementing blue by 10
    blue +=10;
    document.getElementById("colorBox").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgbValue").innerHTML = `${red},${green},${blue}`;
}