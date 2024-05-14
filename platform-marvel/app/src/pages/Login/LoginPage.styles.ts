import styled from 'styled-components';
import backgroundImage from '../../assets/background.png';

// Estilo para tela de login
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;  
  background-size: cover;
  position: relative;
  overflow: hidden;
  background-color: #000000;  

  @media (min-width: 700px) {
    background: linear-gradient(89deg, 
    #000000 0.00%, 
    rgba(33,33,33,0.74 ) 67.44%, 
    rgba(128,128,128,0 ) 100.00%),
    url(${backgroundImage}) no-repeat right center;
  }

  @media (max-width: 1200px) {
    padding-left: 15vw;
  }

  @media (max-width: 992px) {
    padding-left: 10vw;
  }

  @media (max-width: 768px) {
    padding-left: 5vw;
  }

  @media (max-width: 576px) {
    padding-left: 2vw;
  }

  @media (max-width: 336px) {
    padding-left: 1vw;
  }
`;

// Campo de entrada para formulário
export const Input = styled.input`
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 100px;
  font-size: 16px;
  width: calc(100% - 20px);
  max-width: 300px;
  height: 28px;
`;

// Estilo para o botão de login
export const Button = styled.button`
  height: 48px;
  width: 100%;
  max-width: 320px;
  padding: 10px;
  margin: 10px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 100px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0055cc;
  }
`;

// Estilo checkbox e link
export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 20px);
  max-width: 300px;
  margin: 20px 10px;
`;

export const Link = styled.a`
  color: #ffffff;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;