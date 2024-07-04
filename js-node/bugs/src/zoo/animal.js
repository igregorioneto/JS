class Animal {
    constructor(id, name, species, healthStatus = 'healthy', lastCheckupDate = new Date()) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.healthStatus = healthStatus;
        this.lastCheckupDate = lastCheckupDate;
        this.checkUp = false;
        this.isFed = false;
    }

    performCheckup() {
        // Implementar lógica para atualizar o estado de saúde e a data do último check-up
        this.checkUp = true;
        this.lastCheckupDate = new Date();
    }

    feed() {
        // Implementar lógica para alimentar o animal
        this.isFed = true;
    }
}

module.exports = Animal;
