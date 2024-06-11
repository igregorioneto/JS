const { OptionTrading } = require('./app.js');

describe('Option Trading System', () => {
    let trading;

    beforeEach(() => {
        trading = new OptionTrading();
        trading.createOption("call", 50000, 10, 200, new Date("2024-12-31"));
        trading.createOption("put", 45000, 5, 150, new Date("2024-12-31"));
    });

    test('should create an option', () => {
        const option = trading.options[0];
        expect(option.type).toBe("call");
        expect(option.strikePrice).toBe(50000);
        expect(option.quantity).toBe(10);
    });

    test('should buy an option', () => {
        trading.buyOption(1, 5);
        const option = trading.options[0];
        expect(option.quantity).toBe(5); // assuming 5 options bought, 5 remaining
    });

    test('should not buy more options than available', () => {
        expect(() => trading.buyOption(1, 15)).toThrow('Not enough options available');
    });

    test('should sell an option', () => {
        trading
        trading.buyOption(1, 5);
        trading.sellOption(1, 3);
        const option = trading.options[0];
        expect(option.quantity).toBe(8); // assuming 3 options sold, 8 remaining
    });

    test('should execute a call option', () => {
        const trading = new OptionTrading();
        trading.createOption('call', 50000, 10, 1000, new Date('2023-12-31'));
        const currentPrice = 55000;
        trading.buyOption(1, 5);
        trading.executeOption(1, currentPrice);
        const option = trading.options[0];
        expect(option.status).toBe("executed");
    });

    test('should not execute a call option if not expired', () => {
        const currentPrice = 55000;
        expect(() => trading.executeOption(1, currentPrice)).toThrow('Option not expired');
    });

    test('should list options by expiration date', () => {
        const startDate = new Date("2024-01-01");
        const endDate = new Date("2024-12-31");
        const options = trading.listOptionsByExpiration(startDate, endDate);
        expect(options.length).toBe(2);
    });

    test('should monitor options', () => {
        const monitoringData = trading.monitorOptions();
        expect(monitoringData.totalOptions).toBe(2);
        expect(monitoringData.openOptions).toBe(2);
        expect(monitoringData.executedOptions).toBe(0);
    });
});
