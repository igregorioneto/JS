class ResumeClassifier {
    constructor(jobDescription) {
        this.jobDescription = String(jobDescription);
        this.classification = [];
        this.skillsConsult = ["JavaScript", "Node.js", "React", "Java", "MongoDB", "PostgreSQL"]
        this.countSkillsForConsult = 0;

        for (let i = 0; i < this.skillsConsult.length; i++) {
            let skill = this.skillsConsult[i];
            let regex = new RegExp(`\\b${skill}\\b`, 'i');
            if (regex.test(this.jobDescription)) {
                this.countSkillsForConsult++;
            }            
        }
        
    }

    // Implementar a função de classificação automática dos currículos
    classifyResume(candidate) {
        // Lógica de classificação automática aqui
        let countSkillsEquals = 0;
        for (let i = 0; i < candidate.skills.length; i++) {
            if (this.jobDescription.includes(candidate.skills[i])){
                countSkillsEquals++;
            }
        }
        
        const percentClassify =  countSkillsEquals >= this.countSkillsForConsult ? 100 : (countSkillsEquals * 100) / this.countSkillsForConsult;
        this.classification.push({
            candidate: candidate.name,
            percentForSkylls: percentClassify,
            classification: (percentClassify / 100) * candidate.experience
        })

        this.classification.sort((a, b) => {
            if (a.classification > b.classification) {
                return -1;
            }
            if (a.classification < b.classification) {
                return 1;
            }
            return 0;
        })
    }
}

module.exports = ResumeClassifier;