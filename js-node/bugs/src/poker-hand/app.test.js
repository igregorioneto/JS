const { PokerHandEvaluator, Hand, Card } = require('./app');

describe('PokerHandEvaluator', () => {
    let evaluator;

    beforeEach(() => {
        evaluator = new PokerHandEvaluator();
    })

    test('should evaluate a Royal Flush', () => {
        const hand =new Hand([
            new Card('A', 'hearts'),
            new Card('K', 'hearts'),
            new Card('Q', 'hearts'),
            new Card('J', 'hearts'),
            new Card('10', 'hearts'),
        ]);
        const result = evaluator.evaluateHand(hand);
        expect(result.rank).toBe('Royal Flush');
        expect(result.score).toBe(10);
    });

    test('should evaluate a Full House', () => {
        const hand = new Hand([
            new Card('3', 'spades'),
            new Card('3', 'hearts'),
            new Card('3', 'diamonds'),
            new Card('6', 'clubs'),
            new Card('6', 'hearts'),
        ]);
        const result = evaluator.evaluateHand(hand);
        expect(result.rank).toBe('Full House');
        expect(result.score).toBe(6);
    });

    test('should compare two hands and return the winning hand', () => {
        const hand1 = new Hand([
            new Card('A', 'hearts'),
            new Card('K', 'hearts'),
            new Card('Q', 'hearts'),
            new Card('J', 'hearts'),
            new Card('10', 'hearts')
        ]);

        const hand2 = new Hand([
            new Card('3', 'spades'),
            new Card('3', 'hearts'),
            new Card('3', 'diamonds'),
            new Card('6', 'clubs'),
            new Card('6', 'hearts'),
        ]);

        const winner = evaluator.compareHands(hand1, hand2);
        expect(winner).toBe(hand1);
    });
})