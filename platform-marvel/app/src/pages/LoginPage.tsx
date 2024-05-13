import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CustomText from '../components/CustomText';
import { useNavigate } from 'react-router-dom';
import postLogin from '../services/userService';
import { getFromLocalStorage, removeFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

// Estilo para tela de login
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #333; // Cor de fundo
  position: relative;  
`;

// Campo de entrada para formulário
const Input = styled.input`
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 250px;
`;

// Estilo para o botão de login
const Button = styled.button`
  padding: 10px 20px;
  background-color: #0066ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0055cc;
  }
`;

// Estilo checkbox e link
const Options = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
  margin: 10px 0;
`;

const Link = styled.a`
  color: #ffffff;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

/**
 * Página de Login, para logar o usuário no App.
*/
function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [saveLogin, setSaveLogin] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        // const token = localStorage.getItem('userData');
        // if (token !== null)
        //     localStorage.removeItem('userData');
        
        // let saveLoginString = getFromLocalStorage('saveData');
        // if (saveLoginString)
        //     setSaveLogin(Boolean(JSON.parse(saveLoginString)));
        const savedLogin = getFromLocalStorage('saveData');
        if (savedLogin) {
            setSaveLogin(true);
            const savedUsername = getFromLocalStorage('username');
            const savedPassword = getFromLocalStorage('password');
            if (savedUsername && savedPassword) {
                setUsername(savedUsername);
                setPassword(savedPassword);
                handleLogin(savedUsername, savedPassword);
            }
        }
    }, []);

    // Lógica do Login (validação, envio para o servidor, etc.)
    const handleLogin = async (user: string, pass: string) => {     
        try {
            const response = await postLogin({username: user || username, password: pass || password});
            if (response) {
                navigate('/characters');
                if (saveLogin) {
                    saveToLocalStorage('username', username);
                    saveToLocalStorage('password', password);
                }
            }
        } catch (error) {
            console.error('Erro ao fazer requisição na API.');
        }
    }

    const toggleSaveLogin = () => {
        let newValue = !saveLogin;
        setSaveLogin(newValue);

        if (!newValue) {
            removeFromLocalStorage('username');
            removeFromLocalStorage('password');
        }

        saveToLocalStorage('saveData', newValue);
        
    }

    return (
        <LoginContainer>
            <CustomText
                fontSize="100px"
                fontWeight="normal"
                color="#ffffff"
                width="411px"
                height="113px"
                textAlign="left"
                style={{ position: 'absolute', top: '10px', left: '10px' }}
            >
                Márvel
            </CustomText>

            <CustomText
                fontSize="24px"
                fontWeight="normal"
                color="#ffffff"
                textAlign="center"
                style={{ marginBottom: '20px' }}
            >
                Bem-vindo(a) de volta!
            </CustomText>

            <CustomText
                fontSize="16px"
                fontWeight="normal"
                color="#ffffff"
                textAlign="center"
            >
                Acesse sua conta!
            </CustomText>

            <Input 
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
            />

            <Input 
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />

            <Options>
                <label>
                    <input type='checkbox' checked={saveLogin} onChange={toggleSaveLogin} />
                    Salvar Login
                </label>
                <Link>Esqueceu a senha?</Link>
            </Options>

            <Button onClick={() => handleLogin(username, password)}>Entrar</Button>

            <CustomText
                fontSize="14px"
                color="#ffffff"
                textAlign="center"
                style={{ marginTop: '20px' }}
            >
                Ainda não tem login? <Link>Cadastre-se</Link>
            </CustomText>
        </LoginContainer>
    )
}

export default LoginPage