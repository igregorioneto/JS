const Order = require('./order');
class CryptoExchange {
    constructor() {
        this.orders = [];
    }

    createOrder(type, amount, price) {
        const newOrder = new Order(this.orders.length + 1, type, amount, price);
        this.orders.push(newOrder);
    }

    // Closure para verificar o estado do pedido
    checkOrderStatus(type)  {
        return () => {
            return new Promise((resolve, reject) => {
                // Implementar verificação assíncrona do pedido
                // Simular atraso com setTimeout e resolver a promise com base na lógica de execução do pedido
                setTimeout(() => {
                    const ordersForType = this.orders.filter(o => o.type === type);
                    if (ordersForType.length > 0) {
                        resolve(ordersForType);
                    } else {
                        reject('No orders found for the given type.')
                    }
                }, 1000);
            });
        }        
    };
}

module.exports = CryptoExchange;