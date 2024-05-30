const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
const port = 3000;
const secretKey = 'mysecretkey';

let users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
];

let BLACKLIST_TOKEN = [];

// Método para gerar token JWT
function generateToken(user) {
    return jwt.sign({ id: user.id, username: user.username }, secretKey);
}

// Middleware para verificar token JWT
function verifyToken(req, res, next) {
    const token = req.headers['authorization'].split(" ")[1];
    if (!token) {
        return res.status(401).send({ auth: false, message: 'No token provided' });
    }

    if (invalidToken(token)) {
        return res.status(403).send({ message: 'Token Invalid' });
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
app.post('/register', async (req, res) => {
    // Implemente o registro de um novo usuário
    const { username, password } = req.body;
    if (username && password) {
        const passwordHash = await bcrypt.hash(password, 8);
        const user = {
            id: users.length + 1,
            username,
            password: passwordHash
        }
        users.push(user);
        return res.status(201).send({ message: 'Created', user: user.username });
    } else {
        return res.status(401).send({ message: 'Invalid username or password' });
    }
});

// Rota para autenticar um usuário e obter token JWT
app.post('/login', async (req, res) => {
    // Implemente a autenticação do usuário e a geração do token JWT
    const { username, password } = req.body;
    if (username && password) {
        const user = users.find(u => u.username === username);

        if (!user) {
            return res.status(404).send({ message: 'Not Authorized.' });
        }

        const comparePass = await bcrypt.compare(password, user.password);

        if (!comparePass) {
            return res.status(404).send({ message: 'Invalid username or password' });
        }

        const token = jwt.sign(user, secretKey);
        return res.status(201).send({ message: 'Authorized', user: user.username, token: token });
    } else {
        return res.status(401).send({ message: 'Invalid username or password' });
    }
});

// Rota protegida que requer token JWT para acessar
app.get('/protected', verifyToken, (req, res) => {
    return res.status(200).send(users);
});

// Logout
app.post('/logout', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];
    if (!token) {
        return res.status(401).send({ message: 'No token provided' })
    }

    addTokenBlackList(token);
    return res.status(204).send();
})

function invalidToken(token) {
    return BLACKLIST_TOKEN.includes(token);
}

function addTokenBlackList(token) {
    BLACKLIST_TOKEN.push(token);
}

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});