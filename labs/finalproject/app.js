// Author: Kelly Kuhn
// Date: Aug 6, 2023, 7, 2023

/* Final Project: Creating a simple game of Tic-Tac-To from different area
   of research. I used YouTube, and the web. The documentation will be added
   to the algorithm paper.
*/

/* Global variables and winning combo solutions */
const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

/* Global variables and we use a const to set the elements to a new name */
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn

/* Staring the code needed to begin the game in "js" */ 
startGame()

/* Adding event listener */
restartButton.addEventListener('click', startGame)

/* Creating the function starting it off equal to false. Reset the game board
   and remove and add listener (click) */
function startGame() {
  circleTurn = false
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click', handleClick)
    /* The Event Listener will work only once if it turns "TRUE" */
    cell.addEventListener('click', handleClick, { once: true })
  })

  /* Setting hover class */
  setBoardHoverClass()
  winningMessageElement.classList.remove('show')
}

/* Creating function on how to handle clicks and setting it to e (aka element)
   Then if, else if and else statements to run through the different ways to
   determiner a winner (x or o) and draw */
function handleClick(e) {
  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
  placeMark(cell, currentClass)
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
    /* calling out the hover class for the function below */
    setBoardHoverClass()
  }
}

/* Create the function for a draw using if and else statements */
function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = 'Draw!'
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
  }
  winningMessageElement.classList.add('show')
}

/* Ensure that every square is filled and no winning user found */
function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
  })
}

/* Us the function to add the marker */
function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}

/* Determine who's turn it is */
function swapTurns() {
  circleTurn = !circleTurn
}

/* This function determines who's turn it is and not who's turn it was */
function setBoardHoverClass() {
  board.classList.remove(X_CLASS)
  board.classList.remove(CIRCLE_CLASS)
  /* If statement for circle's turn */
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS)
    /* Else it is x's turn */
  } else {
    board.classList.add(X_CLASS)
  }
}

/* Function checking for winning combinations */
function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}