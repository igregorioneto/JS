import styled from 'styled-components';

// Container para o Menu
export const MenuBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; // Espaço entre os elementos
    padding: 10px 20px; // Espaçamento interno
    background-color: #333; // Cor de fundo
    color: #ffffff; // Cor do texto
    filter: drop-shadow(0px 3px 3px rgba(255,0,0,0.53 ));
    background: #000000;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const MenuOptions = styled.div`
    display: flex; // Flexbox para organizar as opções
    gap: 20px; // Espaço entre as opções

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }
`;

// Estilo para a foto de perfil
export const ProfileSelection = styled.div`
    display: flex; // Flexbox para manter o alinhamento
    align-items: center;
    gap: 10px; // Espaço entre a foto e o botão

    @media (max-width: 768px) {
        align-self: flex-end;
    }
`;

// Componente da foto do perfil
export const ProfilePicture = styled.img`
    width: 55px; // Largura da imagem
    height: 55px; // Altura da imagem
    border-radius: 50%; // Foto redonda
`;

// Estilo para o botão sair
export const LogoutButton = styled.button`
    background-color: #ff0000;
    color: #ffffff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
`;

export const ModalContent = styled.div`
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
`;