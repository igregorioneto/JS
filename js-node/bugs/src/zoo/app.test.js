const Zoo = require('./zoo');
const Animal = require('./animal');

describe('Zoo Management System', () => {
    let zoo;

    beforeEach(() => {
        zoo = new Zoo();
    });

    test('should add a new animal to the zoo', () => {
        zoo.addAnimal('Leo', 'Lion');
        expect(zoo.animals.length).toBe(1);
        expect(zoo.animals[0].name).toBe('Leo');
        expect(zoo.animals[0].species).toBe('Lion');
    });

    test('should perform checkup on an animal', () => {
        zoo.addAnimal('Manny', 'Elephant');
        const animalId = zoo.animals[0].id;
        zoo.performCheckup(animalId);
        const animal = zoo.animals.find(a => a.id === animalId);
        expect(animal.lastCheckupDate).toBeInstanceOf(Date);
        expect(animal.healthStatus).toBe('healthy');
    });

    test('should feed an animal', () => {
        zoo.addAnimal('Benny', 'Bear');
        const animalId = zoo.animals[0].id;
        zoo.feedAnimal(animalId);
        const animal = zoo.animals.find(a => a.id === animalId);
        expect(animal.isFed).toBe(true); // isFed deve ser definido na lógica de alimentação
    });

    test('should list all animals in the zoo', () => {
        zoo.addAnimal('Sammy', 'Snake');
        zoo.addAnimal('Tina', 'Tiger');
        const allAnimals = zoo.listAllAnimals();
        expect(allAnimals.length).toBe(2);
        expect(allAnimals[0].name).toBe('Sammy');
        expect(allAnimals[1].name).toBe('Tina');
    });
});
