const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

let books = [
    { id: 1, title: 'Book One', author: 'Author One', year: 2020 },
    { id: 2, title: 'Book Two', author: 'Author Two', year: 2021 }
];

// Função para gerar um novo ID para os livros
function generateId() {
    return books.length > 0 ? books[books.length - 1].id + 1 : 1;
}

// Rota para adicionar um novo livro
app.post('/books', (req, res) => {
    const { title, author, year } = req.body;
    if (title && author && year) {
        const newBook = {
            id: generateId(),
            title,
            author,
            year
        };
        books.push(newBook);
        res.status(201).send(newBook);
    } else {
        res.status(400).send({ message: 'Title, author, and year are required' });
    }
});

// Rota para listar todos os livros
app.get('/books', (req, res) => {
    res.json(books);
});

// Rota para buscar livros por título
app.get('/books/search', (req, res) => {
    const title = req.query.title;
    const result = books.filter(book => book.title.includes(title));
    res.json(result);
});

// Rota para atualizar um livro
app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const { title, author, year } = req.body;
    const book = books.find(book => book.id === bookId);
    if (book) {
        if (title) book.title = title;
        if (author) book.author = author;
        if (year) book.year = year;
        res.send(book);
    } else {
        res.status(404).send({ message: 'Book not found' });
    }
});

// Rota para deletar um livro
app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(book => book.id === bookId);
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        res.send({ message: 'Book deleted' });
    } else {
        res.status(404).send({ message: 'Book not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});