// Author: Kelly Kuhn
// Date: July 17, 2023; July 18, 2023
/* Instructions: Create an application  with an object that represent a 
virtual pet - similar to a Tamagotchi. Give this pet properties for name, 
energy, happiness, and age. Include two buttons (and functions) for 
feeding and playing with the pet - increasing the pet's energy by 5 when 
fed, and increasing its happiness by 5 when played with. Display these 
stats on the document: Name, happiness, and energy. They must update every 
time you change the properties.

Consider using a function to update the document so you are not 
repeating yourself across two functions. */


let pet = {
    name: "Charlie the Yellow Lab",
    energy: 50,
    happiness: 50,
    age: 1
  };

  function setup() {
    updateStats();
  }

  function feed() {
    pet.energy += 5;
    updateStats();
  }

  function play() {
    pet.happiness += 5;
    updateStats();
  }

  function updateStats() {
    document.getElementById("name").textContent = pet.name;
    document.getElementById("energy").textContent = pet.energy;
    document.getElementById("happiness").textContent = pet.happiness;
  }