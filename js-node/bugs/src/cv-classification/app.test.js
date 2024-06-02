const { describe, it } = require('mocha');
const sinon = require('sinon');

function sum(a, b) {
    return a + b;
}

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

const Candidate = require('./candidate');
const Recruiter = require('./recruiter');
const ResumeClassifier = require('./resumeClassifier');

const jobDescription = "Looking for a software engineer with experience in JavaScript, Node.js, and React.";

const candidate1 = new Candidate("John Doe", 5, ["JavaScript", "Node.js", "React", "MongoDB"]);
const candidate2 = new Candidate("Jane Smith", 3, ["Python", "Django", "JavaScript"]);

const recruiter = new Recruiter("Larissa");
const classifier = new ResumeClassifier(jobDescription);

recruiter.reviewResume(candidate1, 8, "Impressive experience and skills.");
classifier.classifyResume(candidate1);

recruiter.reviewResume(candidate2, 5, "Lacks experience in required technologies.");
classifier.classifyResume(candidate2);