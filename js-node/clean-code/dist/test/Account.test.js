"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sinon_1 = __importDefault(require("sinon"));
const Account_1 = __importDefault(require("../src/Account"));
const CurrencyAPIFake_1 = __importDefault(require("../src/CurrencyAPIFake"));
let account;
let currencyAPI;
beforeEach(function () {
    currencyAPI = new CurrencyAPIFake_1.default();
    account = new Account_1.default(currencyAPI);
});
test("Deve criar uma conta", function () {
    const balance = account.getBalance();
    expect(balance).toBe(0);
});
test("Deve fazer um crédito de R$100,00", function () {
    account.credit(100);
    const balance = account.getBalance();
    expect(balance).toBe(100);
});
test("Deve fazer um débito de R$50,00", function () {
    account.credit(100);
    account.debit(50);
    const balance = account.getBalance();
    expect(balance).toBe(50);
});
test("Deve fazer um crédito de $100,00 fake", function () {
    account.credit(100, "USD");
    const balance = account.getBalance();
    expect(balance).toBe(500);
});
test("Deve fazer um crédito de $100,00 stub", function () {
    sinon_1.default.stub(currencyAPI, "convert").returns(600);
    account.credit(100, "USD");
    const balance = account.getBalance();
    expect(balance).toBe(600);
});
test("Deve verificar se o getBalance foi chamado pelo mais de uma vez", function () {
    const spy = sinon_1.default.spy(account, "getBalance");
    account.getBalance();
    account.getBalance();
    sinon_1.default.assert.calledTwice(spy);
});
test("Deve verificar as chamadas do credit e do getBalance com o mocky", function () {
    const mock = sinon_1.default.mock(account);
    mock.expects("credit").once().withArgs(100, "USD");
    mock.expects("getBalance").once().returns(600);
    account.credit(100, "USD");
    const balance = account.getBalance();
    expect(balance).toBe(600);
    mock.verify();
});
