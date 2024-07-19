function sudoku(puzzle) {
    let isRunning = true;
    while(isRunning) {
        let nums = [1,2,3,4,5,6,7,8,9]
        let numsPuzzle = []
        for (let row = 0; row < puzzle.length; row++) {
            let nums = []
            for(let value of puzzle[row]) {
                if (value !== 0) 
                    nums.push(value)
            }
            numsPuzzle.push(nums)
        }

        for (let row = 0; row < puzzle.length; row++) {
            for (let col = 0; col < puzzle.length; col++) {
                if (puzzle[row][col] === 0) {
                    for (const num of nums) {
                        if (!numsPuzzle[row].includes(num)) {
                            puzzle[row][col] = num;
                            numsPuzzle[row].push(num);
                            break;
                        }
                    }
                }                
            }
        }
        isRunning = false;
        console.log(numsPuzzle)
        console.log(puzzle)
    }
    //return puzzle;
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

        console.log(sudoku(puzzle));
})()