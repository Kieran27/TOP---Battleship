import Ship from './Ship.js'
import DomFunctions from './DOM_Functions.js'
import GameFlow from './Game_Flow.js'

const DragandDrop = (() => {
  const dragDropInit = (gameboard) => {
    // Initialise Counter to track valid placed ships
    let shipPlacementCount = 0
    // Add Event Listeners Allowing for 'ships' to be Rotated
    document.getElementById('btn-rotate').addEventListener('click', DomFunctions.rotateShips)

    // Add initial drag events to 'ships'
    document.querySelectorAll('.test-ship').forEach(ship => {
      ship.addEventListener('dragstart', dragStart)
      ship.addEventListener('dragend', dragEnd)
    })

    function dragStart(e) {
      addCellListeners(true)
      /* Addresses bug where dragging elsewhere on screen will select
      individual 'ship-blocks' - breaking functionality - circumvents
      issue by selected parent element of event - thus storing a valid
      data attribute
      */
      if (!e.target.getAttribute('data-name')) {
        DomFunctions.renderMessage(`Place Your ${e.target.parentElement.getAttribute('data-name')}`)
        e.dataTransfer.setData('text/plain', e.target.parentElement.getAttribute('data-name'))
        return
      }
      DomFunctions.renderMessage(`Place Your ${e.target.getAttribute('data-name')}`)
      // Set "ship's" data-name attribute as dataTransfer value
      e.dataTransfer.setData('text/plain', e.target.getAttribute('data-name'))
    }

    function dragEnd() {
      addCellListeners(false)
      DomFunctions.renderMessage('Place Your Remaining Ships')
    }

    /* To avoid default draggable elements such as images throwing an
    error if dragged into cell - Enable and Disable cell dragabble
    listeners on ship grab and release
    */

    function addCellListeners(bool) {
      if (bool) {
        document.querySelectorAll('.cell-Human').forEach((cell, index) => {
          cell.addEventListener('dragenter', dragEnter)
          cell.addEventListener('dragover', dragOver)
          cell.addEventListener('dragleave', dragLeave)
          cell.addEventListener('drop', dragDrop)
        })
      } else {
        document.querySelectorAll('.cell-Human').forEach((cell, index) => {
          cell.removeEventListener('dragenter', dragEnter)
          cell.removeEventListener('dragover', dragOver)
          cell.removeEventListener('dragleave', dragLeave)
          cell.removeEventListener('drop', dragDrop)
        })
      }
    }

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
      // Find HTML div by querying result from data transfer
      const element = document.querySelector(`[data-name=${shipID}]`)

      // Assign values to be used to instantiate ship objects
      const elementID = shipID
      const elementLength = element.querySelectorAll('.test').length
      const elementDirection = element.getAttribute('data-direction')

      // Loop Through Cells to find cell that matches target
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
              DomFunctions.initUIElements()
              DomFunctions.renderMessage('Make Your Move!')
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
