const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
}

class Hand {
    constructor(cards) {
        this.cards = cards;
    }
}

class PokerHandEvaluator {
    constructor() { }

    // Método para avaliar a mão do poker
    evaluateHand(hand) {
        // Implementar a lógica funcional para avaliar a mão
        const handRanking = [
            this.isRoyalFlush,
            this.isStraightFlush,
            this.isFourOfAKind,
            this.isFullHouse,
            this.isFlush,
            this.isStraight,
            this.isThreeOfAKind,
            this.isTwoPair,
            this.isOnePair,
            this.isHighCard
        ];

        for (let ranking of handRanking) {
            const result = ranking(hand.cards);
            if (result) return result;
        }
    }

    // Método funcional para comparar duas mãos
    compareHands(hand1, hand2) {
        const hand1Evaluation = this.evaluateHand(hand1);
        const hand2Evaluation = this.evaluateHand(hand2);

        if (hand1Evaluation.score > hand2Evaluation.score) {
            return hand1;
        } else if (hand1Evaluation.score < hand2Evaluation.score) {
            return hand2;
        } else {
            // Implementar a lógica de desempate
            return this.breakTie(hand1Evaluation, hand2Evaluation);
        }
    }

    // Métodos funcionais para identificar a classificação de mãos
    isRoyalFlush(cards) {
        
    }

    isStraightFlush(cards) {

    }

    isFourOfAKind(cards) {

    }

    isFullHouse(cards) {

    }

    isFlush(cards) {

    }

    isStraight(cards) {

    }

    isThreeOfAKind(cards) {

    }

    isTwoPair(cards) {

    }

    isOnePair(cards) {

    }

    isHighCard(cards) {

    }

    breakTie(cards) {

    }
}

module.exports = { PokerHandEvaluator, Hand, Card };