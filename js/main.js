'use strict'
console.log('hello')
var minesArray = []
const gGame = {
    isOn: true,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}
const gLevel = {
    SIZE: 4,
    MINES: 2
};
const gCELL = {
    minesAroundCount: 4,
    isShown: true,
    isMine: false,
    isMarked: true
}
const MINE = '💣'
var gBoard
const EMPTYCELL = '😆'
const mineLocationsArray=[]

function init(size) {
    gBoard = buildBoard(size)
    console.log(gBoard)
    createEmptyCells()
    createSomeMines()
    countNegs(2,3)
    // setMinesNegsCount()
    printMat(gBoard, '.board-container')
    console.log(gBoard.length)
}








function buildBoard(size) {
    const board = []
    for (var i = 0; i < size; i++) {
        board.push([])
        for (var j = 0; j < size; j++) {
            board[i][j] = { }

        }
    }
    return board
}




 function createSomeMines() {
    var numOfMines=gBoard.length
    switch (numOfMines){
        case 4:
            numOfMines=2
            break
        case 8:
            numOfMines=12
            break
        case 12: 
            numOfMines=30
            break
        default:2                    
    }
    console.log(numOfMines)
    for (var i=0; i<numOfMines;i++){
    gBoard[getRandomIntInclusive(0,gBoard.length-1)][getRandomIntInclusive(0,gBoard.length-1)]= MINE

}}




function createEmptyCells() {
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard.length; j++) {

            var mine = {
              
                minesAroundCount: 4,
                isShown: true,
                isMine: false,
                isMarked: true,
                location: {i: i,
                           j: j
                }
            }
            minesArray.push(mine)
            gBoard[i][j] = ' '
            

        }
    }
}

function  setMinesNegsCount(){
    var neighborosCounter=0
    for(var i=0; i<gBoard.length;i++){
        for(var j=0; j<gBoard.length;j++){
            if(gBoard[i+1][j-1]===MINE) neighborosCounter++
            if(gBoard[i+1][j]===MINE) neighborosCounter++
            if(gBoard[i+1][j+1]===MINE) neighborosCounter++
            if(gBoard[i][j-1]===MINE) neighborosCounter++
            if(gBoard[i][j+1]===MINE) neighborosCounter++
            if(gBoard[i-1][j-1]===MINE) neighborosCounter++
            if(gBoard[i-1][j]===MINE) neighborosCounter++
            if(gBoard[i-1][j+1]===MINE) neighborosCounter++
            gBoard[i][j].minesAroundCount=neighborosCounter
            console.log(gBoard[i][j])
        }
    }
}

function countNegs(cellI, cellJ) {
    var negsCount = 0;
    for (var i = cellI - 1; i <= cellI + 1; i++) {
      if (i < 0 || i > gBoard.length - 1) continue;
      for (var j = cellJ - 1; j <= cellJ + 1; j++) {
        if (j < 0 || j > gBoard[i].length - 1) continue;
        if (i === cellI && j === cellJ) continue;
  
        if (gBoard[i][j].isMine) {
          negsCount++;
        }
        if (negsCount === 0) {
        }
      }
    }
    console.log(negsCount)
    return negsCount;
    
  }

function onClick (){
    console.log('ev:')
    if (!gGame.isOn) return
    // const CurrLocation = {
    //     i: gBoard.mine
    //     j: gBoard.location.j
    // }
    // const currCell=gBoard[gBoard.location.i][gBoard.location.j]
    // console.log(currCell)
    // // createSomeMines()
    // const nextLocation = getNextLocation(ev.onClick)
    // var nextCell = gBoard[nextLocation.i][nextLocation.j]
   
}

function NextMoveOpend(click){

}

function cellIsShown(){

}