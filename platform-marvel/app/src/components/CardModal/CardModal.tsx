import { Rating } from "@mui/material";
import { CardModalProps } from "../CardList/cardProps";
import { Modal } from "react-bootstrap";
import { useImageLoader } from "../../hooks/useImageLoader";
import StarIcon from '@mui/icons-material/Star';
import { BackgroundImageSection, CloseButton, CustomModalBody, InfoSection, ModalContentContainer } from "./CardModal.styles";


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