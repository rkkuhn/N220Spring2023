// Author: Kelly Kuhn
// Class: N220
// Date: 7-6-2023

// Use a loop to draws 25 black circles to the screen, oriented 
// horizontally.

// However,

//    When the iterand is divisible by 3, draw a purple circle instead 
//    When the iterand is divisible by 5, draw a green square instead 
//    When the iterand is divisible by 3 AND 5, draw a blue square instead 


// Creating the starting function to create the circles
function drawCircle(){
    var x = 100 // Function variable

    // For loop
    for (var=0; i<250; i+=50){
        fill(0); // Creating the fill w/ parameter 0

        // Iterand divisible by 3
        if(i%3==0){
            fill(150,30,240); // Color fill purple (rgb)
            ellipse(i,x,50,50); // Using circle/aka elipse
        }

        // Iterand divisible by 5
        if (i%5==0){
            fill(0, 255, 0); // Set color green (rgb)
            square(i+25, x-25, 50); // Using an square

        }
        // Iterand divisible by 3 and 5
        if(i%3==0 && i%%5==0){
            fill(0,0,255); // Set color blue
                square(i+25, x-25, 50); // Using an square
        }
    }
}