snail = function (array) {
    if (array.length === 0 || array[0].length === 0) return []   
    const result = []
    let top = 0, bottom = array.length - 1, right = array.length - 1, left = 0
    while(top <= bottom && left <= right) {
        // Da esquerda para a direita linha superior
        for (let col = left; col <= right; col++) {
            result.push(array[top][col])
        }
        top++
        // De cima para baixo da linha direita
        for (let row = top; row <= bottom; row++) {
            result.push(array[row][right])            
        }
        right--
        // Da direita para a esquerda na linha superior
        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                result.push(array[bottom][col])
            }
            bottom--;
        }
        // De baixo para cima na coluna da esquerda
        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                result.push(array[row][left])
            }
            left++
        }
    }
    return result
}

; (() => {
    console.log(snail([[]]), []);
    console.log(snail([[1]]), [1]);
    console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
    console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
    console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
})()