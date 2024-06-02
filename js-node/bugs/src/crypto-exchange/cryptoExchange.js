class CryptoExchange {
    constructor() {
        this.orders = [];
    }

    createOrder(type, amount, price) {
        const newOrder = new Order(this.orders.length + 1, type, amount, price);
        this.orders.push(newOrder);

        // Closure para verificar o estado do pedido
        const checkOrderStatus = () => {
            return new Promise((resolve, reject) => {
                // Implementar verificação assíncrona do pedido
                // Simular atraso com setTimeout e resolver a promise com base na lógica de execução do pedido
            });
        };

        return checkOrderStatus;
    }
}

module.exports = CryptoExchange;