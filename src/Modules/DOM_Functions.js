import GameFlow from '../Modules/Game_Flow.js'
const DomFunctions = (() => {
  const player = document.querySelector('.gameboard-player')
  const ai = document.querySelector('.gameboard-AI')

  const announcerTxt = document.getElementById('announcer-txt')

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
    }
  }

  const renderMessage = (msg) => {
    announcerTxt.textContent = msg
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
      cell.textContent = 'X'
      return cell
    } else if (gameboard[x][y].hasShip && board.boardInfo.belongsTo !== 'computer') {
      cell.style.background = 'green'
      return cell
    } else if (!gameboard[x][y].hasShip && gameboard[x][y].hit) {
      cell.textContent = '•'
      cell.style.color = 'black'
      return cell
    }
  }

  const gameOver = () => {
    document.querySelectorAll('.cell-AI').forEach(cell => {
      cell.removeEventListener('click', GameFlow.cellInput)
    })
  }

  return {
    createBoard,
    renderMessage,
    renderBoard,
    renderBoardAI,
    gameOver
  }
})()

export default DomFunctions
