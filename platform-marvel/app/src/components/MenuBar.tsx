import styled from 'styled-components';
import CustomText from './CustomText';

import profile from '../assets/profile.png';
import { Link } from 'react-router-dom';

// Container para o Menu
const MenuBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; // Espaço entre os elementos
    padding: 10px 20px; // Espaçamento interno
    background-color: #333; // Cor de fundo
    color: #ffffff; // Cor do texto
`;

const MenuOptions = styled.div`
    display: flex; // Flexbox para organizar as opções
    gap: 20px; // Espaço entre as opções
`;

// Estilo para a foto de perfil
const ProfileSelection = styled.div`
    display: flex; // Flexbox para manter o alinhamento
    align-items: center;
    gap: 10px; // Espaço entre a foto e o botão
`;

// Componente da foto do perfil
const ProfilePicture = styled.img`
    width: 55px; // Largura da imagem
    height: 55px; // Altura da imagem
    border-radius: 50%; // Foto redonda
`;

const MenuBar = () => {
    return (
        <MenuBarContainer>
            <CustomText
                fontSize="50px"
                fontWeight="normal"
                color="#ffffff"
                width="206px"
                height="36px"
                textAlign="left"
            >
                Marvel
            </CustomText>

            <MenuOptions>
                <Link to='/characters'>Personagens</Link>
                <Link to='/movies'>Filmes</Link>
                <Link to='/comics'>HQs</Link>
            </MenuOptions>

            <ProfileSelection>
                <ProfilePicture
                    src={profile}
                    alt='Perfil'
                />
            </ProfileSelection>
        </MenuBarContainer>
    );
};

export default MenuBar;