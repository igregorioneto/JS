import styled from "styled-components";
import { Modal } from "react-bootstrap";

export const ModalContentContainer = styled.div`
    display: flex;
    height: 100%;
`;

export const InfoSection = styled.div`
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    color: #fff;
    background: #ff0000;
    background: linear-gradient(180deg, 
    #ff0000 0.00%, 
    #400e0e 100.00%);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
`;


export const CustomModalBody = styled(Modal.Body)`
    display: flex;
    height: 70vh;
    padding: 0;
    margin: 0;
`;

export const CloseButton = styled.button`
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: transparent;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
`;