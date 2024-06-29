class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
        this.total = 0;
    }

    addProduct(product) {
        this.products.push(product);
    }

    calculateTotal() {
        // Calcular o valor total do carrinho
        return this.products.reduce((previous, product) => previous + product.price, 0);
    }

    applyDiscount() {
        // Aplicar desconto com base no valor total
        const total = this.calculateTotal();
        let discount = 0;

        if (total > 500) {
            discount = 30;
        } else if (total > 200) {
            discount = 20;
        } else if (total > 100) {
            discount = 10;
        }

        this.total = total - (total * discount) / 100;
    }

    modifyDiscountProduct(discount) {
        this.products.map(product => {
            product.price -= (product.price * discount) / 100
        })
    }

    getTotal() {
        return this.total;
    }
}

module.exports = { Product, ShoppingCart }