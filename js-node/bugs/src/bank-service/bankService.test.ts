import BankService from './bankService';
import Account from './bankService';

const service = new BankService();

test('Creating account', () => {
    const account = service.createAccount(200);

    expect(account.balance).toBe(200);
});

test('Listing accounts', () => {
    const accounts = service.listAccounts();
    expect(accounts.length).toEqual(1)
})