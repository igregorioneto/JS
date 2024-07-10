class ChessGame {
    constructor() {
        this.board = []
    }

    startGame() {
        for (let rows = 0; rows < 8; rows++) {
            this.board[rows] = [];
            for (let cols = 0; cols < 8; cols++) {
               if (rows === 1 || rows === 6) {
                this.board[rows].push('P');
               } else if (rows === 7 || rows === 0) {
                if (cols === 0 || cols === 7) {
                    this.board[rows][cols] = 'T';
                } else if (cols === 1 || cols === 6) {
                    this.board[rows][cols] = 'C';
                } else if (cols === 2 || cols === 5) {
                    this.board[rows][cols] = 'B';
                } else if (cols === 3) {
                    this.board[rows][cols] = 'D';
                } else {
                    this.board[rows][cols] = '*'
                }
               } else {
                this.board[rows].push('*');
               }
            }
        }
        this.drawBoard();
    }

    drawBoard() {
        let board = '';
        for (let rows = 0; rows < 8; rows++) {            
            for (let cols = 0; cols < 8; cols++) {
                board += this.board[rows][cols] + ' '
            }
            board += '\n';
        }
        console.log(board)
    }

    getBoardState() {
        return { rows: this.board.length, cols: this.board[0].length };
    }
}

module.exports = {
    ChessGame
}