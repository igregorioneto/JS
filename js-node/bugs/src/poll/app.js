class Poll {
    constructor(id, question, options) {
        this.id = id;
        this.question = question;
        this.options = options;
        this.votes = new Map();
    }

    vote(optionIndex, userId) {
        // Implemente a lógica para registrar o voto de um usuário para uma opção específica
        this.votes.set(this.options[optionIndex], userId);
    }

    getTotalVotes() {
        // Implemente a lógica para retornar o número total de votos em todas as opções
        console.log(this.votes.size())
        return this.votes.size();
    }

    getVotesPerOption() {
        // Implemente a lógica para retornar um mapa com o número de votos para cada opção
        let result = new Map();
        for (const option of this.options) {
            if (!result.has(option)) {
                result.set(option, 1);
            } else {
                result.set(option, result.get(option) + 1);
            }
        }
        return result;
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
        const poll = this.polls.find(p => p.id === pollId);
        if (poll) {
            return poll;
        }
    }

    voteInPoll(pollId, optionIndex, userId) {
        // Implemente a lógica para registrar o voto de um usuário em uma enquete específica
        const poll = this.getPollById(pollId);
        if (optionIndex > poll.length - 1) {
            return;
        }
        poll.vote(optionIndex, userId);
    }

    listPollResults(pollId) {
        // Implemente a lógica para listar os resultados de uma enquete específica
    }
}

module.exports = { PollingApp, Poll };
