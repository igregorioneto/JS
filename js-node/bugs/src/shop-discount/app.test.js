const { Product, ShoppingCart } = require('./app');

describe('Shopping cart discount system', () => {
    let cart, product1, product2, product3;

    beforeEach(() => {
        product1 = new Product('1', 'Laptop', 120);
        product2 = new Product('2', 'Phone', 80);
        product3 = new Product('3', 'Tablet', 300);

        cart = new ShoppingCart();
    });

    test('should calculate total without discount', () => {
        cart.addProduct(product1);
        cart.addProduct(product2);
        const total = cart.calculateTotal();
        expect(total).toBe(200);
    });


    test('should apply 10% discount for total > $100', () => {
        cart.addProduct(product1);
        cart.addProduct(product2);
        cart.applyDiscount();
        const total = cart.getTotal();
        expect(total).toBe(180);
    });

    test('should apply 20% discount for total > $200', () => {
        cart.addProduct(product1);
        cart.addProduct(product2);
        cart.addProduct(product3);
        cart.applyDiscount();
        const total = cart.getTotal();
        expect(total).toBe(400);
    });

    test('should apply 30% discount for total > $500', () => {
        cart.addProduct(product1);
        cart.addProduct(product2);
        cart.addProduct(product3);
        cart.addProduct(new Product('4', 'Headphones', 250));
        cart.applyDiscount();
        const total = cart.getTotal();
        expect(total).toBe(525);
    });
})