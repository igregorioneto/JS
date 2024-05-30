const express = require('express');
const app = express();
const port = 3000;

let notes = [
    { id: 1, title: 'First note', content: 'This is the first note' },
    { id: 2, title: 'Second note', content: 'This is the second note' }
];

// Middleware para parsing do corpo das requisições
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Rota para obter todas as notas
app.get('/notes', (req, res) => {
    res.json(notes);
});

// Rota para obter uma nota específica
app.get('/notes/:id', (req, res) => {
    const noteId = parseInt(req.params.id);
    const note = notes.find(note => note.id === noteId);
    if (note) {
        res.send(note);
    } else {
        res.status(404).send({ message: 'Note not found' });
    }
});

// Rota para adicionar uma nova nota
app.post('/notes', (req, res) => {
    const { title, content } = req.body;
    if (title && content) {
        const newNote = {
            id: notes.length + 1,
            title: title,
            content: content
        };
        notes.push(newNote);
        res.status(201).send(newNote);
    } else {
        res.status(400).send({ message: 'Title and content are required' });
    }
});

// Rota para atualizar uma nota existente
app.put('/notes/:id', (req, res) => {
    const noteId = parseInt(req.params.id);
    const note = notes.find(note => note.id === noteId);
    const { title, content } = req.body;
    if (note) {
        if (title) {
            note.title = title;
        }
        if (content) {
            note.content = content;
        }
        res.send(note);
    } else {
        res.status(404).send({ message: 'Note not found' });
    }
});

// Rota para excluir uma nota
app.delete('/notes/:id', (req, res) => {
    const noteId = parseInt(req.params.id);
    const noteIndex = notes.findIndex(note => note.id === noteId);
    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1);
        res.send({ message: 'Note deleted' });
    } else {
        res.status(404).send({ message: 'Note not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});