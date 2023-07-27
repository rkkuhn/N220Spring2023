// Author: Kelly Kuhn
// Date: July 27, 2023

/* Create an application in P5 that changes a circle to 
one of four different colors in an array when its 
clicked. */




// Global Variables
var light = pickRandom([
  'stop',
  'slow',
  'go',
]);

// Print statement for the light
print(light);
if (light === 'stop'){
  dropbox('red');

}
if (light === 'slow'){
  dropbox('green');
}

if (light === 'go'){
  dropbox('yellow');
}

