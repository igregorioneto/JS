import { Carousel } from "react-bootstrap";
import { CardList } from "../CardList/CardList";

interface CaroulselListProps {
    propList: any[];
    images: { [key: string]: string };
}

export const CarouselList: React.FC<CaroulselListProps> = ({ propList, images }) => (
    <div className="row justify-content-center">
        <div className="col-md-12" style={{ width: '100vw' }}>
            <Carousel
                interval={null}
                prevIcon={null}
                prevLabel={null}
                indicators={null}
            >
                {propList.map((props) => (
                    <Carousel.Item key={props.id}>
                        <div className="d-flex justify-content-center">
                            <CardList
                                name={props.name}
                                description={props.description}
                                backgroundImage={images[props.image_id] || ""}
                                info={props.streaming_platform}
                                avaliations={props.critic_rating}
                            />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    </div>
);