import Ship from './Ship.js'
import DomFunctions from './DOM_Functions.js'

export default class Gameboard {
  constructor (owner) {
    this.board = []
    this.boardInfo.belongsTo = owner
    this.initialise()
  }

  boardInfo = {
    belongsTo: '',
    missedAttacks: [],
    shipsArray: []
  }

  initialise () {
    // Creates a nested Array to represent the gameboard
    this.board = [
      new Array(10),
      new Array(10),
      new Array(10),
      new Array(10),
      new Array(10),
      new Array(10),
      new Array(10),
      new Array(10),
      new Array(10),
      new Array(10)
    ]
    // Fills each 'cell' with an object containing relevant information
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        this.board[i][j] = { hasShip: false, hit: false, ship: null }
      }
    }
  }

  resetBoard () {
    this.board = []
    this.initialise()
  }

// Places Ship on relevant gameboard - dependent on x and y coordinates
  placeShip(ship, x, y) {
    const position = this.board[x][y]
    const remainingSpaceX = 10 - y
    const remainingSpaceY = x + 1

    // Checks to test for valid placement
    if (ship.length > 10) {
      return 'invalid Ship'
    }

    if (position.hasShip) {
      return 'Invalid Position!'
    }

    if (ship.isVertical) {
      if (remainingSpaceY < ship.length) {
        return 'Ship Overflow!'
      }

      // Check For Ship Overlap
      let vertArray = []
      for (let i = x; i > (x - ship.length); i--) {
        vertArray.push(this.board[i][y].hasShip)
      }

      if (vertArray.includes(true)) {
        return 'No Ship Overlap!'
      }

      // If all checks complete - populate board with ship
      this.boardInfo.shipsArray.push(ship)
      let count = 0

      for (let i = x; i > (x - ship.length); i--) {
        this.board[i][y].hasShip = true
        this.board[i][y].ship = ship.id
        this.board[i][y].position = count
        count++
      }
    }

    else if (!ship.isVertical) {
      if (remainingSpaceX < ship.length) {
        return 'Ship Overflow!'
      }

      // Check For Ship Overlap
      let horiArray = []
      for (let i = y; i < (y + ship.length); i++) {
        horiArray.push(this.board[x][i].hasShip)
      }

      if (horiArray.includes(true)) {
        return 'No Ship Overlap!'
      }

      // If all checks complete - populate board with ship
      this.boardInfo.shipsArray.push(ship)
      let count = 0

      for (let i = y; i < (y + ship.length); i++) {
        this.board[x][i].hasShip = true
        this.board[x][i].ship = ship.id
        this.board[x][i].position = count
        count++
      }
    }
    return this.board
  }

  recieveAttack (x, y) {
    const position = this.board[x][y]
    const boardInfo = this.boardInfo

    if (!position.hasShip || (position.hasShip && position.hit)) {
      position.hit = true
      boardInfo.missedAttacks.push([x, y])
      return 'Miss!'
    }

    const shipName = position.ship
    const shipType = position.position
    const shipIndex = boardInfo.shipsArray.findIndex(obj => {
      return obj.id === shipName
    })
    position.hit = true
    this.boardInfo.shipsArray[shipIndex].hit(shipType, this)
    return 'Hit!'
  }

  allShipsSunk () {
    console.log(this.boardInfo.shipsArray)
    if (this.boardInfo.shipsArray.every(obj => obj.sunk === true)) {
      alert(`${this.boardInfo.belongsTo} Has Just Lost The Game`)
      DomFunctions.gameOver()
      return `${this.boardInfo.belongsTo} Has Just Lost The Game`
    }
    return false
  }
}
