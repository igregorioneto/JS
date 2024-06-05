class Room {
    constructor(id, category) {
        this.id = id;
        this.category = category;
    }
}

class Booking {
    constructor(id, roomId, startDate, endDate) {
        this.id = id;
        this.roomId = roomId;
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
    }
}

class Hotel {
    constructor() {
        this.rooms = [];
        this.bookings = [];
    }

    addRoom(id, category) {
        const newRoom = new Room(id, category);
        this.rooms.push(newRoom);
    }

    addBooking(roomId, startDate, endDate) {
        const isAvailable = this.checkAvailability(roomId, startDate, endDate);
        if (isAvailable) {
            const newBooking = new Booking(this.bookings.length + 1, roomId, startDate, endDate);
            this.bookings.push(newBooking);
            return newBooking;
        } else {
            throw new Error('Room is not available for the given dates.');
        }
    }

    checkAvailability(roomId, startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);

        for (const booking of this.bookings) {
            if (booking.roomId === roomId) {
                // Implementar a lógica para verificar a sobreposição de datas
                // Dica: Verifique se as datas de início ou término do novo booking estão dentro de um booking existente
                if (!(start > new Date(booking.endDate)) && !(end < new Date(booking.startDate))) {
                    return false;
                }
            }
        }

        return true; // Se não houver sobreposição, retorne true
    }
}

module.exports = { Hotel, Room, Booking };