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
});

test('Cancelar consulta', function () {    
});

test('Relatório de consultas agendadas', function () {    
});

test('Simular o envio de notificações', function () {    
});