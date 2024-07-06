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