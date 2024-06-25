class Character {
    constructor(name, health, attack, defense, mana, skills = []) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.mana = mana;
        this.skills = skills;
    }
}

class Skill {
    constructor(name, damage, type, manaCost) {
        this.name = name;
        this.damage = damage;
        this.type = type; // 'physical', 'magical'
        this.manaCost = manaCost;
    }
}

class Combat {
    constructor(participants) {
        this.participants = participants;
        this.currentTurn = 0;
    }

    nextTurn() {
        // Implementar a lógica para ir para o próximo turno
    }

    attack(attacker, defender) {
        // Implementar a lógica do ataque
        const damage = Math.max(0, attacker.attack - defender.defense);
        defender.health -= damage;
    }

    useSkill(attacker, defender, skillName) {
        // Implementa a lógica para usar uma habilidade
        const skill = attacker.skills.find(s => s.name === skillName);
        if (!skill) {
            throw new Error(`${attacker.name} não conhece a habilidade ${skillName}`);
        }

        if (attacker.mana < skill.manaCost) {
            throw new Error(`${attacker.name} não tem mana suficiente para usar ${skillName}`);
        }

        attacker.mana -= skill.manaCost;

        const damage = skill.damage;
        defender.health -= damage;
    }

    isCombatOver() {
        // Implementar a lógica para verificar se o combate terminou
        const aliveTeams = new Set();
        this.participants.forEach(character => {
            if (character.health > 0) {
                aliveTeams.add(character.name);
            }
        })
        return aliveTeams.size <= 1;
    }

    getWinner() {
        // Implementa a lógica para determinar um vencedor
        const aliveTeams = this.participants.filter(character => character.health > 0);
        console.log(aliveTeams)
        return aliveTeams.length ? aliveTeams[0].name : null;
    }
}

module.exports = { Character, Skill, Combat };