// Verificar a disponibilidade
function checkRoomAvailability(rooms, roomType) {
    const availableRoom = rooms.find(room => room.type === roomType);
    if (!availableRoom) {
        throw new Error('Room type not available');
    }
    return availableRoom;
}

// Calcular preço total
function calculateTotalPrice(pricePerNight, nights) {
    return pricePerNight * nights;
}

// Aplicar desconto
function applyDiscount(totalPrice, nights) {
    return nights > 5 ? totalPrice * 0.9 : totalPrice;
}

// Cálculo da taxa
function calculateTax(totalPrice) {
    return totalPrice * 0.1;
}

function createBooking(roomNumber, customerName, nights, finalPrice) {
    return {
        roomNumber,
        customerName,
        nights,
        totalPrice: finalPrice
    }
}

function bookHotelRoom(reservation) {
    const rooms = [
        { number: 101, type: 'single', price: 100 },
        { number: 102, type: 'double', price: 150 },
        { number: 103, type: 'suite', price: 200 }
    ];

    const availableRoom = checkRoomAvailability(rooms, reservation.roomType);
    const totalPrice = calculateTotalPrice(availableRoom.price, reservation.nights);
    const discountPrice = applyDiscount(totalPrice, reservation.nights);
    const tax = calculateTax(discountPrice);
    const finalPrice = discountPrice + tax;
    return createBooking(availableRoom.number, reservation.customerName, reservation.nights, finalPrice);
}

module.exports = {
    bookHotelRoom,
    checkRoomAvailability,
    calculateTotalPrice,
    applyDiscount,
    calculateTax,
    createBooking
}
