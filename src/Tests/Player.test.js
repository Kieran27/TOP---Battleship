import Player from '../Modules/Player.js'
import Gameboard from '../Modules/GameBoard.js'

describe('Player Tests', () => {
  let testPlayer
  let newGameBoard

  beforeEach(() => {
    newGameBoard = new Gameboard('test_owner')
    testPlayer = new Player('player_name')
  })

  test('Player Name', () => {
    expect(testPlayer.name).toBe('player_name')
  })

  test('Check Attacks Array', () => {
    testPlayer.aiPlaceAttack(newGameBoard)
    testPlayer.aiPlaceAttack(newGameBoard)
    expect(testPlayer.playerInfo.attacks.length).toBe(2)
  })

  test('Test for same attack', () => {
    testPlayer.playerInfo.attacks = [[1, 1], [2, 4]]
    expect(testPlayer.checkForSameAttack(1, 1)).toBeTruthy()
  })

  test('Test for attack function call', () => {
    expect(testPlayer.placeAttack(2, 1, newGameBoard)).toBe(newGameBoard.recieveAttack(2, 1))
  })
})
