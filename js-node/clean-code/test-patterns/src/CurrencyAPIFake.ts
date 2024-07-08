import CurrencyAPI from "./CurrencyAPI";

export default class CurrencyAPIFake implements CurrencyAPI {
    convert(amount: number, currency: string): number {
        if (currency === 'USD') {
            return amount * 5;
        }
        return amount;
    }
}