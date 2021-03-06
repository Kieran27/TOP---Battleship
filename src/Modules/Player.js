import Gameboard from '../Modules/GameBoard.js'
export default class Player {
  constructor (name, type) {
    this.name = name
    this.type = type
  }

  playerInfo = {
    currentTurn: true,
    attacks: []
  }

placeAttack(x, y, gameboard) {
    return gameboard.recieveAttack(x, y)
}

aiPlaceAttack(gameboard) {
    const x = this.getRandomNumber()
    const y = this.getRandomNumber()
    if (this.checkForSameAttack(x, y)) {
      return this.aiPlaceAttack(gameboard)
    }
    this.playerInfo.attacks.push([x, y])
    return gameboard.recieveAttack(x, y)
  }

  checkForSameAttack(x, y) {
    const attacks = this.playerInfo.attacks
    for (let i = 0; i < attacks.length; i++) {
      if (attacks[i][0] === x && attacks[i][1] === y) {
        return true
      }
    }
    return false
  }

  attackAdjacentSpots() {
    const attacks = this.playerInfo.attacks
    const previousHit = attacks[attacks.length - 1]
    console.log(previousHit)
    let newAttack = previousHit
    newAttack[0] = newAttack[0] + 1
    newAttack[1] = newAttack[1] + 1
    console.log(newAttack)
  }

  getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10)
    return randomNumber
  }

}
