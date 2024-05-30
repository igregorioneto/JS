const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

const tasks = [];

app.use(express.urlencoded({ extended: true }));

app.get('/tasks', (req, res) => {
    res.send(tasks);
});

app.post('/task', (req, res) => {
    const { task } = req.body;
    if (task) {
        const newTask = {
            id: tasks.length + 1,
            description: task
        };
        tasks.push(newTask);
        res.status(201).send(newTask);
    } else {
        res.status(400).send('Task description is required');
    }
});

app.put('/task/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { description } = req.body;
    const task = tasks.find(t => t.id === id);
    if (task) {
        if (description) {
            task.description = description;
            res.send(task);
        } else {
            res.status(400).send('Description is required');
        }
    } else {
        res.status(404).send('Task not found');
    }
});

app.delete('/task/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        res.send({ message: 'Task deleted' });
    } else {
        res.status(404).send('Task not found');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});