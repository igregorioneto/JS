const Order = require('./app');

describe('Order Management System', () => {
    let order;

    beforeEach(() => {
        order = new Order(1);
    });

    test('should add an item to the order', () => {
        order.addItem('Burger', 2, 5.00);
        expect(order.items.length).toBe(1);
        expect(order.items[0]).toEqual({ item: 'Burger', quantity: 2, price: 5.00 });
    });

    test('should remove an item from the order', () => {
        order.addItem('Burger', 2, 5.00);
        order.removeItem('Burger');
        expect(order.items.length).toBe(0);
    });

    test('should apply a discount to the order', () => {
        order.addItem('Burger', 2, 5.00);
        order.applyDiscount(10); // 10% de desconto
        expect(order.discount).toBe(10);
    });

    test('should calculate the total with discount', () => {
        order.addItem('Burger', 2, 5.00); // Total = 10.00
        order.applyDiscount(10); // Desconto de 10% = 1.00
        expect(order.calculateTotal()).toBe(9.00); // Total após desconto = 9.00
    });

    test('should return a summary of the order', () => {
        order.addItem('Burger', 2, 5.00);
        order.addItem('Fries', 1, 3.00);
        const summary = order.getSummary();
        expect(summary.items.length).toBe(2);
        expect(summary.total).toBe(13.00);
    });
});
