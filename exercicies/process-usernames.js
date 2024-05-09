// Função para processar o nome dos usuários
function processUsernames(usernames) {
    const total = usernames.length;
    const uniqueSet = new Set(usernames);
    const unique = uniqueSet.size;
    const duplicates = total - unique;
    const sortedUnique = Array.from(uniqueSet).sort();
    return { sortedUnique, total, unique, duplicates };
}

const usernames = ["Lucas", "Felipe", "Leticia", "Leticia","Ana Julia", "Jaqueline", "Fabricio"];
const { sortedUnique, total, unique, duplicates } = processUsernames(usernames);
console.log("Nomes ordenados unicos:");
sortedUnique.forEach((name) => console.log(name));
console.log(`Total: ${total}`);
console.log(`Únicos: ${unique}`);
console.log(`Duplicatas: ${duplicates}`);