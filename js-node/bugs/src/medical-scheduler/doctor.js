class Doctor {
    constructor(id, name, specialty, availability) {
        this.id = id;
        this.name = name;
        this.specialty = specialty;
        this.availability = availability; // Array de objetos { date: '2024-06-28', startTime: '09:00', endTime: '17:00' }
    }
}

module.exports = Doctor;
