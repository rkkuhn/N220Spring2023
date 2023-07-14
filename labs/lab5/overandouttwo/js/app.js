// Author: Kelly Kuhn
// Date: July 14, 2023


// The code below has us obtain the myDiv and when the mouse
// is inside the square the color changes to black
var div = document.getElementById("myDiv");
  div.onmouseover = function() {
  div.style.backgroundColor = "black";
  };
  // when the mouse is outside the square the color is blue
  div.onmouseout = function() {
  div.style.backgroundColor = "blue";
  };
