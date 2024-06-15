class Stock {
    constructor(symbol, initialPrice) {
        this.symbol = symbol;
        this.currentPrice = initialPrice;
        this.priceHistory = [initialPrice];
    }

    updatePrice(newPrice) {
        // Implementar lógica para atualizar o preço e registrar no histórico de preços
        this.currentPrice = newPrice;
        this.priceHistory.push(this.currentPrice)
    }
}

class Order {
    constructor(id, symbol, type, quantity, limitPrice) {
        this.id = id;
        this.symbol = symbol;
        this.type = type; // 'buy' or 'sell'
        this.quantity = quantity;
        this.limitPrice = limitPrice;
        this.status = 'pending'; // pending, executed, cancelled
    }

    execute(currentPrice) {
        // Implementar lógica para executar a ordem
        if (currentPrice <= this.limitPrice) {
            this.status = 'executed';
        }
    }
}

class TradingSystem {
    constructor() {
        this.stocks = [];
        this.orders = [];
        this.executedOrders = [];
    }

    createStock(symbol, initialPrice) {
        const newStock = new Stock(symbol, initialPrice);
        this.stocks.push(newStock);
    }

    placeOrder(symbol, type, quantity, limitPrice) {
        const id = this.orders.length + 1;
        const newOrder = new Order(id, symbol, type, quantity, limitPrice);
        this.orders.push(newOrder);
    }

    executeOrders(symbol, currentPrice) {
        // Implementar lógica para executar ordens pendentes
        const orders = this.orders.filter(order => order.symbol === symbol);
        for(const order of orders) {
            order.execute(currentPrice);
        }
    }

    calculateProfit(symbol) {
        // Implementar lógica para calcular lucro/perda total
        const orders = this.orders.filter(order => order.symbol === symbol && order.status === 'executed');
        let prices = []
        for(const order of orders) {
            prices.push(order.limitPrice)
        }
        prices.sort((a,b) => b - a);
        let resultPrices = []
        for (let i = 0; i < prices.length - 1; i++) {
            resultPrices.push(prices[i] - prices[i + 1])
        }
        let total = resultPrices.reduce((previous, value) => value + previous, 0);
        return total * orders[0].quantity;
    }
}

module.exports = { Stock, Order, TradingSystem };
