const Patient = require('./patient');
const Doctor = require('./doctor');
const Appointment = require('./appointment');

class MedicalScheduler {
    constructor() {
        this.patients = [];
        this.doctors = [];
        this.appointments = [];
    }

    registerPatient(name, age, contactInfo) {
        // Implementar lógica para registrar um novo paciente
        const paciente = new Patient(this.patients.length + 1, name, age, contactInfo);
        this.patients.push(paciente);
        return paciente;
    }

    registerDoctor(name, specialty, availability) {
        // Implementar lógica para registrar um novo médico
        const doctor = new Doctor(this.doctors.length + 1, name, specialty, availability);
        this.doctors.push(doctor);
        return doctor;
    }

    scheduleAppointment(patientId, doctorId, dateTime) {
        // Implementar lógica para agendar uma consulta
        const appointment = new Appointment(this.appointments.length + 1, patientId, doctorId, dateTime);
        this.appointments.push(appointment);
        return appointment;
    }

    cancelAppointment(appointmentId) {
        // Implementar lógica para cancelar uma consulta
        const index = this.appointments.findIndex(app => app.id === appointmentId);
        if (index !== -1) {
            const [cancelAppointment] = this.appointments.splice(index, 1);
            return cancelAppointment;
        }
        return null;
    }

    generateReport(startDate, endDate) {
        // Implementar lógica para gerar um relatório de consultas agendadas
        return this.appointments.filter(app => app.dateTime >= startDate && app.dateTime <= endDate);
    }

    sendNotification(type, recipientId, message) {
        // Implementar lógica para simular o envio de notificações
        console.log(`Notification sent to ${recipientId}: ${message}`);
    }
}

module.exports = MedicalScheduler;
