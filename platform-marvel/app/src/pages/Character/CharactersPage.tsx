import { useEffect, useState } from "react"
import MenuBar from "../../components/MenuBar/MenuBar"
import getCharactersData from "../../services/characterService";
import { CharacterType } from "../../domain/character";
import { Container } from "./Characters.styles";
import { CarouselList } from "../../components/CarouselList/CarouselList";
import { ModalInfo } from "../../components/ModalInfo/ModalInfo";
import { useImageLoader } from "../../hooks/useImageLoader";

/**
 * Página de Characters, listagem dos personagens da Marvel.
*/
function CharactersPage() {
    const [characters, setCharacters] = useState<CharacterType[]>([]);
    const [showError, setShowError] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getCharactersData();
                if (response !== null) {
                    setCharacters(response);
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

    const [images, imageLoadError, imageLoadErrorMessage] = useImageLoader(characters);

    useEffect(() => {
        if (imageLoadError) {
            setShowError(true);
            setMessageError(imageLoadErrorMessage);
        }
    }, [imageLoadError, imageLoadErrorMessage]);

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