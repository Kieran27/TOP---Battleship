import Gameboard from '../Modules/GameBoard.js'
import Player from '../Modules/Player.js'
import Ship from '../Modules/Ship.js'
import DomFunctions from '../Modules/Dom_Functions.js'
import DragandDrop from '../Modules/Drag_&_Drop.js'

const GameFlow = (() => {
  // Initialise variables in functions block scope
  let player1
  let ai
  let playerGameboard
  let aiGameboard

  const init = () => {
    // Create Players
    player1 = new Player('player', 'human')
    // Create Gameboards
    playerGameboard = new Gameboard(player1.name)
    // Create Gameboards
    DomFunctions.createBoard(true)
    // Initialise Drag And Drop Functionality
    DragandDrop.dragDropInit(playerGameboard)
    // Render Player Gameboard
    DomFunctions.renderBoard(playerGameboard)
    // console.log(playerGameboard.board)
  }

  const initAI = () => {
    // Create AI Player
    ai = new Player('computer', 'AI')
    // Create Gameboard
    aiGameboard = new Gameboard(ai.name)
    // Create AI Ships
    const carrierAI = new Ship('carrier', 5, true)
    const battleshipAI = new Ship('battleship', 4, true)
    const cruiserAI = new Ship('cruiser', 3, true)
    const submarineAI = new Ship ('submarine', 3, false)
    const destroyerAI = new Ship ('destroyer', 2, false)
    // Create and render aiGameboard
    DomFunctions.createBoard(false)
    DomFunctions.renderBoard(aiGameboard)
    // Set AI's board by placing ships randomly
    placeRandomShips(aiGameboard, carrierAI, destroyerAI, submarineAI, battleshipAI, cruiserAI)

    DomFunctions.renderMessage('Make Your Move!')
  }

  const cellInput = (e) => {
    // Loop Through AI's cells - passing item and index
    document.querySelectorAll('.cell-AI').forEach((cell, index) => {
      if (cell === e.target) {
        flowFunction(e.target, index)
      }
    })
  }

  const flowFunction = (target, index) => {
    // Remove Cell's event Listener
    target.removeEventListener('click', cellInput)
    // Convert Index of cell to x and y coordinates
    const coordinates = getCoordinates(index)
    // Call attack function based on coordinates
    player1.placeAttack(coordinates.x, coordinates.y, aiGameboard)
    // Render change in AI's gameboard
    DomFunctions.renderBoardAI(aiGameboard)
    // Check for Winner - Exit Function if Winner Found
    if (checkForWinner(aiGameboard)) {
      DomFunctions.gameOver(aiGameboard)
      return
    } else {
      turnAI()
    }
    // Call Switch Turns Function - enabling AI to make move - following player's move
  }

  const turnAI = () => {
    const attacks = ai.playerInfo.attacks
    const lastAttack = attacks[attacks.length - 1]
    // Call aiPlaceAttack on AI class
    ai.aiPlaceAttack(playerGameboard)
    // Render changes on player's gameboard
    DomFunctions.renderBoard(playerGameboard)
    // Check for Winner
    if (checkForWinner(playerGameboard)) {
      return DomFunctions.gameOver(playerGameboard)
    }
  }

  const checkForWinner = (gameboard) => {
    if (gameboard.allShipsSunk()) {
      console.log('Winner!')
      return true
    } else {
      return false
    }
  }

  const getCoordinates = (index) => {
    // Convert cell's index to a specific x and y coordinate that can be used in attack methods
    let x = parseInt(index.toString().split('')[0])
    let y = parseInt(index.toString().split('')[1])
    // Conditional dealing with single digit indicies
    if (index < 10) {
      y = parseInt(x)
      x = 0
    }
    // Return coordinates as object
    return { x, y }
  }

  const placeRandomShips = (gameboard, ...args) => {
    const randomNumber = () => player1.getRandomNumber()
    args.forEach(ship => {
      const shipPlacement = gameboard.placeShip(ship, randomNumber(), randomNumber())
      // Conditional to recursively call top function until valid placement is chosen
      if (shipPlacement === 'Invalid Position!') {
        return placeRandomShips(gameboard, ship)
      } else if (shipPlacement === 'Ship Overflow!') {
        return placeRandomShips(gameboard, ship)
      } else if (shipPlacement === 'No Ship Overlap!') {
        return placeRandomShips(gameboard, ship)
      }
    })
  }

  return {
    init,
    cellInput,
    getCoordinates,
    checkForWinner,
    player1,
    ai,
    playerGameboard,
    aiGameboard,
    initAI
  }
})()

export default GameFlow
