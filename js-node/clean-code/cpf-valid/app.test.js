const before = require('./before');

test("Deve validar o CPF A", function() {
    const isValid = before.validate("935.411.347-80");
    expect(isValid).toBeTruthy();
})

test("Deve validar o CPF B", function() {
    const isValid = before.validate("357.188.378-05");
    expect(isValid).toBeTruthy();
})

test("Deve validar o CPF C", function() {
    const isValid = before.validate("987.654.321-00");
    expect(isValid).toBeTruthy();
})

test("Não deve validar o CPF", function() {
    const isValid = before.validate("111.111.111-11");
    expect(isValid).toBeFalsy();
})

test("Não deve validar o CPF (Todos os números iguais)", function() {
    const isValid = before.validate("111.111.111-11");
    expect(isValid).toBeFalsy();
})

test("Não deve validar o CPF (número aleatório)", function() {
    const isValid = before.validate("123.456.789-00");
    expect(isValid).toBeFalsy();
})

test("Não deve validar o CPF (Além do limite)", function() {
    const isValid = before.validate("123.456.789-00000000000");
    expect(isValid).toBeFalsy();
})

test("Não deve validar o CPF (Abaixo do limite)", function() {
    const isValid = before.validate("123.456.789");
    expect(isValid).toBeFalsy();
})

test("Não deve validar o CPF (Valor null)", function() {
    const isValid = before.validate(null);
    expect(isValid).toBeFalsy();
})

test("Não deve validar o CPF (Valor undefined)", function() {
    const isValid = before.validate(undefined);
    expect(isValid).toBeFalsy();
})