import React, { useEffect, useState } from 'react';
import CustomText from '../../components/CustomText/CustomText';
import { useNavigate } from 'react-router-dom';
import postLogin from '../../services/userService';
import { getFromLocalStorage, removeFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage';
import { Button, Input, LoginContainer, Options, Link } from './LoginPage.styles';
import { ModalInfo } from '../../components/ModalInfo/ModalInfo';

/**
 * Página de Login, para logar o usuário no App.
*/
function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [saveLogin, setSaveLogin] = useState(false);
    const [showError, setShowError] = useState(false);
    const [messageError, setMessageError] = useState<string>('');

    const navigate = useNavigate();

    useEffect(() => {
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
            const response = await postLogin({ username: user || username, password: pass || password });
            if (response) {
                navigate('/characters');
                if (saveLogin) {
                    saveToLocalStorage('username', username);
                    saveToLocalStorage('password', password);
                }
            }
        } catch (error) {
            console.error('Erro ao fazer requisição na API.');
            setShowError(true);
            setMessageError('Erro ao fazer requisição na API.');
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
                height="113px"
                textAlign="left"
                style={{ marginLeft: '10vw', marginBottom: '20px', width: '80vw', maxWidth: '300px' }}
                rectangle={true}
                rectangeMaxHeight='8vw'
                rectangeMaxWidth='15vw'
            >
                Marvel
            </CustomText>

            <CustomText
                fontSize="24px"
                fontWeight="normal"
                color="#ff0000"
                textAlign="center"
                style={{ marginBottom: '10px', width: '80vw', maxWidth: '300px' }}
            >
                Bem-vindo(a) de volta!
            </CustomText>

            <CustomText
                fontSize="16px"
                fontWeight="normal"
                color="#84848d"
                textAlign="center"
                style={{ marginBottom: '20px', width: '80vw', maxWidth: '300px' }}
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
                <label style={{ color: '#84848d' }}>
                    <input style={{ marginRight: '10px' }} type='checkbox' checked={saveLogin} onChange={toggleSaveLogin} />
                    Salvar Login
                </label>
                <Link style={{ color: '#84848d' }}>Esqueceu a senha?</Link>
            </Options>

            <Button onClick={() => handleLogin(username, password)}>Entrar</Button>

            <CustomText
                fontSize="14px"
                color="#84848d"
                textAlign="center"
                style={{ marginTop: '10px', width: '80vw', maxWidth: '300px' }}
            >
                Ainda não tem login? <Link style={{ color: '#ff0000', textDecoration: 'none' }} >Cadastre-se</Link>
            </CustomText>

            {
                showError ? (
                    < ModalInfo
                        title='Erro de Login'
                        body={messageError}
                        show={showError}
                        isButtonPrimary={false}
                        colorPrimary='primary'
                        colorSecondary='secondary'
                        titleButtonPrimary='Sair'
                        titleButtonSecondary='Fechar'
                        onHide={() => setShowError(false)}
                    />
                ) : <></>
            }
        </LoginContainer>
    )
}

export default LoginPage