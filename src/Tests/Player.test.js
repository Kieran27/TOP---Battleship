import Player from '../Modules/Player.js'

describe('Player Tests', () => {
  let testPlayer
  beforeEach(() => {
    testPlayer = new Player('player_name')
  })
  test('Player Name', () => {
    expect(testPlayer.name).toBe('player_name')
  })

})
