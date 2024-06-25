const { Character, Skill, Combat } = require('./app.js');

describe('Combat System', () => {
    let heto, monster, combat;

    beforeEach(() => {
        const fireball = new Skill('Fireball', 30, 'magical', 10);
        const slash = new Skill('Slash', 10, 'physical', 0);

        hero = new Character('Hero', 100, 30, 20, 50, [fireball, slash]);
        monster = new Character('Monster', 80, 15, 5, 30, [slash]);

        combat = new Combat([hero, monster]);
    });

    test('should execute a physical attack', () => {
        combat.attack(hero, monster);
        expect(monster.health).toBeLessThan(80);
    });

    test('should execute a magical skill', () => {
        combat.useSkill(hero, monster, 'Fireball');
        expect(monster.health).toBeLessThan(80);
        expect(hero.mana).toBe(40);
    });

    test('should end combat when one team is defeated', () => {
        combat.attack(hero, monster);
        combat.attack(hero, monster);
        combat.attack(hero, monster);
        combat.attack(hero, monster);
        expect(combat.isCombatOver()).toBe(true);
    });

    test('should determine the correct winner', () => {
        combat.attack(hero, monster);
        combat.attack(hero, monster);
        combat.attack(hero, monster);
        combat.attack(hero, monster);
        expect(combat.getWinner()).toBe('Hero');
    });
})