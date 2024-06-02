class Recruiter {
    constructor(name) {
        this.name = name;
    }

    reviewResume(candidate, rating, comment) {
        candidate.rating = rating;
        candidate.comment = comment;
        candidate.recruiter = this.name;
    }
}

module.exports = Recruiter;