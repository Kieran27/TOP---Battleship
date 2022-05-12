import Ship from '../Modules/Ship.js'

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
    testShip.hits = ['X', 'X', 'X', 'X', 'X']
    expect(testShip.isSunk()).toBe(`${testShip.id} Sunk!`)
  })
})
