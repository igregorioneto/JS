import { Button, Modal } from "react-bootstrap";

interface ModalInfoProps {
    title: string;
    body: string;
    colorPrimary?: string;
    colorSecondary?: string;
    show: boolean;
    titleButtonPrimary?: string;
    titleButtonSecondary?: string;
    isButtonPrimary: boolean;
    onHide: () => void;
    onClick?: () => void;
}

export const ModalInfo: React.FC<ModalInfoProps> = ({
    title,
    body,
    colorPrimary,
    colorSecondary,
    show,
    titleButtonPrimary,
    titleButtonSecondary,
    isButtonPrimary,
    onHide,
    onClick,
}) => (
    <>
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {body}
            </Modal.Body>
            <Modal.Footer>
                <Button variant={colorSecondary} onClick={onHide}>
                    {titleButtonSecondary}
                </Button>
                {
                    isButtonPrimary ? (
                        <Button variant={colorPrimary} onClick={onClick}>
                            {titleButtonPrimary}
                        </Button>
                    ) : <></>
                }
            </Modal.Footer>
        </Modal>
    </>
);