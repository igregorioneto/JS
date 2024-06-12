const { PollingApp } = require('./app');

describe('Poll App System', () => {
    test('should register a vote for a specific option', () => {
        const pollApp = new PollingApp();
        const poll = pollApp.createPoll('Favorite Color', ['Red', 'Blue', 'Green']);
        poll.vote(0, 'user1');
        poll.vote(1, 'user2');
        expect(poll.getVotesPerOption().get('Red')).toBe(1);
        expect(poll.getVotesPerOption().get('Blue')).toBe(1);
        expect(poll.getVotesPerOption().get('Green')).toBe(0);
    });

    test('should return the total number of votes', () => {
        const pollApp = new PollingApp();
        const poll = pollApp.createPoll('Favorite Animal', ['Cat', 'Dog']);
        poll.vote(0, 'user1');
        poll.vote(0, 'user2');
        expect(poll.getTotalVotes()).toBe(2);
    });

    test('should return votes per option', () => {
        const pollApp = new PollingApp();
        const poll = pollApp.createPoll('Favorite Food', ['Pizza', 'Sushi']);
        poll.vote(0, 'user1');
        poll.vote(1, 'user2');
        poll.vote(1, 'user3');
        poll.vote(1, 'user4');
        expect(poll.getVotesPerOption()).toEqual(new Map([['Pizza', 1], ['Sushi', 3]]));
    });

    test('should return the vote percentage for a specific option', () => {
        const pollApp = new PollingApp();
        const poll = pollApp.createPoll('Favorite Language', ['JavaScript', 'Python']);
        poll.vote(0, 'user1');
        poll.vote(0, 'user2');
        poll.vote(1, 'user3');
        expect(poll.getVotePercentage(0)).toBe(66.67); // Approximately 66.67%
    });

    test('should allow a user to vote in a poll', () => {
        const pollApp = new PollingApp();
        const poll = pollApp.createPoll('Favorite Movie', ['Inception', 'Interstellar']);
        pollApp.voteInPoll(poll.id, 0, 'user1');
        expect(poll.getVotesPerOption().get('Inception')).toBe(1);
    });

    test('should list poll results', () => {
        const pollApp = new PollingApp();
        const poll = pollApp.createPoll('Favorite Season', ['Spring', 'Summer', 'Fall', 'Winter']);
        poll.vote(0, 'user1');
        poll.vote(0, 'user2');
        poll.vote(1, 'user3');
        const results = pollApp.listPollResults(poll.id);
        expect(results.question).toBe('Favorite Season');
        expect(results.options).toEqual(['Spring', 'Summer', 'Fall', 'Winter']);
        expect(results.votesPerOption).toEqual(new Map([['Spring', 2], ['Summer', 1], ['Fall', 0], ['Winter', 0]]));
        expect(results.votePercentages).toEqual([50, 25, 0, 0]); // Percentage of votes for each option
    });

})