const { Inventory, Product, StockOperation } = require('./app');

describe('Inventory Management System', () => {
    let inventory;

    beforeEach(() => {
        inventory = new Inventory();
    });

    test('should add a product', () => {
        inventory.addProduct(1, 'Product 1', 100);
        expect(inventory.products.length).toBe(1);
        expect(inventory.products[0]).toEqual({ id: 1, name: 'Product 1', stockLevel: 100 });
    });

    test('should stock in a product', () => {
        inventory.addProduct(1, 'Product 1', 100);
        inventory.stockIn(1, 50);
        expect(inventory.getStockLevel(1)).toBe(150);
    });

    test('should stock out a product', () => {
        inventory.addProduct(1, 'Product 1', 100);
        inventory.stockOut(1, 30);
        expect(inventory.getStockLevel(1)).toBe(70);
    });

    test('should not stock out more than available', () => {
        inventory.addProduct(1, 'Product 1', 100);
        expect(() => {
            inventory.stockOut(1, 150);
        }).toThrow('Insufficient stock available');
    });
});
