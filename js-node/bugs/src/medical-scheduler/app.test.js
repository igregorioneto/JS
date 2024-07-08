const Appointment = require("./appointment");
const Doctor = require("./doctor");
const MedicalScheduler = require("./medicalScheduler");
const Patient = require("./patient");

let medicalScheduler = null;
beforeEach(() => {
    medicalScheduler = new MedicalScheduler();
})

test('Registro de um Paciente', function () {    
    const result = new Patient(1, 'João', 70, '8499999999');    
    const patient = medicalScheduler.registerPatient('João', 70, '8499999999');
    expect(patient.name).toBe(result.name);
    expect(patient.age).toBe(result.age);
    expect(patient.contactInfo).toBe(result.contactInfo);
});

test('Registro de um Médico', function () {    
    const result = new Doctor(1, 'Larissa', 'Clinica Geral', ['07:00', '10:00', '14:00']);    
    const doctor = medicalScheduler.registerDoctor('Larissa', 'Clinica Geral', ['07:00', '10:00', '14:00']);
    expect(doctor.name).toBe(result.name);
    expect(doctor.specialty).toBe(result.specialty);
    expect(doctor.availability).toEqual(result.availability);
});

test('Agendamento de consulta', function () {    
    const patient = medicalScheduler.registerPatient('João', 70, '8499999999');
    const doctor = medicalScheduler.registerDoctor('Larissa', 'Clinica Geral', ['07:00', '10:00', '14:00']);
    const appointment = medicalScheduler.scheduleAppointment(patient.id, doctor.id, new Date());
    expect(appointment.patientId).toBe(patient.id);
    expect(appointment.doctorId).toBe(doctor.id);
    expect(appointment.dateTime).toBeInstanceOf(Date);
});

test('Cancelar consulta', function () {   
    const patient = medicalScheduler.registerPatient('João', 70, '8499999999');
    const doctor = medicalScheduler.registerDoctor('Larissa', 'Clinica Geral', ['07:00', '10:00', '14:00']);
    const appointment = medicalScheduler.scheduleAppointment(patient.id, doctor.id, new Date());
    const cancelAppointment = medicalScheduler.cancelAppointment(appointment.id);
    expect(cancelAppointment).toBeDefined();
    expect(cancelAppointment.id).toBe(appointment.id);
    expect(medicalScheduler.appointments).not.toContainEqual(cancelAppointment);
});

test('Relatório de consultas agendadas', function () {    
    const patient = medicalScheduler.registerPatient('João', 70, '8499999999');
    const patient2 = medicalScheduler.registerPatient('Maria', 30, '8498888888');
    const doctor = medicalScheduler.registerDoctor('Larissa', 'Clinica Geral', ['07:00', '10:00', '14:00']);
    const date1 = new Date();
    const date2 = new Date(date1.getTime() + 24 * 60 * 60 * 1000);
    medicalScheduler.scheduleAppointment(patient.id, doctor.id, date1);
    medicalScheduler.scheduleAppointment(patient2.id, doctor.id, date2);

    const report = medicalScheduler.generateReport(date1, date2);
    expect(report).toBeDefined();
    expect(report.length).toBe(2);
    expect(report[0].id).toBe(patient.id);
    expect(report[1].id).toBe(patient2.id);
});

test('Simular o envio de notificações', function () {    
    const sendNotification = jest.spyOn(medicalScheduler, 'sendNotification');
    const patient = medicalScheduler.registerPatient('João', 70, '8499999999');
    medicalScheduler.sendNotification('appointment', patient.id, 'Consulta agendada!');
    expect(sendNotification).toHaveBeenCalledWith('appointment', patient.id, 'Consulta agendada!');
});