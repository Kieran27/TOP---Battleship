import Gameboard from '../Modules/GameBoard.js'
import Player from '../Modules/Player.js'
import Ship from '../Modules/Ship.js'
import DomFunctions from '../Modules/Dom_Functions.js'

const GameFlow = (() => {
  // Initialise variables in functions block scope
  let player1
  let ai
  let playerGameboard
  let aiGameboard

  const init = () => {
    // Create Players
    player1 = new Player('player', 'human')
    ai = new Player('computer', 'AI')

    // Create Gameboards
    playerGameboard = new Gameboard(player1.name)
    aiGameboard = new Gameboard(ai.name)

    // Create Player Ships
    const carrier = new Ship('carrier', 5, true)
    const battleship = new Ship('battleship', 4, true)
    const cruiser = new Ship('cruiser', 3, true)
    const submarine = new Ship ('submarine', 3, false)
    const destroyer = new Ship ('destroyer', 2, false)

    // Create AI Ships
    const carrierAI = new Ship('carrier', 5, true)
    const battleshipAI = new Ship('battleship', 4, true)
    const cruiserAI = new Ship('cruiser', 3, true)
    const submarineAI = new Ship ('submarine', 3, false)
    const destroyerAI = new Ship ('destroyer', 2, false)

    // PlaceShips
    playerGameboard.placeShip(carrier, 7, 7)
    playerGameboard.placeShip(destroyer, 4, 4)
    playerGameboard.placeShip(submarine, 2, 4)
    playerGameboard.placeShip(battleship, 5, 9)
    playerGameboard.placeShip(cruiser, 7, 1)

    // Set AI's board by placing ships randomly
    placeRandomShips(aiGameboard, carrierAI, destroyerAI, submarineAI, battleshipAI, cruiserAI)

    // Create Gameboards
    DomFunctions.createBoard(true)
    DomFunctions.createBoard(false)

    // Render Player Gameboard
    DomFunctions.renderBoard(playerGameboard)
    // console.log(playerGameboard.board)
  }

  const cellInput = (e) => {
    // Loop Through AI's cells - passing item and index
    document.querySelectorAll('.cell-AI').forEach((cell, index) => {
      if (cell === e.target) {
        // Remove Cell's event Listener
        e.target.removeEventListener('click', cellInput)
        // Convert Index of cell to x and y coordinates
        const coordinates = getCoordinates(index)
        // Call attack function based on coordinates
        player1.placeAttack(coordinates.x, coordinates.y, aiGameboard)
        // Render change in AI's gameboard
        DomFunctions.renderBoardAI(aiGameboard)
        // Call Switch Turns Function - enabling AI to make move - following player's move
        turnAI()
      }
    })
  }

  const turnAI = () => {
    // Call aiPlaceAttack on AI class
    ai.aiPlaceAttack(playerGameboard)
    // Render changes on player's gameboard
    DomFunctions.renderBoard(playerGameboard)
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
      const ame = gameboard.placeShip(ship, randomNumber(), randomNumber())
      console.log(ame)
      if (ame === 'Invalid Position!') {
        // console.log('Calli', ship)
        return placeRandomShips(gameboard, ship)
      } else if (ame === 'Ship Overflow!') {
        // console.log('Gura', ship)
        return placeRandomShips(gameboard, ship)
      } else if (ame === 'No Ship Overlap!') {
        // console.log('holo', ship)
        return placeRandomShips(gameboard, ship)
      }
    })
  }

  return {
    init,
    cellInput,
    getCoordinates
  }

})()

export default GameFlow
