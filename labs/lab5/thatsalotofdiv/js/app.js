// Author: Kelly Kuhn
// Date: July 17, 2023

/* Write a loop that puts 100 square divs (20px x 20px) on the page, 
each with a different background color. Set their float CSS attribute 
to left. */

// Starting for looping using variable i to loop 100 times.
for(var i=0; i<100; i++){
   
    // Created a "div" element
    var element=document.createElement("div");
    
    // Setting 20px as height and width per the directions above
    element.style.height="20px";
    element.style.width="20px";
    
    // Setting float to left
    element.style.float="left";
    
    //generating three random values between 0 and 255 for random color
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    // Using style to create a background color for the element
    element.style.background="rgb(" + r + "," + g + "," + b + ")";
    
    // Appending element (aka each square) to the body of the page.
    document.body.appendChild(element);
}
