import Ship from '../Modules/Ship.js'
import Gameboard from '../Modules/GameBoard.js'

describe('Ship Tests', () => {
  let testShip
  beforeEach(() => {
    testShip = new Ship('carrier', 5, false)
  })

  test('test ship length', () => {
    expect(testShip.hits.length).toBe(testShip.length)
  })

  test('ship is vertical', () => {
    expect(testShip.isVertical).toBe(false)
  })

  test('ship is hit', () => {
    const hitsArray = ['', '', 'X', '', '']
    expect(testShip.hit(2)).toEqual(hitsArray)
  })

  test('ship is sunk', () => {
    const newGameBoard = new Gameboard()
    testShip.hits = ['X', 'X', 'X', 'X', '']
    expect(testShip.hit(4, newGameBoard)).toBe(testShip.hits)
  })

  test('All Ships Sunk Called', () => {
    const newGameBoard = new Gameboard()
    testShip.hits = ['X', 'X', 'X', 'X', 'X']
    expect(testShip.isSunk(newGameBoard)).toBe(newGameBoard.allShipsSunk())
  })
})
