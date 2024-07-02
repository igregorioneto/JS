const { bookHotelRoom, applyDiscount, calculateTax, calculateTotalPrice, checkRoomAvailability, createBooking } = require('./after');

describe('Hotel Booking System', () => {
    
    const rooms = [
        { number: 101, type: 'single', price: 100 },
        { number: 102, type: 'double', price: 150 },
        { number: 103, type: 'suite', price: 200 }
    ];

    test('should check room availability correctly', () => {
        const roomType = 'double';
        const availableRoom = checkRoomAvailability(rooms, roomType);
        expect(availableRoom).toEqual({ number: 102, type: 'double', price: 150 });
    });

    test('should throw error if room type is not available', () => {
        const roomType = 'penthouse';
        expect(() => checkRoomAvailability(rooms, roomType)).toThrow('Room type not available');
    });

    test('should calculate total price correctly', () => {
        const pricePerNight = 100;
        const nights = 3;
        const totalPrice = calculateTotalPrice(pricePerNight, nights);
        expect(totalPrice).toBe(300);
    });

    test('should apply discount correctly', () => {
        const totalPrice = 600;
        const nights = 6;
        const discountedPrice = applyDiscount(totalPrice, nights);
        expect(discountedPrice).toBe(540); 
    });

    test('should not apply discount for short stays', () => {
        const totalPrice = 300;
        const nights = 3;
        const discountedPrice = applyDiscount(totalPrice, nights);
        expect(discountedPrice).toBe(300); 
    });

    test('should calculate tax correctly', () => {
        const totalPrice = 300;
        const tax = calculateTax(totalPrice);
        expect(tax).toBe(30);
    });

    test('should create booking correctly', () => {
        const roomNumber = 101;
        const customerName = 'John Doe';
        const nights = 3;
        const finalPrice = 330;
        const booking = createBooking(roomNumber, customerName, nights, finalPrice);
        expect(booking).toEqual({
            roomNumber: 101,
            customerName: 'John Doe',
            nights: 3,
            totalPrice: 330
        });
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
});
