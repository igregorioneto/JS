class Poll {
    constructor(id, question, options) {
        this.id = id;
        this.question = question;
        this.options = options;
        this.votes = new Map();
    }

    vote(optionIndex, userId) {
        // Implemente a lógica para registrar o voto de um usuário para uma opção específica
    }

    getTotalVotes() {
        // Implemente a lógica para retornar o número total de votos em todas as opções
    }

    getVotesPerOption() {
        // Implemente a lógica para retornar um mapa com o número de votos para cada opção
    }

    getVotePercentage(optionIndex) {
        // Implemente a lógica para retornar a porcentagem de votos para uma opção específica
    }
}

class PollingApp {
    constructor() {
        this.polls = [];
    }

    createPoll(question, options) {
        const id = this.polls.length + 1;
        const newPoll = new Poll(id, question, options);
        this.polls.push(newPoll);
        return newPoll;
    }

    getPollById(pollId) {
        // Implemente a lógica para retornar uma enquete pelo seu ID
    }

    voteInPoll(pollId, optionIndex, userId) {
        // Implemente a lógica para registrar o voto de um usuário em uma enquete específica
    }

    listPollResults(pollId) {
        // Implemente a lógica para listar os resultados de uma enquete específica
    }
}

module.exports = { PollingApp, Poll };
