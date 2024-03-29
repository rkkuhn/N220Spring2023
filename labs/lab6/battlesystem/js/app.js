// Author: Kelly Kuhn
// Date: July 17, 2023

/* Create a simple, JRPG battle system using two objects: one for an 'enemy' 
and the other for a 'player'. Each object should have properties for: 
attack, hp, and defense. Display both sets of stats on the document.

Using a button, provide the ability for the player to "attack" the enemy, 
using this calculation: enemyHP -= playerAttack - enemyDefense. Have the 
enemy do the same to the player. Update the displayed HP on the page after 
the calculation. */

// Create player and enemy objects
let player = {
    attack: 10,
    hp: 100,
    defense: 5
  };
  
  let enemy = {
    attack: 8,
    hp: 80,
    defense: 3
  };
  

  // Update the displayed stats
function updateStats() {
    document.getElementById("player-attack").textContent = "Attack: " + player.attack;
    document.getElementById("player-hp").textContent = "HP: " + player.hp;
    document.getElementById("player-defense").textContent = "Defense: " + player.defense;
  
    document.getElementById("enemy-attack").textContent = "Attack: " + enemy.attack;
    document.getElementById("enemy-hp").textContent = "HP: " + enemy.hp;
    document.getElementById("enemy-defense").textContent = "Defense: " + enemy.defense;
  }
  
  // Call the updateStats function to display the initial stats
  updateStats();

  // Attack function
function attack() {
    // Calculate damage inflicted on the enemy and the player
    let damageToEnemy = player.attack - enemy.defense;
    let damageToPlayer = enemy.attack - player.defense;
  
    // Update the enemy and player HP
    enemy.hp -= damageToEnemy;
    player.hp -= damageToPlayer;
  
    // Make sure HP doesn't go below 0
    enemy.hp = Math.max(0, enemy.hp);
    player.hp = Math.max(0, player.hp);
  
    // Update the displayed stats
    updateStats();
  
    // Check if the battle is over
    if (enemy.hp === 0) {
      // Enemy defeated
      alert("Enemy defeated!");
    } else if (player.hp === 0) {
      // Player defeated
      alert("Player defeated!");
    }
  }