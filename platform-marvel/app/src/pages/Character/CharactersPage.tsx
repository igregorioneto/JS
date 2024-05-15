import { useEffect, useState } from "react"
import MenuBar from "../../components/MenuBar/MenuBar"
import getCharactersData from "../../services/characterService";
import { CharacterType } from "../../domain/character";
import { Container } from "./Characters.styles";
import { CarouselList } from "../../components/CarouselList/CarouselList";
import { ModalInfo } from "../../components/ModalInfo/ModalInfo";

/**
 * Página de Characters, listagem dos personagens da Marvel.
*/
function CharactersPage() {
    const [characters, setCharacters] = useState<CharacterType[]>([]);
    const [images, setImages] = useState<{ [key: string]: string }>({});
    const [showError, setShowError] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<string>('');

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
                    setShowError(true);
                    setMessageError('A resposta da API é nula.');
                }
            } catch (error) {
                console.error('Erro ao obter dados dos personagens:', error);
                setShowError(true);
                    setMessageError('Erro ao obter dados dos personagens');
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <MenuBar />

            <Container>
                {/* Listagem em formato de Carousel */}
                <CarouselList propList={characters} images={images} />

                {
                showError ? (
                    < ModalInfo
                        title='Erro de carregamento'
                        body={messageError}
                        show={showError}
                        isButtonPrimary={false}
                        colorPrimary='primary'
                        colorSecondary='secondary'
                        titleButtonPrimary='Sair'
                        titleButtonSecondary='Fechar'
                        onHide={() => setShowError(false)}
                    />
                ) : <></>
            }
            </Container>
        </>
    )
}

export default CharactersPage