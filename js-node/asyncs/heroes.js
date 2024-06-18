class Heroi {
    constructor(nome, nivel, energia) {
        this.nome = nome
        this.nivel = nivel
        this.energia = energia
    }

    atacar() {
        // Simula um ataque
        console.log('Atacando com a espada')
    }

    descansar() {
        // Recupera energia
        this.energia++;
    }

    async realizarMissao(missao) {
        // Realiza uma missão assíncrona
        await missao.executar();
        this.nivel++;
        this.energia++;
        return missao
    }
}

class Missao {
    constructor(nome, dificuldade, recompensa) {
        this.nome = nome;
        this.dificuldade = dificuldade;
        this.recompensa = recompensa;
    }

    async executar() {
        // Simula a execução da missão com um atraso
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`iniciando a missão: ${this.nome}`)
                resolve()
            }, Math.floor(Math.random() * 5000));
        })
        this.concluir()
    }

    concluir() {
        // Retorna a recompensa da missão
        console.log(`Parabéns ao concluir a missão ${this.nome}. Você ganhou ${this.recompensa} pontos de experiência.`)
    }
}

; (async function () {
    try {
        const heroi = new Heroi('Aragorn', 1, 100)
        const missoes = [
            new Missao('Salvar a aldeia', 'facil', 10),
            new Missao('Derrotar o dragão', 'dificil', 50),
            new Missao('Encontrar o tesouro', 'medio', 30)
        ]

        const promessasMissoes = missoes.map((missao) => heroi.realizarMissao(missao))
        const resultados = await Promise.all(promessasMissoes);
        console.log('Resultado das missões', resultados)

        const primeiraMissao = await Promise.race(promessasMissoes);
        console.log('Primeira missão concluída', primeiraMissao)
    } catch (error) {
        console.error('Erro durante a simulação do jogo', error)
    }
})();