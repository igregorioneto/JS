class Order {
    constructor(id, type, amount, price) {
        this.id = id;
        this.type = type; // "buy" ou "sell"
        this.amount = amount;
        this.price = price;
        this.executed = false;
    }
}

module.exports = Order;