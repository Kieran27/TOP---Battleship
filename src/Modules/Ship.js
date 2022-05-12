export default class Ship {
  constructor(id, length, isVertical) {
    this.id = id
    this.length = length
    this.isVertical = isVertical
    this.hits = new Array(this.length).fill('')
    this.sunk = false
  }

  hitsArray(length) {
    // Create new Array with length equal to ship length to represent its damage
    return new Array(length).fill('')
  }

  hit(no, gameboard) {
    this.hits[no] = 'X'
    // On Each Hit, check if Ship is sunk
    this.isSunk(gameboard)
    return this.hits
  }

  isSunk(gameboard) {
    if (this.hits.every(value => value === 'X')) {
      this.sunk = true
      console.log(`${this.id} Sunk!`)
      return gameboard.allShipsSunk()
    }
    return false
  }
}
