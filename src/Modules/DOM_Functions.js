import GameFlow from '../Modules/Game_Flow.js'
const DomFunctions = (() => {
  const player = document.querySelector('.gameboard-player')
  const ai = document.querySelector('.gameboard-AI')

  const createBoard = (isHuman) => {
    for (let i = 0; i < 100; i++) {
      const cell = document.createElement('div')
      cell.classList.add('cell')

// Statement to check whether board belongs to human or computer
      switch (isHuman) {
        case true:
          player.appendChild(cell)
          cell.classList.add('cell-Human')
          break
        case false:
          ai.appendChild(cell)
          cell.classList.add('cell-AI')
          cell.addEventListener('click', GameFlow.cellInput)
          break
        default:
          return undefined
      }

      // if (isHuman) {
      //   player.appendChild(cell)
      //   cell.classList.add('cell-Human')
      // } else {
      //   ai.appendChild(cell)
      //   cell.classList.add('cell-AI')
      //   cell.addEventListener('click', GameFlow.cellInput)
      // }
    }
  }

  const renderBoard = (board) => {
    // Loops through all player cells - updating UI of board dependent on board information
    document.querySelectorAll('.cell-Human').forEach((cell, index) => {
      const coordinates = GameFlow.getCoordinates(index)
      styleCell(board, coordinates, cell)
    })
  }

  const renderBoardAI = (board) => {
    document.querySelectorAll('.cell-AI').forEach((cell, index) => {
      const coordinates = GameFlow.getCoordinates(index)
      styleCell(board, coordinates, cell)
    })
  }

  const styleCell = (board, coordinates, cell) => {
    const x = coordinates.x
    const y = coordinates.y
    const gameboard = board.board

    if (gameboard[x][y].hasShip && gameboard[x][y].hit) {
      cell.style.background = 'red'
      return cell
    } else if (gameboard[x][y].hasShip) {
      cell.style.background = 'green'
      return cell
    } else if (!gameboard[x][y].hasShip && gameboard[x][y].hit) {
      cell.style.background = 'blue'
      return cell
    }
  }

  const updateBoard = (board) => {
    switch (board) {
      case 'Hit!':
        board.innerText = 'X'
        board.style.color = 'white'
        break
      case 'Miss!':
        board.style.background = 'red'
        break
      default:
        board.style.background = 'inherit'
    }
  }

  const gameOver = () => {
    document.querySelectorAll('.cell-AI').forEach(cell => {
      cell.removeEventListener('click', GameFlow.cellInput)
    })
  }

  return {
    createBoard,
    updateBoard,
    renderBoard,
    renderBoardAI,
    gameOver
  }
})()

export default DomFunctions
