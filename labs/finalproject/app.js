// Author: Kelly Kuhn
// Date: Aug 6, 2023, 7, 2023

/* Final Project: Creating a simple game of Tic-Tac-To from different area
   of research. I used YouTube, and the web. The documentation will be added
   to the algorithm paper.
*/

// Connecting to the game_Board file in HTML
const gameBoard = document.querySelector("#gameboard")
// Connecting to the info call out in HTML Index
const infoDisplay = document.querySelector("#info")

// Create the stating cells for the board; a total of nine => and they
// will be empty.
const startCells = [
    " ", " ", " ", " ", " ", " ", " ", " ", " " 
]

// Decide who goes first
let go = "circle"
infoDisplay.textContent = "Circle makes the first move!"


// Create a function that will create the game board using startCells
// This function will create the game board of 3 x 3
function createBoard() {
    // Starting the cells using the 
    // Create an element called div
    // _cell tells us we are not actually using the cell
    startCells.forEach((_cell, index) => {
        // Create an div for cellElement - not this is not a global var
        const cellElement = document.createElement('div')
        // Create the class element for each square
        cellElement.classList.add('square')
        // Grab the cell index = to id
        cellElement.id = index
        // Add an event listener for the clicks and if we click it we add a
        //function addGo
        cellElement.addEventListener('click', addGo)
        // So we don't have to grab the cellElement each time we use an append
        gameBoard.append(cellElement)
    })
}
createBoard()


// Create function addGo which will add a circle or x if nothing is there
// pass through e for event (very common way to call an event)
// I used a console.log (e.target) to ensure I was getting the correct box
// and element id when click... Removed after test results show correct coding.
function addGo(e) {
    // Need to append inside the squares, we do this by creating another
    // div inside this function. Not this is not a global.
    const goDisplay = document.createElement('div')
    // adding classList to goDisplay and then calling 'circle' for testing
    // purposes only to ensure code is working. It will be removed.
    // After testing removed "circle and cross" added the element "go" that
    // defined above (line 21).
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    // If go is true to "circle" then "cross" is next; otherwise it is "circles"
    // turn. This statement over rides line 21. Changes the statement on who's
    // turn it is to play.
    go = go === "circle" ? "cross" : "circle"
    infoDisplay.textContent = "It is now " + go + "'s turn to go."
    // Remove the event listener
    e.target.removeEventListener("click", addGo)
    checkScore()
}

// Function to check for a winner or keep playing the game
function checkScore() {
    // Check every square for a winner
    const allSquares = document.querySelectorAll(".square")
    // Check to see if there is a winner
    const winningCombos = [
        // Rows
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        // Columns
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        // Diagonal
        [0, 4, 8], [2, 4, 6]
    ]

    // Statements checking for winning combos (either x or o's)
    winningCombos.forEach(array => {
        array.every(cell => allSquares[cell].firstChild?.classList.contains('circle'))
    })
}