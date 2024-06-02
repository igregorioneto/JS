const CryptoExchange = require('./cryptoExchange');

const exchange = new CryptoExchange();

const buyOrder = exchange.createOrder("buy", 1, 50000);
const sellOrder = exchange.createOrder("sell", 0.5, 55000);

buyOrder().then(result => {
    console.log(`Buy order executed: ${result}`);
}).catch(err => {
    console.log(`Buy order execution failed: ${err}`);
});

sellOrder().then(result => {
    console.log(`Sell order executed: ${result}`);
}).catch(err => {
    console.log(`Sell order execution failed: ${err}`);
});