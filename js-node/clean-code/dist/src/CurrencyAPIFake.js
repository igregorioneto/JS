"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CurrencyAPIFake {
    convert(amount, currency) {
        if (currency === 'USD') {
            return amount * 5;
        }
        return amount;
    }
}
exports.default = CurrencyAPIFake;
