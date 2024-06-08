const FlightReservation = require('./app');

describe('Flight Reservation System', () => {
    let flight;

    beforeEach(() => {
        flight = new FlightReservation('FL123');
    });

    test('should reserve seats in economy class', () => {
        flight.reserveSeat('economy', 5);
        expect(flight.seats.economy).toBe(95);
    });

    test('should reserve seats in business class', () => {
        flight.reserveSeat('business', 3);
        expect(flight.seats.business).toBe(47);
    });

    test('should reserve seats in first class', () => {
        flight.reserveSeat('firstClass', 2);
        expect(flight.seats.firstClass).toBe(18);
    });

    test('should not reserve seats if not enough availability', () => {
        expect(() => flight.reserveSeat('economy', 101)).toThrow('Not enough seats available');
    });

    test('should cancel a reservation', () => {
        const reservationId = flight.reserveSeat('business', 5);
        flight.cancelReservation(reservationId);
        expect(flight.seats.business).toBe(50);
    });

    test('should check seat availability', () => {
        expect(flight.checkAvailability('economy')).toBe(100);
        flight.reserveSeat('economy', 10);
        expect(flight.checkAvailability('economy')).toBe(90);
    });

    test('should return reservation summary', () => {
        flight.reserveSeat('economy', 10);
        flight.reserveSeat('business', 5);
        const summary = flight.getReservationSummary();
        expect(summary.totalReservations).toBe(2);
        expect(summary.totalSeatsReserved).toBe(15);
    });
});
