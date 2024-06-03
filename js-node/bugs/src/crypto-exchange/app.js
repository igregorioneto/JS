const CryptoExchange = require('./cryptoExchange');

const exchange = new CryptoExchange();

exchange.createOrder("buy", 1, 50000);
exchange.createOrder("sell", 0.5, 55000);
exchange.createOrder("buy", 1, 50000);
exchange.createOrder("sell", 0.5, 55000);

const checkBuyOrders = exchange.checkOrderStatus('buy');
const checkSellOrders = exchange.checkOrderStatus('sell');

exchange.cancelOrder(1);

checkBuyOrders().then(result => {
    for (const iterator of result) {
        console.log(`Buy order executed: ${JSON.stringify(iterator)}`);
    }  
}).catch(err => {
    console.log(`Buy order execution failed: ${err}`);
});

checkSellOrders().then(result => {
    for (const iterator of result) {
        console.log(`Sell order executed: ${JSON.stringify(iterator)}`);
    }    
}).catch(err => {
    console.log(`Sell order execution failed: ${err}`);
});