interface Character {
    name: string;
    health: number;
    attack(target: Character): void;
    defend(amount: number): void;
}

class Monter implements Character {
    name: string;
    health: number;
    strength: number;

    constructor(name: string, health: number, strength: number) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    attack(target: Character): void {
        throw new Error("Method not implemented.");
    }
    defend(amount: number): void {
        throw new Error("Method not implemented.");
    }
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

class Hero implements Character {
    name: string;
    health: number;
    power: number;

    constructor(name: string, health: number, power: number) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    attack(target: Character): void {
        throw new Error("Method not implemented.");
    }
    defend(amount: number): void {
        throw new Error("Method not implemented.");
    }
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

abstract class GameCharacter implements Character {
    name: string;
    health: number;
    abstract attack(target: Character): void;
    abstract defend(amount: number): void;
    abstract specialMove(): void;
    abstract useSpecialMove(): void;
}

class AdvancedMonster extends GameCharacter {
    name: string;
    health: number;
    strength: number;

    constructor(name: string, health: number, strength: number) {
        super();
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    attack(target: Character): void {
        throw new Error("Method not implemented.");
    }
    defend(amount: number): void {
        throw new Error("Method not implemented.");
    }
    specialMove(): void {
        throw new Error("Method not implemented.");
    }
    useSpecialMove(): void {
        throw new Error("Method not implemented.");
    }    
}

class AdvancedHero extends GameCharacter {
    name: string;
    health: number;
    power: number;

    constructor(name: string, health: number, power: number) {
        super();
        this.name = name;
        this.health = health;
        this.power = power;
    }

    attack(target: Character): void {
        throw new Error("Method not implemented.");
    }
    defend(amount: number): void {
        throw new Error("Method not implemented.");
    }
    specialMove(): void {
        throw new Error("Method not implemented.");
    }
    useSpecialMove(): void {
        throw new Error("Method not implemented.");
    }
    
}

function battle(hero: AdvancedHero, monster: AdvancedMonster) {
    hero.attack(monster);
    monster.attack(hero);

    hero.useSpecialMove();
    monster.useSpecialMove();
}

const hero = new AdvancedHero("Knight", 100, 15);
const monster = new AdvancedMonster("Dragon", 100, 12);

battle(hero, monster);