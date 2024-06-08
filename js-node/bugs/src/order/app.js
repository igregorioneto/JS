class Order {
    constructor(id, items = []) {
        this.id = id;
        this.items = items; // Array de objetos { item, quantity, price }
        this.discount = 0; // Desconto aplicado no pedido
        this.total = 0;
        this.totalWithDiscount = 0;
    }

    addItem(item, quantity, price) {
        // Implementar lógica para adicionar item ao pedido
        this.items.push({ item: item, quantity: quantity, price: price  })
        this.total += quantity * price
    }

    removeItem(item) {
        // Implementar lógica para remover item do pedido
        const index = this.items.findIndex(item => item.item === item);
        this.items.splice(index, 1);
    }

    applyDiscount(discount) {
        // Implementar lógica para aplicar desconto ao pedido
        this.discount = discount;
    }

    calculateTotal() {
        // Implementar lógica para calcular o total do pedido com desconto
        let total = 0;

        for (const item of this.items) {
            const priceItem = item.price * item.quantity; 
            const percent = this.discount / 100
            total += ( priceItem - (priceItem * percent))
        }
        this.totalWithDiscount = total;
        return total;
    }

    getSummary() {
        // Implementar lógica para retornar um resumo do pedido
        return {
            items: this.items,
            total: this.total
        }
    }
}

module.exports = Order;
