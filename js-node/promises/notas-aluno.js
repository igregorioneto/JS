/**
 * 1 - Obter um aluno (Após 1 segundo)
 * 2 - Obter notas de um aluno (Após 2 segundos)
 * 3 - Obter média das notas (Após 1 segundo) 
 */

const notasAlunos = {
    1: [7, 8, 9, 10],
    2: [6, 10, 9, 8],
    3: [10, 8, 9, 10],
    4: [10, 10, 10, 9.5]
}

function obterAluno() {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'João',
                idade: 25
            })
        }, 1000);
    });
}

function obterNotas(idAluno) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                notas: notasAlunos[idAluno]
            })
        }, 2000);
    });
}

function obterMedia(notas) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const soma = notas.reduce((acc, nota) => acc + nota, 0);
            return resolve(soma / notas.length)
        }, 1000);
    });
}

(async () => {
    try {
        const aluno = await obterAluno();
        const notas = await obterNotas(aluno.id);
        const media = await obterMedia(notas.notas);

        console.log(`
                Nome: ${aluno.nome},
                idade: ${aluno.idade},
                Notas: ${notas.notas.join(',')},
                Média: ${media.toFixed(2)}
            `);
    } catch (error) {
        console.error('Erro ao obter informações', error);
    }
})();


// Outra forma de chamar a promise
obterAluno()
    .then(aluno => {
        return obterNotas(aluno.id).then(notas => ({
            aluno: aluno,
            notas: notas.notas
        }));
    })
    .then(result => {
        return obterMedia(result.notas).then(media => ({
            aluno: result.aluno,
            notas: result.notas,
            media: media
        }));
    })
    .then(result => {
        console.log(`
                Nome: ${result.aluno.nome},
                idade: ${result.aluno.idade},
                Notas: ${result.notas.join(',')},
                Média: ${result.media.toFixed(2)}
            `);
    })
    .catch(error => {
        console.error('Erro ao obter informações', error);
    });