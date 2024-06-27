interface Character {
    name: string;
    health: number;
    attack(target: Character): void;
    defend(amount: number): void;
}

abstract class GameCharacter implements Character {
    name: string;
    health: number;
    attack(target: Character): void {
        throw new Error("Method not implemented.");
    }
    defend(amount: number): void {
        throw new Error("Method not implemented.");
    }
    abstract specialMove(): void;
    abstract useSpecialMove(): void;
}

class Monter extends GameCharacter {
    specialMove(): void {
        throw new Error("Method not implemented.");
    }
    useSpecialMove(): void {
        throw new Error("Method not implemented.");
    }
    fireball(target: Character): void {
        throw new Error("Method not implemented.");
    }
}

class Hero extends GameCharacter {
    specialMove(): void {
        throw new Error("Method not implemented.");
    }
    useSpecialMove(): void {
        throw new Error("Method not implemented.");
    }
    punch(target: Character): void {
        throw new Error("Method not implemented.");
    }
}