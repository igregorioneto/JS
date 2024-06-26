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
        if (candidate.recruiter && (candidate.rating >= 0 && candidate.rating <= 10)) {
            for (let i = 0; i < candidate.skills.length; i++) {
                if (this.jobDescription.includes(candidate.skills[i])){
                    countSkillsEquals++;
                }
            }
            
            const percentClassify =  countSkillsEquals >= this.countSkillsForConsult 
                ? 100 : (countSkillsEquals * 100) / this.countSkillsForConsult;

            this.classification.push({
                candidate: candidate.name,
                percentForSkylls: percentClassify,
                classification: (percentClassify / 100) * candidate.experience * candidate.rating
            })
    
            this.classification.sort((a, b) => b.classification - a.classification);
        }        
    }
}

module.exports = ResumeClassifier;