var number = function (array) {
    if (array.length === 0) return [];
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(`${i + 1}: ${array[i]}`);
    }
    return result;
}

var numberRefactoring = function (array) {
    return array.map((line, index) => {
        return `${index + 1}: ${line}`;
    })
}

;(() => {
    console.log(number(["a", "b", "c"]))
    console.log(numberRefactoring(["a", "b", "c"]))
})();