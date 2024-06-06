class Product {
    constructor(id, name, stockLevel) {
        this.id = id;
        this.name = name;
        this.stockLevel = stockLevel;
    }
}

class StockOperation {
    constructor(productId, quantity, type) {
        this.productId = productId;
        this.quantity = quantity;
        this.type = type; // 'in' para entrada, 'out' para saída
    }
}

class Inventory {
    constructor() {
        this.products = [];
        this.operations = [];
    }

    addProduct(id, name, stockLevel) {
        const newProduct = new Product(id, name, stockLevel);
        this.products.push(newProduct);
    }

    stockIn(productId, quantity) {
        const operation = new StockOperation(productId, quantity, 'in');
        this.operations.push(operation);
        // Implementar a lógica de entrada de estoque
        this.products.map(p => p.id === productId ? p.stockLevel += quantity : p.stockLevel += 0);
    }

    stockOut(productId, quantity) {
        const operation = new StockOperation(productId, quantity, 'out');
        this.operations.push(operation);
        // Implementar a lógica de saída de estoque
        if (this.getStockLevel(productId) < quantity)
            throw new Error('Insufficient stock available')
        this.products.map(p => p.id === productId ? p.stockLevel -= quantity : 0);
    }

    getStockLevel(productId) {
        // Implementar a lógica para retornar o nível de estoque atual do produto
        const product = this.products.find(p => p.id === productId);
        return product.stockLevel;
    }
}

module.exports = { Inventory, Product, StockOperation };