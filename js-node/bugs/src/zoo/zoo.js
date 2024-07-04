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
        const animal = this.animals.find(animal => animal.id === animalId);
        animal.performCheckup();
    }

    feedAnimal(animalId) {
        // Implementar lógica para alimentar um animal específico
        const animal = this.animals.find(animal => animal.id === animalId);
        animal.feed();
    }

    listAllAnimals() {
        // Implementar lógica para listar todos os animais no zoológico
        return this.animals;
    }
}

module.exports = Zoo;
