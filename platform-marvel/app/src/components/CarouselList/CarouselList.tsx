import { Button, ListGroup } from "react-bootstrap";
import { CardList } from "../CardList/CardList";
import { useState } from "react";
import { CardModal } from "../CardModal/CardModal";

interface CaroulselListProps {
    propList: any[];
    images: { [key: string]: string };
}

export const CarouselList: React.FC<CaroulselListProps> = ({ propList, images }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [selectedItem, setSelectedItem] = useState<any | null>(null);

    const handleNext = () => {
        setCurrentIndex((prevIndex: number) => (prevIndex + 1) % propList.length);
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex: number) => (prevIndex - 1 + propList.length) % propList.length);
    }

    const handleModal = (item: any) => setSelectedItem(item);
    const hiddleModal = () => setSelectedItem(null);

    return (
        <div className="row justify-content-center">
            <div className="col-md-12" style={{ width: '100vw' }}>

                <div style={{ display: 'flex', alignItems: 'center', overflowX: 'hidden' }}>
                    <Button onClick={handlePrev}
                        style={{ backgroundColor: '#ff0000', marginRight: '10px', display: currentIndex === 0 ? 'none' : 'block' }}
                    >{'<'}</Button>

                    {/* Listagem dos itens */}
                    <div style={{ width: '100%', maxWidth: '80vw', overflowX: 'hidden' }}>
                        <ListGroup horizontal style={{ margin: '0', padding: '0', whiteSpace: 'nowrap' }}>
                            {propList.map((props, index) => (
                                <ListGroup.Item key={props.id} style={{ background: 'none', border: 'none', flex: '0 0 auto', width: '80vw', maxWidth: '140px', margin: '0 10px', transform: `translateX(${(index - currentIndex) * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
                                    <CardList
                                        name={props.name}
                                        description={props.description}
                                        backgroundImage={images[props.image_id] || ""}
                                        info={props.info}
                                        avaliations={props.avaliations}
                                        onShowModal={() => handleModal(props)}
                                    />
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>
                    <Button onClick={handleNext}
                        style={{ backgroundColor: '#ff0000', marginLeft: '10px', display: currentIndex === propList.length - 1 ? 'none' : 'block' }}
                    >{'>'}</Button>
                </div>

                {/* Modal do Item */}
                {selectedItem && (
                    < CardModal
                        name={selectedItem.name}
                        description={selectedItem.description}
                        backgroundImage={images[selectedItem.image_id] || ""}
                        info={selectedItem.info}
                        avaliations={selectedItem.avaliations}
                        titleAvaliations="Avaliação"
                        isDescription={true}
                        isSuggestion={true}
                        titleSuggestion="Disponível para compra:"
                        showModal={!!selectedItem}
                        onHide={hiddleModal}
                    />
                )}

            </div>
        </div>
    );
}