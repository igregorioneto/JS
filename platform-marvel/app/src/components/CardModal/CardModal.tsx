import { Rating } from "@mui/material";
import { CardModalProps } from "../CardList/cardProps";
import { Button, Modal } from "react-bootstrap";
import { useImageLoader } from "../../hooks/useImageLoader";

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
        <>
            <Modal show={showModal} onHide={onHide}>
                <Modal.Header closeButton>
                    {name}
                </Modal.Header>
                <Modal.Body>
                    {isDescription ? <div style={{ marginBottom: '10px' }}>{description}</div> : <></>}
                    {isSuggestion ?
                        <div>
                            <div>{titleSuggestion}</div>
                            <ul>
                                {
                                    info.map((infoItem, index) => (
                                        <li key={index}>
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
                            <ul>
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
                    <Rating name="read-only" value={avaliations} readOnly />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>X</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};