import CustomText from '../CustomText/CustomText';

import profile from '../../assets/profile.png';
import { redirect } from 'react-router-dom';
import { useState } from 'react';
import { removeFromLocalStorage } from '../../utils/localStorage';
import { LogoutButton, MenuBarContainer, MenuOptions, ModalContent, ProfilePicture, ProfileSelection } from './MenuBar.styles';
import Navbar from '../Nav/Nav';
import { Modal, Button } from "react-bootstrap";

const MenuBar = () => {
    const [showLogout, setShowLogout] = useState(false);

    const toogleLogout = () => {
        setShowLogout(!showLogout);
    }

    const handleLogout = () => {
        logout();
        setShowLogout(false);
    }

    const handleClose = () => setShowLogout(false);

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
                textAlign="left"
                rectangle={true}
                rectangeMaxHeight='55px'
                rectangeMaxWidth='85px'
            >
                Marvel
            </CustomText>

            <MenuOptions>
                <Navbar />
            </MenuOptions>

            <ProfileSelection>
                <ProfilePicture
                    src={profile}
                    alt='Perfil'
                    onClick={toogleLogout}
                />
            </ProfileSelection>

            {/* Botão modal */}
            <Modal show={showLogout} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmação de Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tem certeza que deseja sair?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleLogout}>
                        Sair
                    </Button>
                </Modal.Footer>
            </Modal>
        </MenuBarContainer>
    );
};

export default MenuBar;