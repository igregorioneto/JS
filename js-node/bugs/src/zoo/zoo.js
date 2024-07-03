const Animal = require('./animal');

class Zoo {
    constructor() {
        this.animals = [];
    }

    addAnimal(name, species) {
        const id = this.animals.length + 1;
        const newAnimal = new Animal(id, name, species);
        this.animals.push(newAnimal);
    }

    performCheckup(animalId) {
        // Implementar lógica para realizar o check-up de um animal específico
    }

    feedAnimal(animalId) {
        // Implementar lógica para alimentar um animal específico
    }

    listAllAnimals() {
        // Implementar lógica para listar todos os animais no zoológico
    }
}

module.exports = Zoo;
