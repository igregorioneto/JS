; (function () {
    const Candidate = require('./candidate');
    const Recruiter = require('./recruiter');
    const ResumeClassifier = require('./resumeClassifier');


    const jobDescription = "Looking for a software engineer with experience in JavaScript, Node.js, and React.";

    const candidate1 = new Candidate("John Doe", 5, ["JavaScript", "Node.js", "React", "MongoDB"]);
    const candidate2 = new Candidate("Jane Smith", 3, ["Python", "Django", "JavaScript"]);
    const candidate3 = new Candidate("Fabricio", 5, ["JavaScript", "Node.js", "React"]);

    const recruiter = new Recruiter("Larissa");
    const classifier = new ResumeClassifier(jobDescription);

    recruiter.reviewResume(candidate1, 8, "Impressive experience and skills.");
    classifier.classifyResume(candidate1);

    recruiter.reviewResume(candidate2, 5, "Lacks experience in required technologies.");
    classifier.classifyResume(candidate2);

    recruiter.reviewResume(candidate3, 5, "Impressive experience and skills.");
    classifier.classifyResume(candidate3);

    console.log(classifier)

    module.exports = {
        candidate1,
        candidate2,
        recruiter,
        classifier
    };
})();