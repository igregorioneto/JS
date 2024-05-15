import { useEffect, useState } from "react"
import MenuBar from "../../components/MenuBar/MenuBar"
import { ComicType } from "../../domain/comic"
import getComicsData from "../../services/comicService";
import { Container } from "./Comics.styles";
import { Grid } from "@mui/material";
import { CardList } from "../../components/CardList/CardList";

/**
 * Página de Comics, listagem dos personagens da Marvel.
*/
function ComicsPage() {
    const [comics, setComics] = useState<ComicType[]>([]);
    const [images, setImages] = useState<{[key: string]:string}>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getComicsData();
                if (response !== null) {
                    setComics(response);

                    // Importação dinâmica das imagens
                    const imageImports = response.map(comic => 
                        import(`../../assets/${comic.image_id}`)
                        .then(image => ({ [comic.image_id]: image.default }))
                    );
                    const imageResults = await Promise.all(imageImports);
                    const imagesMap = imageResults.reduce((acc, img) => ({...acc, ...img }), {})
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
                <Grid container spacing={2}>
                        {comics.map((comic: ComicType) => (
                            <Grid item xs={12} sm={6} md={4} key={comic.id}>
                                <CardList 
                                    name={comic.name} 
                                    description={comic.description} 
                                    backgroundImage={images[comic.image_id] || ''}
                                    info={comic.store}
                                    avaliations={comic.critic_rating}
                                    />
                            </Grid>
                        ))}
                </Grid>
            </Container>
        </>
    )
}

export default ComicsPage