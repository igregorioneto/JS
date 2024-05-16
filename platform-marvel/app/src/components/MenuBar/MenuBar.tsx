import CustomText from '../CustomText/CustomText';

import profile from '../../assets/profile.png';
import { redirect } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { removeFromLocalStorage } from '../../utils/localStorage';
import { LogoutButton, MenuBarContainer, MenuOptions, ModalContent, ProfilePicture, ProfileSelection } from './MenuBar.styles';
import Navbar from '../Nav/Nav';
import { Modal, Button, DropdownButton, Dropdown } from "react-bootstrap";
import { ModalInfo } from '../ModalInfo/ModalInfo';

const MenuBar = ({ setContainerZIndex }) => {
    const [showLogout, setShowLogout] = useState(false);
    const [dropDownOpen, setDropDownOpen] = useState(false);

    const dropdownRef = useRef(null);

    const toggleDropDown = () => {
        setDropDownOpen(!dropDownOpen);
        setContainerZIndex(dropDownOpen ? 'auto' : '-1');
    }

    const toogleLogout = () => {
        setShowLogout(!showLogout);
    }

    const handleLogout = () => {
        logout();
        setShowLogout(false);
        setDropDownOpen(false);
        setContainerZIndex('auto');
    }

    const handleClose = () => {
        setShowLogout(false);
        setDropDownOpen(false);
        setContainerZIndex('auto');
    };

    const logout = () => {
        removeFromLocalStorage('userData');
        removeFromLocalStorage('username');
        removeFromLocalStorage('password');
        window.location.reload();
        redirect('/login');
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropDownOpen(false);
                setContainerZIndex('auto');
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);

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

            <ProfileSelection ref={dropdownRef}>
                <DropdownButton
                    onClick={toggleDropDown}
                    title={<ProfilePicture src={profile} alt='Perfil' />}
                    id="dropdown-custom-components"
                >
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </DropdownButton>

            </ProfileSelection>

            
            {/* 
            Botão modal
            <ModalInfo
                title='Confirmação de Logout'
                body='Tem certeza que deseja sair?'
                show={showLogout}
                isButtonPrimary={true}
                colorPrimary='primary'
                colorSecondary='secondary'
                titleButtonPrimary='Sair'
                titleButtonSecondary='Cancelar'
                onHide={handleClose}
                onClick={handleLogout}
            /> */}
        </MenuBarContainer>
    );
};

export default MenuBar;