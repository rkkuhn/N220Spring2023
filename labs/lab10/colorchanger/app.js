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


const squares = document.querySelectorAll('.square');

//   Create a color-changing function.
  function changeColor(event) {

    // Get the "data-color" attribute's colour value.
    const color = event.target.getAttribute('data-color');

   // Modify the clicked element's background colour
    event.target.style.backgroundColor = color;
  }

  squares.forEach(sq => {
    sq.addEventListener('click', changeColor);
  });