import { useEffect, useState } from "react"
import MenuBar from "../../components/MenuBar/MenuBar"
import { ComicType } from "../../domain/comic"
import getComicsData from "../../services/comicService";
import { Container } from "./Comics.styles";
import { CardList } from "../../components/CardList/CardList";
import { Carousel } from "react-bootstrap";

/**
 * Página de Comics, listagem dos personagens da Marvel.
*/
function ComicsPage() {
    const [comics, setComics] = useState<ComicType[]>([]);
    const [images, setImages] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getComicsData();
                if (response !== null) {
                    setComics(response);

                    // Importação dinâmica das imagens
                    const imageImports = response.map(comic =>
                        import(`../../assets/${comic.image_id}.png`)
                            .then(image => ({ [comic.image_id]: image.default }))
                    );
                    const imageResults = await Promise.all(imageImports);
                    const imagesMap = imageResults.reduce((acc, img) => ({ ...acc, ...img }), {})
                    setImages(imagesMap);
                } else {
                    console.error('A resposta da API é nula.')
                }
            } catch (error) {
                console.error('Erro ao obter dados dos Quadrinhos:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <MenuBar />

            <Container>
                <div className="row justify-content-center">
                    <div className="col-md-12" style={{ width: '100vw' }}>
                        <Carousel
                            interval={null}
                            prevIcon={null}
                            prevLabel={null}
                            indicators={null}
                        >
                            {comics.reduce((slides: JSX.Element[], comic: ComicType, index: number) => {
                                if (index % 3 === 0) {
                                    const comicInGroup = comics.slice(index, index + 3);
                                    slides.push(
                                        <Carousel.Item key={index}>
                                            <div className="d-flex justify-content-center">
                                                {comicInGroup.map((comicInGroup) => (
                                                    <div key={comicInGroup.id} style={{ marginRight: '10px' }}>
                                                        <CardList
                                                            name={comicInGroup.name}
                                                            description={comicInGroup.description}
                                                            backgroundImage={images[comicInGroup.image_id] || ''}
                                                            info={comicInGroup.store}
                                                            avaliations={comicInGroup.critic_rating}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </Carousel.Item>
                                    );
                                }
                                return slides;
                            }, [])}
                        </Carousel>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ComicsPage