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

function obterAluno(callback) {
    setTimeout(() => {
        return callback(null,{
            id: 3,
            nome: 'João',
            idade: 25
        })
    }, 1000);
}

function obterNotaAluno(idAluno, callback) {
    setTimeout(() => {
        return callback(null, {
            notas: notasAlunos[idAluno],
        })
    }, 2000);
}

function mediaAluno(notas, callback) {
    setTimeout(() => {
        const soma = notas.reduce((acc, nota) => acc + nota, 0);
        return callback(null, soma / notas.length)
    }, 1000);
}

obterAluno(function resolveAluno(errorAluno, aluno) {
    if (errorAluno) {
        console.error('Erro ao obter aluno', errorAluno);
        return;
    }

    obterNotaAluno(aluno.id, function resolveNotas(erroNotas, notas) {
        if (erroNotas) {
            console.error('Erro ao obter notas', erroNotas);
            return;
        }

        mediaAluno(notas.notas, function resolveMedia(erroMedia, media) {
            if (erroMedia) {
                console.error('Erro ao obter media', erroMedia);
                return;
            }
            console.log(`
                Nome: ${aluno.nome},
                idade: ${aluno.idade},
                Notas: ${notas.notas.join(',')},
                Média: ${media.toFixed(2)}
            `);
        })
    })
});