import { Rating } from "@mui/material";
import { CardModalProps } from "../CardList/cardProps";
import { Button, Modal } from "react-bootstrap";
import { useImageLoader } from "../../hooks/useImageLoader";
import styled, { createGlobalStyle } from "styled-components";
import StarIcon from '@mui/icons-material/Star';

const ModalContentContainer = styled.div`
    display: flex;
    height: 100%;
`;

const InfoSection = styled.div`
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
`;

const BackgroundImageSection = styled.div<{ backgroundImage: string }>`
    flex: 1;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    position: relative;
`;

const CustomModalBody = styled(Modal.Body)`
    display: flex;
    height: 70vh;
    padding: 0;
    margin: 0;
`;

const CloseButton = styled.button`
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: transparent;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
`;


export const CardModal: React.FC<CardModalProps> = ({
    name,
    description,
    backgroundImage,
    info,
    avaliations,
    titleAvaliations,
    isDescription,
    isSuggestion,
    titleSuggestion,
    showModal,
    onHide
}) => {
    const [images, showError, messageError] = useImageLoader(true, false, undefined, info);
    return (
        <Modal show={showModal}
            onHide={onHide}
            dialogClassName="custom-modal"
            centered
        >
            <CustomModalBody>
                <ModalContentContainer>
                    <InfoSection>

                        <h3>{name}</h3>
                        {isDescription ? <div style={{ marginBottom: '10px' }}>{description}</div> : <></>}
                        {isSuggestion ?
                            <div>
                                <div>{titleSuggestion}</div>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {
                                        info.map((infoItem, index) => (
                                            <li key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
                                                {images[infoItem] && (
                                                    <img
                                                        src={images[infoItem]}
                                                        alt={infoItem}
                                                        style={{ marginLeft: '10px', width: '50px', height: '50px' }}
                                                    />
                                                )
                                                }
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            : <div>
                                <div>{titleSuggestion}</div>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {
                                        info.map((infoItem, index) => (
                                            <li key={index}>
                                                {infoItem}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        }
                        <div>{titleAvaliations}</div>
                        <Rating
                            name="read-only"
                            value={avaliations}
                            emptyIcon={<StarIcon style={{ opacity: 0.55, color: '#84848D' }} fontSize="inherit" />}
                            size="large" readOnly />

                    </InfoSection>

                    <BackgroundImageSection backgroundImage={backgroundImage}>
                        <CloseButton onClick={onHide}>X</CloseButton>
                    </BackgroundImageSection>

                </ModalContentContainer>

            </CustomModalBody>
        </Modal>
    );
};