function sudoku(puzzle) {
    // Verificar se o numero não esta presente na linha/coluna/grid
    function isSafe(puzzle, row, col, num) {
        for (let x = 0; x < 9; x++) {
            if (puzzle[row][x] === num) return false;
        }
        for (let x = 0; x < 9; x++) {
            if (puzzle[x][col] === num) return false;            
        }
        const startRow = row - row % 3;
        const startCol = col - col % 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (puzzle[i + startRow][j + startCol] === num) return false;
            }
        }
        return true;
    }
    // Resolvendo o sudoku
    function solveSudoku(puzzle) {
        let row = -1;
        let col = -1;
        let isEmpty = true;
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (puzzle[i][j] === 0) {
                    row = i;
                    col = j;
                    isEmpty = false;
                    break;
                }
            }
            if (!isEmpty) break;
        }

        // Não tem espaço a esquerda
        if (isEmpty) return true;

        for (let num = 1; num <= 9; num++) {
            if (isSafe(puzzle, row, col, num)) {
                puzzle[row][col] = num;
                if (solveSudoku(puzzle)) {
                    return true;
                }
                // resetar se não encontrar a solução
                puzzle[row][col] = 0;
            }
        }
        return false;
    }

    solveSudoku(puzzle);
    return puzzle;
}

;(() => {
    var puzzle = [
        [5,3,0,0,7,0,0,0,0],
        [6,0,0,1,9,5,0,0,0],
        [0,9,8,0,0,0,0,6,0],
        [8,0,0,0,6,0,0,0,3],
        [4,0,0,8,0,3,0,0,1],
        [7,0,0,0,2,0,0,0,6],
        [0,6,0,0,0,0,2,8,0],
        [0,0,0,4,1,9,0,0,5],
        [0,0,0,0,8,0,0,7,9]];
  
      var solution = [
        [5,3,4,6,7,8,9,1,2],
        [6,7,2,1,9,5,3,4,8],
        [1,9,8,3,4,2,5,6,7],
        [8,5,9,7,6,1,4,2,3],
        [4,2,6,8,5,3,7,9,1],
        [7,1,3,9,2,4,8,5,6],
        [9,6,1,5,3,7,2,8,4],
        [2,8,7,4,1,9,6,3,5],
        [3,4,5,2,8,6,1,7,9]];

        console.log(sudoku(puzzle), solution);
})()