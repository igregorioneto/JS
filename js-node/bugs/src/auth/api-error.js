const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;
const secretKey = 'mysecretkey';

let users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
];

// Método para gerar token JWT
function generateToken(user) {
    return jwt.sign({ id: user.id, username: user.username }, secretKey);
}

// Middleware para verificar token JWT
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send({ auth: false, message: 'No token provided' });
    }
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token' });
        }
        req.userId = decoded.id;
        next();
    });
}

// Rota para registrar um novo usuário
app.post('/register', (req, res) => {
    // Implemente o registro de um novo usuário
});

// Rota para autenticar um usuário e obter token JWT
app.post('/login', (req, res) => {
    // Implemente a autenticação do usuário e a geração do token JWT
});

// Rota protegida que requer token JWT para acessar
app.get('/protected', verifyToken, (req, res) => {
    // Implemente a lógica para retornar dados protegidos apenas para usuários autenticados
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});