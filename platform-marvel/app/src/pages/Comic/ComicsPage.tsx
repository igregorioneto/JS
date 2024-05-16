import { useEffect, useState } from "react"
import MenuBar from "../../components/MenuBar/MenuBar"
import { ComicType } from "../../domain/comic"
import getComicsData from "../../services/comicService";
import { Container } from "./Comics.styles";
import { CarouselList } from "../../components/CarouselList/CarouselList";
import { ModalInfo } from "../../components/ModalInfo/ModalInfo";
import { useImageLoader } from "../../hooks/useImageLoader";

/**
 * Página de Comics, listagem dos personagens da Marvel.
*/
function ComicsPage() {
    const [comics, setComics] = useState<ComicType[]>([]);
    const [showError, setShowError] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getComicsData();
                if (response !== null) {
                    setComics(response);
                } else {
                    console.error('A resposta da API é nula.')
                    setShowError(true);
                    setMessageError('A resposta da API é nula.');
                }
            } catch (error) {
                console.error('Erro ao obter dados dos Quadrinhos:', error);
                setShowError(true);
                setMessageError('Erro ao obter dados dos Quadrinhos.');
            }
        };
        fetchData();
    }, []);

    const [images, imageLoadError, imageLoadErrorMessage] = useImageLoader(false, true, comics, undefined);

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
                <CarouselList propList={comics} images={images} page="comic" />

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

export default ComicsPage