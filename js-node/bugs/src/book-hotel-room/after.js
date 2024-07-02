function bookHotelRoom(reservation) {
    const rooms = [
        { number: 101, type: 'single', price: 100 },
        { number: 102, type: 'double', price: 150 },
        { number: 103, type: 'suite', price: 200 }
    ];

    // Verificar se o tipo de quarto está disponível
    const availableRoom = rooms.find(room => room.type === reservation.roomType);
    if (!availableRoom) {
        throw new Error('Room type not available');
    }

    // Calcular o preço total da reserva
    let totalPrice = availableRoom.price * reservation.nights;

    // Aplicar desconto para estadias longas
    if (reservation.nights > 5) {
        totalPrice *= 0.9; // 10% de desconto
    }

    // Calcular imposto sobre o preço total
    const tax = totalPrice * 0.1;

    // Calcular preço final
    const finalPrice = totalPrice + tax;

    // Criar a reserva
    const booking = {
        roomNumber: availableRoom.number,
        customerName: reservation.customerName,
        nights: reservation.nights,
        totalPrice: finalPrice
    };

    return booking;
}

module.exports = {
    bookHotelRoom
}
