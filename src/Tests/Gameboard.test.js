import Gameboard from '../Modules/GameBoard.js'
import Ship from '../Modules/Ship.js'

let newGameBoard
let carrier
let battleship
let cruiser
let submarine
let destroyer

beforeEach(() => {
  newGameBoard = new Gameboard('test_owner')
  carrier = new Ship('carrier', 5, false)
  battleship = new Ship('destroyer', 4, true)
  cruiser = new Ship('cruiser', 3, false)
  submarine = new Ship('submarine', 3, true)
  destroyer = new Ship('destroyer', 2, false)
})

test('test gameboard length', () => {
  expect(newGameBoard.board.length).toBe(10)
})

test('Invalid Position', () => {
  newGameBoard.placeShip(cruiser, 5, 5)
  expect(newGameBoard.placeShip(submarine, 5, 5)).toBe('Invalid Position!')
})

test('Ship Overflow Horizontal', () => {
  expect(newGameBoard.placeShip(carrier, 5, 8)).toBe('Ship Overflow!')
})

test('Ship Overflow Vertical', () => {
  expect(newGameBoard.placeShip(battleship, 2, 5)).toBe('Ship Overflow!')
})

test('Ship Overlap Horizontal', () => {
  newGameBoard.placeShip(carrier, 4, 5);
  expect(newGameBoard.placeShip(cruiser, 4, 3)).toBe('No Ship Overlap!')
})

test('Ship Overlap Vertical', () => {
  newGameBoard.placeShip(battleship, 6, 2)
  expect(newGameBoard.placeShip(submarine, 7, 2)).toBe('No Ship Overlap!')
})

test('Attack Hits', () => {
  newGameBoard.placeShip(carrier, 4, 5)
  expect(newGameBoard.recieveAttack(4, 6)).toBe('Hit!')
})

test('Correct Ship Placement', () => {
  // Mock Function testing only valid placements
  const testPlaceShips = (ship, x, y) => {
    if (ship.isVertical) {
      for (let i = x; i > (x - ship.length); i--) {
        newGameBoard.board[i][y].hasShip = ship.id
        expect(newGameBoard.board[i][y].hasShip).toEqual(ship.id)
      }
    } else if (!ship.isVertical) {
      for (let i = y; i < (y + ship.length); i++) {
        newGameBoard.board[x][i].hasShip = ship.id
        expect(newGameBoard.board[x][i].hasShip).toEqual(ship.id)
      }
    }
  }
// Testing Mock function using valid placements
testPlaceShips(destroyer, 0, 0)
testPlaceShips(carrier, 5, 4)
testPlaceShips(battleship, 5, 4)
testPlaceShips(submarine, 6, 4)
})
