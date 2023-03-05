const cellWidth = 64;
const cellHeight = 64;

function movePiece (event, piece) {
    // (1) prepare to moving: make absolute and on top by z-index
    piece.style.position = 'absolute';
    piece.style.zIndex = 1000;
    piece.style.fontSize = '2rem';
  
    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    document.body.append(piece);
  
    // centers the piece at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
        piece.style.left = pageX - piece.offsetWidth / 2 + 'px';
        piece.style.top = pageY - piece.offsetHeight / 2 + 'px';
    }
  
    // move our absolutely positioned piece under the pointer
    moveAt(event.pageX, event.pageY);
  
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }
  
    // (2) move the piece on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // (3) drop the piece, remove unneeded handlers
    piece.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        centralizePiece()
        piece.onmouseup = null;
    };
    
    function centralizePiece() {
        const piecePosition = piece.getBoundingClientRect();
        const rowNumber = Math.floor((piecePosition.y - 64) / cellHeight) +1 ;
        const columnNumber = Math.floor((piecePosition.x - 64) / cellWidth) + 1;

        const h1Height = document.querySelector('h1').offsetHeight;

        const rowPosition = rowNumber * cellHeight + h1Height + (-12);
        const columnPosition = columnNumber * cellWidth + (+26);

        piece.style.top = rowPosition + 'px';
        piece.style.left = columnPosition + 'px';
    }
  };

  export { movePiece };