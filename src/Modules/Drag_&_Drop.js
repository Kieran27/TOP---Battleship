import Ship from './Ship.js'
import DomFunctions from './DOM_Functions.js'
import GameFlow from './Game_Flow.js'

const DragandDrop = (() => {
  // Initialise Counter to track valid placed ships
  let shipPlacementCount = 0
  // Add initial drag events to 'ships'
  const dragDropInit = (gameboard) => {
    document.querySelectorAll('.test-ship').forEach(ship => {
      ship.addEventListener('dragstart', dragStart)
      ship.addEventListener('dragend', dragEnd)
    })

    function dragStart(e) {
      console.log('I Am being dragged')
      DomFunctions.renderMessage(`Place Your ${e.target.getAttribute('data-name')}`)
      e.dataTransfer.setData('text/plain', e.target.getAttribute('data-name'))
    }

    function dragEnd() {
      DomFunctions.renderMessage('Place Your Remaining Ships')
      console.log('Drag Has been ended')
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

    function dragDrop(e) {
      const target = e.target
      const shipID = e.dataTransfer.getData('text/plain')
      const element = document.querySelector(`[data-name=${shipID}]`)

      const elementID = shipID
      const elementLength = element.querySelectorAll('.test').length
      const elementDirection = element.getAttribute('data-direction')

      document.querySelectorAll('.cell-Human').forEach((cell, index) => {
        if (cell === target) {
          const coordinates = GameFlow.getCoordinates(index)
          const newShip = new Ship(elementID, elementLength, false)
          gameboard.placeShip(newShip, coordinates.x, coordinates.y)
          shipPlacementCount++
          DomFunctions.renderBoard(gameboard)
          // if (shipPlacementCount === 5) {
          //   GameFlow.initAI()
          // }
        }
      })
    }
  }
  return {
    dragDropInit
  }
})()

export default DragandDrop
