class FlightReservation {
    constructor(flightNumber) {
        this.flightNumber = flightNumber;
        this.seats = {
            economy: 100,
            business: 50,
            firstClass: 20
        };
        this.reservations = [];
    }

    reserveSeat(classType, numSeats) {
        // Implementar lógica para reservar assentos
        if (numSeats > this.seats.economy || 
            numSeats > this.seats.business || 
            numSeats > this.seats.firstClass) throw new Error('Not enough seats available');

        if (classType === 'economy') this.seats.economy -= numSeats;
        if (classType === 'business') this.seats.business -= numSeats;
        if (classType === 'firstClass') this.seats.firstClass -= numSeats;

        const id = this.reservations.length + 1;
        this.reservations.push({id: id, classType: classType, numSeats: numSeats});
        return id;
    }

    cancelReservation(reservationId) {
        // Implementar lógica para cancelar uma reserva
        const reservation = this.reservations.findIndex(r => r.id === reservationId);
        const res = this.reservations[reservation];
        this.seats[res.classType] += res.numSeats;
    }

    checkAvailability(classType) {
        // Implementar lógica para verificar disponibilidade de assentos
        return this.seats[classType];
    }

    getReservationSummary() {
        // Implementar lógica para retornar um resumo das reservas
        return {
            totalReservations: this.reservations.length,
            totalSeatsReserved: this.reservations.reduce((sum, res) => sum + res.numSeats, 0),
        }
    }
}

module.exports = FlightReservation;
