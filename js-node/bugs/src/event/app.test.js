const EventManager = require('./app');

describe('Event Manager System', () => {
    let manager;

    beforeEach(() => {
        manager = new EventManager();
        manager.createEvent(1, 'Concert', 100);
    });

    test('should create an event', () => {
        const event = manager.getEvent(1);
        expect(event.name).toBe('Concert');
        expect(event.totalTickets).toBe(100);
        expect(event.availableTickets).toBe(100);
    });

    test('should reserve tickets', () => {
        const event = manager.getEvent(1);
        event.reserveTickets('customer1', 5);
        expect(event.availableTickets).toBe(95);
    });

    test('should not reserve tickets if not enough available', () => {
        const event = manager.getEvent(1);
        expect(() => event.reserveTickets('customer1', 101)).toThrow('Not enough tickets available');
    });

    test('should cancel a reservation', () => {
        const event = manager.getEvent(1);
        const reservationId = event.reserveTickets('customer1', 5);
        event.cancelReservation(reservationId);
        expect(event.availableTickets).toBe(100);
    });

    test('should check ticket availability', () => {
        const event = manager.getEvent(1);
        expect(event.checkAvailability()).toBe(100);
        event.reserveTickets('customer1', 10);
        expect(event.checkAvailability()).toBe(90);
    });

    test('should return event summary', () => {
        const event = manager.getEvent(1);
        event.reserveTickets('customer1', 10);
        const summary = event.getEventSummary();
        expect(summary.totalReservations).toBe(1);
        expect(summary.totalTicketsReserved).toBe(10);
    });
});
