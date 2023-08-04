// Author: Kelly Kuhn
// Date: 8-4-23

/* Color Changer

Create an application with three grey, square divs, 
in a row. They should be 200px by 200px, and all 
floated left. Give them a margin of 5px.

Using only one event handler, write event listeners 
to respond to a click on each element. Each element 
should change to a different color: one red, one 
green, and one blue. Use a data attribute on the 
elements to store the color to be changed to.

*/

function fun(this){
    var element = document.getElementById(this.id);
    element.style.backgroundColor = element.dataset.color;
}