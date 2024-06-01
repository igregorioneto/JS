const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

let reservations = [
    { id: 1, room: 'A', startTime: '2024-05-31T10:00:00', endTime: '2024-05-31T11:00:00' },
    { id: 2, room: 'B', startTime: '2024-05-31T14:00:00', endTime: '2024-05-31T15:00:00' }
];

// Função para gerar um novo ID para as reservas
function generateReservationId() {
    return reservations.length > 0 ? reservations[reservations.length - 1].id + 1 : 1;
}

// Função para verificar se a reserva está dentro do horário de expediente
function isWithinBusinessHours(startTime, endTime) {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const startHour = start.getHours();
    const endHour = end.getHours();
    
    // O Horário final nunca pode ser menor que o horário inicial
    return startHour >= 9 && endHour <= 18 && start < end;
}

// O horário só pode ser depois do horário atual com uma margem de tempo de 30 minutos
function isTimeMin30MinutosAfter(startTime) {
    const start = new Date(startTime);
    const min30Minutes = (start - new Date()) / (1000 * 60);
    const timeMin30MinutesAfter = min30Minutes >= 30;
    return timeMin30MinutesAfter;
}

// Tem que ter pelo menos 1 hora de duração
function isTimeOneHourDuration(startTime, endTime) {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const hours = (end - start) / (1000 * 60 * 60);
    const timeOneHourDuration = hours >= 1;
    return timeOneHourDuration;
}

// Função para verificar se há sobreposição de reservas
function isOverlapping(room, startTime, endTime) {
    const newStart = new Date(startTime);
    const newEnd = new Date(endTime);

    return reservations.some(reservation => {
        if (reservation.room === room) {
            const existingStart = new Date(reservation.startTime);
            const existingEnd = new Date(reservation.endTime);
            return (newStart < existingEnd && newEnd > existingStart);
        }
        return false;
    });
}

// Validação de data
function isInvalidDate(date) {
    return isNaN(new Date(date).getTime());
}

// Data formatada para data requerida
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}

// Rota para criar uma nova reserva
app.post('/reservations', (req, res) => {
    const { room, startTime, endTime } = req.body;
    
    if (isInvalidDate(startTime) || isInvalidDate(endTime)) {
        return res.status(400).send({ message: `Invalid Date. Try this format ${formatDate(new Date())}` });
    }

    if (!room || !startTime || !endTime) {
        return res.status(400).send({ message: 'Room, start time, and end time are required' });
    }

    if (!isWithinBusinessHours(startTime, endTime)) {
        return res.status(400).send({ message: 'Reservations must be within business hours (9:00-18:00)' });
    }

    if (isOverlapping(room, startTime, endTime)) {
        return res.status(400).send({ message: 'Time slot is already booked' });
    }

    if (!isTimeMin30MinutosAfter(startTime)) {
        return res.status(400).send({ message: 'Required at least 30 minutes after current time.' })
    }

    if (!isTimeOneHourDuration(startTime, endTime)) {
        return res.status(400).send({ message: 'At least 1 hour required.' })
    }

    const newReservation = {
        id: generateReservationId(),
        room,
        startTime,
        endTime
    };

    reservations.push(newReservation);
    res.status(201).send(newReservation);
});

// Rota para listar todas as reservas
app.get('/reservations', (req, res) => {
    res.json(reservations);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});