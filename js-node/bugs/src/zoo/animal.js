class Animal {
    constructor(id, name, species, healthStatus = 'healthy', lastCheckupDate = new Date()) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.healthStatus = healthStatus;
        this.lastCheckupDate = lastCheckupDate;
    }

    performCheckup() {
        // Implementar lógica para atualizar o estado de saúde e a data do último check-up
    }

    feed() {
        // Implementar lógica para alimentar o animal
    }
}

module.exports = Animal;
