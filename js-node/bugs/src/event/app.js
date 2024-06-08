class Event {
    constructor(id, name, totalTickets) {
        this.id = id;
        this.name = name;
        this.totalTickets = totalTickets;
        this.availableTickets = totalTickets;
        this.reservations = [];
    }

    reserveTickets(customerId, numTickets) {
        // Implementar lógica para reservar ingressos
        if (numTickets > this.availableTickets) throw new Error('Not enough tickets available');

        const reservetionId = this.reservations.length + 1;
        this.reservations.push({id: reservetionId, customerId, numTickets });
        this.availableTickets -= numTickets;
        return reservetionId
    }

    cancelReservation(reservationId) {
        // Implementar lógica para cancelar uma reserva
        const index = this.reservations.findIndex(r => r.id === reservationId);
        const oldReservation = this.reservations.find(r => r.id === reservationId);
        if (index !== -1) {
            this.reservations.slice(index, 1);
            this.availableTickets += oldReservation.numTickets;
        }
    }

    checkAvailability() {
        // Implementar lógica para verificar disponibilidade de ingressos
        return this.availableTickets;
    }

    getEventSummary() {
        // Implementar lógica para retornar um resumo do evento
        return {
            totalReservations: this.reservations.length,
            totalTicketsReserved: this.totalTickets - this.availableTickets
        }
    }
}

class EventManager {
    constructor() {
        this.events = [];
    }

    createEvent(id, name, totalTickets) {
        const newEvent = new Event(id, name, totalTickets);
        this.events.push(newEvent);
    }

    getEvent(id) {
        return this.events.find(event => event.id === id);
    }

    // Outros métodos que achar necessário
}

module.exports = EventManager;
