import './style.css'
import { movePiece } from './movePiece';

const eightPositionArray = new Array(8).fill(0);

const whiteKing = '&#9812;'
const whiteQueen = '&#9813;'
const whiteRook = '&#9814;'
const whiteBishop = '&#9815;'
const whiteKnight = '&#9816;'
const whitePawn = '&#9817;'

const blackKing = '&#9818;'
const blackQueen = '&#9819;'
const blackRook = '&#9820;'
const blackBishop = '&#9821;'
const blackKnight = '&#9822;'
const blackPawn = '&#9823;'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Chess</h1>
    <div id="board"/>
  </div>
`

const piecesPosition = {
  '00': {image: whiteRook, color: 'white'},
  '01': {image: whiteKnight, color: 'white'},
  '02': {image: whiteBishop, color: 'white'},
  '03': {image: whiteQueen, color: 'white'},
  '04': {image: whiteKing, color: 'white'},
  '05': {image: whiteBishop, color: 'white'},
  '06': {image: whiteKnight, color: 'white'},
  '07': {image: whiteRook, color: 'white'},
  '10': {image: whitePawn, color: 'white'},
  '11': {image: whitePawn, color: 'white'},
  '12': {image: whitePawn, color: 'white'},
  '13': {image: whitePawn, color: 'white'},
  '14': {image: whitePawn, color: 'white'},
  '15': {image: whitePawn, color: 'white'},
  '16': {image: whitePawn, color: 'white'},
  '17': {image: whitePawn, color: 'white'},
  '60': {image: blackPawn, color: 'black'},
  '61': {image: blackPawn, color: 'black'},
  '62': {image: blackPawn, color: 'black'},
  '63': {image: blackPawn, color: 'black'},
  '64': {image: blackPawn, color: 'black'},
  '65': {image: blackPawn, color: 'black'},
  '66': {image: blackPawn, color: 'black'},
  '67': {image: blackPawn, color: 'black'},
  '70': {image: blackRook, color: 'black'},
  '71': {image: blackKnight, color: 'black'},
  '72': {image: blackBishop, color: 'black'},
  '73': {image: blackQueen, color: 'black'},
  '74': {image: blackKing, color: 'black'},
  '75': {image: blackBishop, color: 'black'},
  '76': {image: blackKnight, color: 'black'},
  '77': {image: blackRook, color: 'black'},
}

const board = eightPositionArray.forEach((_, r) => {
  eightPositionArray.forEach((_, c) => {

    const black = (r + c) % 2 === 0
    const piece = piecesPosition[`${r}${c}`]
    const pieceImage = piece ? piece.image : ''
    const pieceColor = piece ? piece.color : ''

    document.querySelector('#board').innerHTML += `<div class="cell ${black ? 'color-black': 'color-white'}">
      <span id=piece class="piece ${pieceColor}">
       ${pieceImage}
      </span>
    </div>`
  })
})

if (board) {
  document.querySelector('#board').innerHTML = board.join('')
}

const pieces = document.querySelectorAll('#piece')

pieces.forEach(piece => {
  piece.onmousedown = function(event) {
    movePiece(event, piece)
  }
})
