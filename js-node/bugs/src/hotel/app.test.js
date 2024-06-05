const { Hotel, Room, Booking } = require('./app');

describe('Hotel Booking System', () => {
    let hotel;

    beforeEach(() => {
        hotel = new Hotel();
    });

    test('should add a room', () => {
        hotel.addRoom(1, 'single');
        expect(hotel.rooms.length).toBe(1);
        expect(hotel.rooms[0]).toEqual({ id: 1, category: 'single' });
    });

    test('should add a booking if room is available', () => {
        hotel.addRoom(1, 'single');
        const booking = hotel.addBooking(1, '2023-06-01', '2023-06-05');
        expect(booking).toBeDefined();
        expect(hotel.bookings.length).toBe(1);
    });

    test('should not add a booking if room is not available', () => {
        hotel.addRoom(1, 'single');
        hotel.addBooking(1, '2023-06-01', '2023-06-05');
        expect(() => {
            hotel.addBooking(1, '2023-06-03', '2023-06-07');
        }).toThrow('Room is not available for the given dates.');
    });
});