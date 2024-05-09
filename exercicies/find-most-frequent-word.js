function findMostFrequentWord(text) {
    // Transformar a franse em minúsculo e converter em um array
    const lowerCaseInput = text.toLowerCase();
    const words = lowerCaseInput.split(/\W+/)
    
    // Contar a frequência de cada palavra
    const wordCount = new Map();
    for (const word of words) {
        if (word) {
            wordCount.set(word, (wordCount.get(word) || 0) + 1);
        } 
    }

    // Encontrar as palavras mais frequêntes
    let maxCount = 0;
    const mostFrequentWord = [];
    for (const [word, count] of wordCount.entries()) {
        if (count > maxCount) {
            mostFrequentWord.length = 0;
            mostFrequentWord.push(word);
            maxCount = count;
        } else if (count === maxCount) {
            mostFrequentWord.push(word);
        }
    }

    // Retorna as palavras mais frequêntes de sua contagem
    return {
        mostFrequent: mostFrequentWord,
        count: maxCount
    };
}

const text = "Hello, world! This is a test. Hello again. This test is just a simple test.";

const result = findMostFrequentWord(text);
console.log(result);