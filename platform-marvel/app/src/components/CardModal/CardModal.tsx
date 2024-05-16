import { Rating } from "@mui/material";
import { CardModalProps } from "../CardList/cardProps";
import { Button, Modal } from "react-bootstrap";

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
}) => (
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
                                info.map((info, index) => (
                                    <li key={index}>{info}</li>
                                ))
                            }
                        </ul>
                    </div>
                    : <></>
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