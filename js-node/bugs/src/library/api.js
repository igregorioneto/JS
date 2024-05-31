const express = require('express');
const { v4: uuid } = require('uuid');

const app = express();
app.use(express.json());
const port = 3000;

let books = [
    { id: 1, title: 'Book One', author: 'Author One', year: 2020 },
    { id: 2, title: 'Book Two', author: 'Author Two', year: 2021 }
];

let currentMaxId = 0;

// Função para gerar um novo ID para os livros
function generateId() {
    return ++currentMaxId;
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
    const response = paginacao(req, books);
    res.json(response);
});

// Rota para buscar livros por título
app.get('/books/search', (req, res) => {
    const title = req.query.title;    

    if (!title) {
        return res.status(400).send({ message: 'Title parameter is required' })
    }

    const result = buscaParcial(title.toLowerCase(), books);
    if (result.length === 0) {
        return res.status(404).send({ message: 'No books found with the provided title' })
    }    

    const response = paginacao(req, books, result);

    res.json(response);
});

// Rota para atualizar um livro
app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const { title, author, year } = req.body;
    const book = books.find(book => book.id === bookId);

    if (book) {
        if (typeof title === string && title) book.title = title;
        if (typeof author === string && author) book.author = author;
        if (typeof year === number && year > 0 && year <= new Date().getFullYear()) {
            book.year = year;
        } else {
            res.status(401).send({ message: 'Year not is number' })
        }
        res.status(201).send(book);
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

// Busca parcial pelo título
function buscaParcial(termo, arr) {
    const regex = new RegExp(`^${termo}`, 'i');
    return arr.filter(a => regex.test(a.title.toLowerCase()))
}

// Paginação dos books
function paginacao(req, arr, result = []) {
    const page = parseInt(req.params.page) || 1;
    const limit = parseInt(req.params.limit) || 5;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    return {
        page: page,
        limit: limit,
        total: books.length,
        totalPage: Math.ceil(books.length / limit),
        data: arr ? arr.splice(startIndex, endIndex) : result.splice(startIndex, endIndex)
    }
}

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});