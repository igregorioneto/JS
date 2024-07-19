function solution(str) {
    if (str === null || str === undefined || str === "") return []
    let result = []
    for (let i = 0; i < str.length; i += 2) {
        if (i + 1 < str.length) {
            result.push(str.substring(i, i + 2))
        } else {
            result.push(str.charAt(i) + '_');
        }
    }
    return result;
}

; (() => {
    console.log(solution("abcdef"), ["ab", "cd", "ef"]);
    console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
})()