const { ChessGame } = require("./chessGame");
const { ChessPiece } = require("./chessPiece");
const { Player } = require("./player");

let chessGame;
beforeEach(function () {
    chessGame = new ChessGame();
    player1 = new Player('João', 'white');
    player2 = new Player('Larissa', 'black');
    chessGame.startGame();
})

test('Deve iniciar o jogo com o estado corredo do tabuleiro', function() {
    // Verificar se o tabuleiro foi iniciado corretamente
    const initialBoardState = chessGame.getBoardState();
    expect(initialBoardState.rows).toBe(8);
    expect(initialBoardState.cols).toBe(8);
})

test('Deve mover um Peão uma casa a cima', function() {
    // Verificar se o tabuleiro foi iniciado corretamente
    const peao = new ChessPiece();
    
})