const after = require('./after');

test("Deve calcular o valor de uma corrida de taxi nos dias normais", function() {
    const distance = 1000;
    const date = new Date("2024-06-26T10:00:00");
    const price = after.calculateRide(distance, date);
    expect(price).toBe(2100);
})

test("Deve calcular o valor de uma corrida de taxi nos domingos", function() {
    const distance = 1000;
    const date = new Date("2024-06-23T10:00:00");
    const price = after.calculateRide(distance, date);
    expect(price).toBe(2900);
})

test("Deve calcular o valor de uma corrida de taxi a partir das 22 horas", function() {
    const distance = 1000;
    const date = new Date("2024-06-23T22:00:00");
    const price = after.calculateRide(distance, date);
    expect(price).toBe(3900);
})

test("Deve ocorrer um erro referente ao tipo da distancia", function() {
    const distance = "1000";
    const date = new Date("2024-06-23T22:00:00");
    expect(() => after.calculateRide(distance, date)).toThrow(new Error('Invalid parameter distance'));
})

test("Deve ocorrer um erro referente referente a data", function() {
    const distance = 1000;
    const date = "2024-06-23T22:00:00";
    expect(() => after.calculateRide(distance, date)).toThrow(new Error('Invalid parameter date'));
})