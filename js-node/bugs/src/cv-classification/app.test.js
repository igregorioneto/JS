const { describe, it } = require('mocha');
const sinon = require('sinon');

const Candidate = require('./candidate');
const Recruiter = require('./recruiter');
const ResumeClassifier = require('./resumeClassifier');

const { candidate1, candidate2, classifier, recruiter } = require('./app');


/*function sum(a, b) {
    return a + b;
}

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});*/

test("Creating Candidate 1", async () => {        
    expect(candidate1).toBeInstanceOf(Candidate);
    expect(candidate1.name).toBe("John Doe");
    expect(candidate1.experience).toBe(5);
    expect(candidate1.skills).toEqual(["JavaScript", "Node.js", "React", "MongoDB"]);
})

test("Creating Candidate 2", async () => {        
    expect(candidate2).toBeInstanceOf(Candidate);
    expect(candidate2.name).toBe("Jane Smith");
    expect(candidate2.experience).toBe(3);
    expect(candidate2.skills).toEqual(["Python", "Django", "JavaScript"]);
})

test("Creating Recruiter", async () => {        
    expect(recruiter).toBeInstanceOf(Recruiter);
    expect(recruiter.name).toBe("Larissa");
})

test("Creating Classifier", async () => {        
    const jobDescription = "Looking for a software engineer with experience in JavaScript, Node.js, and React.";
    expect(classifier).toBeInstanceOf(ResumeClassifier);
    expect(classifier.jobDescription).toBe(jobDescription);
})

test("Review Resume Candidate 1", async () => {        
    recruiter.reviewResume(candidate1, 8, "Impressive experience and skills.");
    expect(candidate1.rating).toBe(8);
    expect(candidate1.comment).toBe("Impressive experience and skills.");
})

test("Classifier Candidate 1", async () => {        
    classifier.classifyResume(candidate1);
    const classifierCandidate1 = classifier.classification[0];
    const result = {
        candidate: 'John Doe',
        percentForSkylls: 100,
        classification: 40
      };
    expect(classifierCandidate1).toEqual(result);
});



