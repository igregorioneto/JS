const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

const users = [
    { id: 1, name: 'Larissa' },
    { id: 2, name: 'João' },
    { id: 3, name: 'Manuela' }
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/user/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

app.post('/user', (req, res) => {
    const { name } = req.body;
    if (name) {
        const newUser = {
            id: users.length + 1,
            name: name
        };
        users.push(newUser);
        res.status(201).json(newUser);
    } else {
        res.status(400).send('Name is required');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});