const calculateDiscount = (price, code) => {
    if (code == 'DISC10') {
        return price * 0.9;
    } else if (code == 'DISC20') {
        return price * 0.8;
    } else if (code == 'DISC30') {
        return price * 0.7;
    } else {
        return price;
    }
}

console.log(calculateDiscount(10));

// Usar nomes descritivos para a função e seus parâmetros
// Reduzir código redundante e repetitivo
// Evitar caminhos de código desnecessários
// Usar objetos ou mapas

const discountRates = {
    'DISC10': 0.1,
    'DISC20': 0.2,
    'DISC30': 0.3
};

const calculateDiscountPrice = (price, discountCode) => {
    const discount = discountRates[discountCode] || 0;
    return price * (1 - discount);
};

console.log(calculateDiscountPrice(10));