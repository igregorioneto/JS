import { useEffect, useState } from "react"
import MenuBar from "../../components/MenuBar/MenuBar"
import { ComicType } from "../../domain/comic"
import getComicsData from "../../services/comicService";
import { Container } from "./Comics.styles";
import { CarouselList } from "../../components/CarouselList/CarouselList";
import { ModalInfo } from "../../components/ModalInfo/ModalInfo";

/**
 * Página de Comics, listagem dos personagens da Marvel.
*/
function ComicsPage() {
    const [comics, setComics] = useState<ComicType[]>([]);
    const [images, setImages] = useState<{ [key: string]: string }>({});
    const [showError, setShowError] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<string>('');

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

    return (
        <>
            <MenuBar />

            <Container>
                {/* Listagem em formato de Carousel */}
                <CarouselList propList={comics} images={images} />

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