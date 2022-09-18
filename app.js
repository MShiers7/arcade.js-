const gameState = {};

function buildInitialState() {
    gameState.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    gameState.players = 'X';
    
        

}


const boardElement = document.querySelector('#gameboard');
const playerTurnElement = document.querySelector('#player-turn');
const startButton = document.querySelector('.start');
const player1 = document.querySelector('#p1');
const player2 = document.querySelector('#p2');


const winConditions = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
  ];

  function wonGame() {
   //struggled implementing the winning logic 
}

  function draw() {
    //struggled implementing the draw logic
  }

  

  


function changeTurns() {
    if (gameState.players === 'X') {
        gameState.players = 'O';
    } else {
        gameState.players = 'X';
    }
        
    
}


function renderGameBoard() {
    boardElement.innerHTML = '';
    for (let yPosition = 0; yPosition < gameState.board.length; yPosition++) {
        const row = gameState.board[yPosition];
        for (let xPosition = 0; xPosition < row.length; xPosition++) {
            const column = row[xPosition];
            const cellElement = document.createElement('div');
            cellElement.classList.add('box');
            cellElement.innerText = gameState.board[yPosition][xPosition];
            cellElement.dataset.positions = `${yPosition}, ${xPosition}`;
            boardElement.appendChild(cellElement);
        }
    } 
   
        
}


function renderPlayer() {
    let text;
    text = `${gameState.players} 's turn`;
    playerTurnElement.innerText = text;
    }


function render() {
    renderGameBoard();
    renderPlayer();
}

boardElement.addEventListener('click', function (event) {
    if (event.target.className === 'box') {
        let cellElement = event.target; 
        let [row, column] = cellElement.dataset.positions.split(',');
        gameState.board[Number(row)][Number(column)] = gameState.players;
        changeTurns()
        renderGameBoard();
        renderPlayer()
    }

});

startButton.addEventListener('click', function(event) {
    
    if (event.target.className === 'start')
    buildInitialState();
    
});

player1.addEventListener('change', function (event) {
    
    if (event.target.className === 'p1')
    buildInitialState();
}); 

player2.addEventListener('change', function (event) {

});
    



buildInitialState();
render();



