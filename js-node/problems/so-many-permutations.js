function permutations(string) {
    if (string.length <= 1) return [string]
    const permutationsArr = [];
    const permutationsSet = new Set();
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (permutationsSet.has(char)) continue;
        permutationsSet.add(char);
        const permut = string.slice(0, i) + string.slice(i + 1);
        for (const permutation of permutations(permut)) {
            permutationsArr.push(char + permutation);
        }
    }
    return permutationsArr;
}

; (() => {
    console.log(permutations('a'), ['a']);
    console.log(permutations('ab'), ['ab', 'ba']);
    console.log(permutations('aabb'), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
})()