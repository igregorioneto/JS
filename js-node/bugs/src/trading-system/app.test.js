const { Stock, Order, TradingSystem } = require('./app.js');

describe('TradingSystem', () => {
    let system;

    beforeEach(() => {
        system = new TradingSystem();
        system.createStock('AAPL', 150);
    });

    test('should create a stock', () => {
        const stock = system.stocks.find(s => s.symbol === 'AAPL');
        expect(stock.currentPrice).toBe(150);
    });

    test('should update stock price and record history', () => {
        const stock = system.stocks.find(s => s.symbol === 'AAPL');
        stock.updatePrice(155);
        expect(stock.currentPrice).toBe(155);
        expect(stock.priceHistory).toContain(155);
    });

    test('should place a buy order', () => {
        system.placeOrder('AAPL', 'buy', 10, 145);
        const order = system.orders.find(o => o.symbol === 'AAPL' && o.type === 'buy');
        expect(order.quantity).toBe(10);
        expect(order.limitPrice).toBe(145);
    });

    test('should execute buy order if price is right', () => {
        system.placeOrder('AAPL', 'buy', 10, 155);
        system.executeOrders('AAPL', 150);
        const order = system.orders.find(o => o.symbol === 'AAPL' && o.type === 'buy' && o.status === 'executed');
        expect(order).toBeDefined();
    });

    test('should calculate profit/loss correctly', () => {
        system.placeOrder('AAPL', 'buy', 10, 145);
        system.executeOrders('AAPL', 145);
        system.placeOrder('AAPL', 'sell', 10, 160);
        system.executeOrders('AAPL', 160);
        const profit = system.calculateProfit('AAPL');
        expect(profit).toBe(150); // Profit calculation: (160 - 145) * 10
    });
});
