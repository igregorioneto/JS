import { useEffect, useState } from "react"
import MenuBar from "../../components/MenuBar/MenuBar"
import getCharactersData from "../../services/characterService";
import { CharacterType } from "../../domain/character";
import { Container } from "./Characters.styles";
import { CardList } from "../../components/CardList/CardList";
import { Grid } from "@mui/material";

/**
 * Página de Characters, listagem dos personagens da Marvel.
*/
function CharactersPage() {
    const [characters, setCharacters] = useState<CharacterType[]>([]);
    const [images, setImages] = useState<{[key: string]:string}>({});

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
                    const imagesMap = imageResults.reduce((acc, img) => ({...acc, ...img }), {})
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
                <Grid container spacing={2}>
                    {characters.map((character: CharacterType) => (
                        <Grid item xs={12} sm={6} md={4} key={character.id}>
                            <CardList 
                                name={character.name} 
                                description={character.description} 
                                backgroundImage={images[character.image_id] || ''}
                                info={character.appears_in}
                                avaliations={character.fan_rating}
                                />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default CharactersPage