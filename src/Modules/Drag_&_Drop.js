import Ship from './Ship.js'
import DomFunctions from './DOM_Functions.js'
import GameFlow from './Game_Flow.js'

const DragandDrop = (() => {
  // Initialise Counter to track valid placed ships
  let shipPlacementCount = 0
  // Add Event Listeners Allowing for 'ships' to be Rotated
  document.getElementById('btn-rotate').addEventListener('click', DomFunctions.rotateShips)
  // Add initial drag events to 'ships'
  const dragDropInit = (gameboard) => {
    document.querySelectorAll('.test-ship').forEach(ship => {
      ship.addEventListener('dragstart', dragStart)
      ship.addEventListener('dragend', dragEnd)
    })

    function dragStart(e) {
      DomFunctions.renderMessage(`Place Your ${e.target.getAttribute('data-name')}`)
      e.dataTransfer.setData('text/plain', e.target.getAttribute('data-name'))
    }

    function dragEnd() {
      DomFunctions.renderMessage('Place Your Remaining Ships')
    }

    document.querySelectorAll('.cell-Human').forEach((cell, index) => {
      cell.addEventListener('dragenter', dragEnter)
      cell.addEventListener('dragover', dragOver)
      cell.addEventListener('dragleave', dragLeave)
      cell.addEventListener('drop', dragDrop)
    })

    function dragOver (e) {
      e.preventDefault()
    }

    function dragEnter (e) {
      e.preventDefault()
    }

    function dragLeave() {
      console.log('I have left the stratosphere')
    }

    function determineShipDirection(direction) {
      if (direction === 'horizontal') {
        return false
      } else {
        return true
      }
    }

    function dragDrop(e) {
      const target = e.target
      const shipID = e.dataTransfer.getData('text/plain')
      const element = document.querySelector(`[data-name=${shipID}]`)

      const elementID = shipID
      const elementLength = element.querySelectorAll('.test').length
      const elementDirection = element.getAttribute('data-direction')

      document.querySelectorAll('.cell-Human').forEach((cell, index) => {
        if (cell === target) {
          // Determine x and y coordinates from cell index
          const coordinates = GameFlow.getCoordinates(index)
          // Instantiate new Ship with values obtained by dataTransfer
          const newShip = new Ship(elementID, elementLength, determineShipDirection(elementDirection))
          // Place Ship on gameboard with coordinates chosen by user
          const placement = gameboard.placeShip(newShip, coordinates.x, coordinates.y)
          // If placement was valid - update and render new gameboard state to user
          if (placement === true) {
            element.remove()
            shipPlacementCount++
            DomFunctions.renderBoard(gameboard)
            // Initialises AI player and board once all ships are placed
            if (shipPlacementCount === 5) {
              GameFlow.initAI()
              DomFunctions.displayUIElements()
              DomFunctions.renderMessage('Make Your Move')
            }
          }
        }
      })
    }
  }
  return {
    dragDropInit
  }
})()

export default DragandDrop
