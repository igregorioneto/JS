class Recruiter {
    constructor(name) {
        this.name = name;
    }

    reviewResume(candidate, rating, comment) {
        // Implementar a função de revisão do currículo pelo recrutador
        console.log(`Recruiter ${this.name} reviewed resume of ${candidate.name}:`);
        console.log(`Rating: ${rating}`);
        console.log(`Comment: ${comment}`);
    }
}

module.exports = Recruiter;