class Candidate {
    constructor(name, experience, skills) {
        this.name = name;
        this.experience = experience; // Experiência em anos
        this.skills = skills; // Lista de habilidades do candidato
        this.rating = 0;
        this.comment = 0;
        this.recruiter = "";
    }
}

module.exports = Candidate;