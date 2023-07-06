// Author: Kelly Kuhn
// Class: N220
// Date: 7-6-2023

// Use a loop to draws 25 black circles to the screen, oriented 
// horizontally.

// However,

//    When the iterand is divisible by 3, draw a purple circle instead 
//    When the iterand is divisible by 5, draw a green square instead 
//    When the iterand is divisible by 3 AND 5, draw a blue square instead 

function drawBlackCircle(){
    var x = 100
    for (var=0; i<250; i+=50){
        fill(0);
        if(i%3==0){
            fill(150,30,240);
            ellipse(i,x,50,50);
        }
        if(i%3==0 && i%%5==0){
            fill(0,0,255);
                square(i+25, x-25, 50);
        }
    }
}