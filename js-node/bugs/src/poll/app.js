class Poll {
    constructor(id, question, options) {
        this.id = id;
        this.question = question;
        this.options = options;
        this.votes = new Map(options.map(option => [option, []]));
    }

    vote(optionIndex, userId) {
        // Implemente a lógica para registrar o voto de um usuário para uma opção específica
        const option = this.options[optionIndex];
        if (this.votes.has(option)) {
            this.votes.get(option).push(userId);
        }
    }

    getTotalVotes() {
        // Implemente a lógica para retornar o número total de votos em todas as opções
        let totalVotes = 0;
        for (const votesArray of this.votes.values()) {
            totalVotes += votesArray.length;
        }
        return totalVotes;
    }

    getVotesPerOption() {
        // Implemente a lógica para retornar um mapa com o número de votos para cada opção
        let result = new Map();
        this.votes.forEach((votesArray, option) => {
            result.set(option, votesArray.length)
        })
        return result;
    }

    getVotePercentage(optionIndex) {
        // Implemente a lógica para retornar a porcentagem de votos para uma opção específica
        const option = this.options[optionIndex];
        let qtdOptionsVotes = 0;
        if (this.votes.has(option)) {
            qtdOptionsVotes++;
        }
        console.log(qtdOptionsVotes)
        return parseFloat(((2 * 100) / this.getTotalVotes()).toFixed(2));
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
