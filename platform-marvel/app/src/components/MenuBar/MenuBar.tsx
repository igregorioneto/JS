import CustomText from '../CustomText/CustomText';

import profile from '../../assets/profile.png';
import { Link, redirect } from 'react-router-dom';
import { useState } from 'react';
import { removeFromLocalStorage } from '../../utils/localStorage';
import { LogoutButton, MenuBarContainer, MenuOptions, ProfilePicture, ProfileSelection } from './MenuBar.styles';

const MenuBar = () => {
    const [showLogout, setShowLogout] = useState(false);

    const toogleLogout = () => {
        setShowLogout(!showLogout);
    }

    const logout = () => {
        removeFromLocalStorage('userData');
        removeFromLocalStorage('username');
        removeFromLocalStorage('password');
        window.location.reload();
        redirect('/login');
    }

    return (
        <MenuBarContainer>
            <CustomText
                fontSize="50px"
                fontWeight="normal"
                color="#ffffff"
                width="206px"
                height="36px"
                textAlign="left"
                rectangle={true}
                rectangeMaxHeight='45px'
                rectangeMaxWidth='85px'
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
                    onClick={toogleLogout}
                />
                {showLogout && (
                    <LogoutButton onClick={() => logout()} >Sair</LogoutButton>
                )}
            </ProfileSelection>
        </MenuBarContainer>
    );
};

export default MenuBar;