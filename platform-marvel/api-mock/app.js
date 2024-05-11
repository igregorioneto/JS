const express = require('express');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Autenticar usuário e gerar um JWT
app.post('/login', async(req, res) => {
    const { username, password } = req.body;

    try {
        // Requisição para retornar a lista de usuários do db.json
        const response = await axios.get('http://localhost:4000/users');
        // Verificar se o usuário existe na lista
        const user = response.data.find(user => user.username === username && user.password === password);
        if (!user) {
            return res.status(401).json({ message: 'Nome do usuário ou senha inválidos' });
        }
        // Gerando o token JWT
        const token = jwt.sign({ username }, 'your_secret_key');
        res.status(201).json({ token, username });
    } catch (error) {   
        console.error('Erro ao recuperar lista de usuários', error);
        res.status(500).json({ message: 'Erro ao autenticar usuário' })
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});