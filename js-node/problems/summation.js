var summation = function (num) {
    let total = 0
    for (let i = 0; i < num; i++) {
        total += (i + 1)
    }
    return total
}

;(() => {
    console.log(summation(8))
})()