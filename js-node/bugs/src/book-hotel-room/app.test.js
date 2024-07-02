const { bookHotelRoom } = require('./after');

describe('Hotel Booking System', () => {
    test('should check room availability correctly', () => {
        // Teste para a função checkRoomAvailability
    });

    test('should calculate total price correctly', () => {
        // Teste para a função calculateTotalPrice
        const reservation = {
            roomType: 'double',
            customerName: 'John Doe',
            nights: 6
        };
        const booking = bookHotelRoom(reservation);
        expect(booking.totalPrice).toEqual(891);
    });

    test('should apply discount correctly', () => {
        // Teste para a função applyDiscount
        const reservation = {
            roomType: 'double',
            customerName: 'John Doe',
            nights: 8
        };
        const booking = bookHotelRoom(reservation);
        expect(booking.totalPrice).toEqual(1188);
    });

    test('should calculate tax correctly', () => {
        // Teste para a função calculateTax
        const reservation = {
            roomType: 'double',
            customerName: 'John Doe',
            nights: 8
        };
        const booking = bookHotelRoom(reservation);
        expect(booking.totalPrice).toEqual(1188);
    });

    test('should create booking correctly', () => {
        // Teste para a função createBooking
    });

    test('should book a hotel room correctly', () => {
        const reservation = {
            roomType: 'double',
            customerName: 'John Doe',
            nights: 6
        };
        const booking = bookHotelRoom(reservation);
        expect(booking).toEqual({
            roomNumber: 102,
            customerName: 'John Doe',
            nights: 6,
            totalPrice: 891
        });
    });

    test('should throw error if room type is not available', () => {
        const reservation = {
            roomType: 'penthouse',
            customerName: 'Jane Doe',
            nights: 2
        };
        expect(() => bookHotelRoom(reservation)).toThrow('Room type not available');
    });
});
