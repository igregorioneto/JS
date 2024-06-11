class Option {
    constructor(id, type, strikePrice, quantity, premium, expirationDate) {
        this.id = id;
        this.type = type;
        this.strikePrice = strikePrice;
        this.quantity = quantity;
        this.premium = premium;
        this.expirationDate = expirationDate;
        this.status = "open"; // open, executed, expired
    }

    execute(currentPrice) {
        // Implementar a lógica de execução da opção
        if (new Date() < this.expirationDate) {
            throw new Error('Option not expired');
        }
        if (this.type === 'call' && currentPrice > this.strikePrice) {
            this.status = 'executed';
        } else if (this.type === 'sell' && currentPrice < this.strikePrice) {
            this.status = 'executed';
        } else {
            throw new Error('Option cannot be executed due to market conditions')
        }           
    }
}

class OptionTrading {
    constructor() {
        this.options = [];
        this.transactions = [];
    }

    createOption(type, strikePrice, quantity, premium, expirationDate) {
        const id = this.options.length + 1;
        const newOption = new Option(id, type, strikePrice, quantity, premium, expirationDate);
        this.options.push(newOption);
    }

    buyOption(id, quantity) {
        // Implementar a lógica de compra de uma opção
        // Buscar uma opção por ID
        let option = this.options.find(o => o.id === id);
        if (!option) {
            throw new Error('Option not found');
        }
        if (quantity > option.quantity) {
            throw new Error('Not enough options available');
        }
        // Descontar a quantidade 
        option.quantity -= quantity;
        this.transactions.push({ id, quantity, type: 'buy' });
    }

    sellOption(id, quantity) {
        // Implementar a lógica de venda de uma opção
        let option = this.options.find(o => o.id === id);
        if (!option) {
            throw new Error('Option not found');
        }
        option.quantity += quantity;
        this.transactions.push({ id, quantity, type: 'sell' });
    }

    executeOption(id, currentPrice) {
        // Implementar a lógica de execução de uma opção
        let option = this.options.find(o => o.id === id);
        if (!option) {
            throw new Error('Option not found');
        }
        option.execute(currentPrice);
    }

    listOptionsByExpiration(startDate, endDate) {
        // Implementar a lógica de listagem de opções por intervalo de expiração
        return this.options.filter(o => o.expirationDate >= startDate && o.expirationDate <= endDate)
    }

    monitorOptions() {
        // Implementar a lógica de monitoramento de opções
        return {
            totalOptions: this.options.length,
            openOptions: this.options.filter(op => op.status === 'open').length,
            executedOptions: this.options.filter(op => op.status === 'executed').length,
            expiredOptions: this.options.filter(op => op.status === 'expired').length,
        }
    }
}

module.exports = { OptionTrading, Option };
