const readline = require("readline");

function dividingTheWatermelo(weight) {
    if (weight < 4 || weight % 2 !== 0) {
        return "NO";
    }
    return "YES";
}

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.on('line', (input) => {
    const weight = parseInt(input);
    console.log(dividingTheWatermelo(weight));
    r1.close();
})

