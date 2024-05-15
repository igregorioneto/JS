import { useEffect, useState } from "react"
import MenuBar from "../../components/MenuBar/MenuBar"
import getCharactersData from "../../services/characterService";
import { CharacterType } from "../../domain/character";
import { Container } from "./Characters.styles";
import { CardList } from "../../components/CardList/CardList";
import { Carousel } from "react-bootstrap";

/**
 * Página de Characters, listagem dos personagens da Marvel.
*/
function CharactersPage() {
    const [characters, setCharacters] = useState<CharacterType[]>([]);
    const [images, setImages] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getCharactersData();
                if (response !== null) {
                    setCharacters(response);

                    // Importação dinâmica das imagens
                    const imageImports = response.map(character =>
                        import(`../../assets/${character.image_id}.png`)
                            .then(image => ({ [character.image_id]: image.default }))
                    );
                    const imageResults = await Promise.all(imageImports);
                    const imagesMap = imageResults.reduce((acc, img) => ({ ...acc, ...img }), {})
                    setImages(imagesMap);
                } else {
                    console.error('A resposta da API é nula.');
                }
            } catch (error) {
                console.error('Erro ao obter dados dos personagens:', error);
            }
        }

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
                            {characters.reduce((slides: JSX.Element[], character: CharacterType, index: number) => {
                                if (index % 3 === 0) {
                                    const characterInGroup = characters.slice(index, index + 3);
                                    slides.push(
                                        <Carousel.Item key={index}>
                                            <div className="d-flex justify-content-center">
                                                {characterInGroup.map((characterInGroup) => (
                                                    <div key={characterInGroup.id} style={{ marginRight: '10px' }}>
                                                        <CardList
                                                            name={characterInGroup.name}
                                                            description={characterInGroup.description}
                                                            backgroundImage={images[characterInGroup.image_id] || ''}
                                                            info={characterInGroup.appears_in}
                                                            avaliations={characterInGroup.fan_rating}
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

export default CharactersPage