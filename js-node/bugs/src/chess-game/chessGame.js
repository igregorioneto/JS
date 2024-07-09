class ChessGame {
    constructor() {
        this.board = []
    }

    startGame() {
        for (let rows = 0; rows < 8; rows++) {
            this.board[rows] = [];
            for (let cols = 0; cols < 8; cols++) {
                this.board[rows].push('*');
            }
        }
    }

    getBoardState() {
        return { rows: this.board.length, cols: this.board[0].length };
    }
}

module.exports = {
    ChessGame
}