// 'use strict'
// console.log('hello')

// const gGame ={
//     isOn: false,
//     shownCount: 0,
//     markedCount: 0,
//     secsPassed: 0
// }
// const gLevel = {
//     SIZE: 4,
//     MINES: 2
// };
// const gCELL= {
// minesAroundCount: 4,
//     isShown: true,
//     isMine: false,
//     isMarked: true
// }
// const MINE= '💣'
// var gBoard
// const EMPTYCELL= ' '


// function init() {
//     gBoard=buildBoard(4)
//     createMines(gBoard)
//     printMat(gBoard, '.board-container')
// }

// function createMines(board) {
//     for(var i =0 ; i<1;i++){
//         for (var j=0; j=0; j++){
    
//     var mine = {
//         location: {
//             i: i,
//             j: j
//         },
//         currCellContent: MINE,   
//     }
//     minesArray.push(mine)
// }}}

// function buildBoard(size) {
//     const board = []
//     for (var i = 0; i < size; i++) {
//         board.push([])
//         for (var j = 0; j < size; j++) {
//             board[i][j] = EMPTYCELL

//             }
//         }
//     return board
// }


// function getEmptyCell(board) {
//     var emptyCells = []

//     for (var i = 0; i < board.length; i++) {
//         for (var j = 0; j < board.length; j++) {
//             if (board[i][j] === EMPTYCELL) {
//                 emptyCells.push({ i, j })



//             }

//         }

//     }
//     return emptyCells
// }
// // console.table(buildBoard(4))
// gBoard=buildBoard(4)
// // console.log(g)
// console.table(gBoard)