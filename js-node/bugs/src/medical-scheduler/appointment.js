class Appointment {
    constructor(id, patientId, doctorId, dateTime) {
        this.id = id;
        this.patientId = patientId;
        this.doctorId = doctorId;
        this.dateTime = dateTime; // Objeto Date
    }
}

module.exports = Appointment;
