import { useEffect, useState } from "react"
import MenuBar from "../../components/MenuBar/MenuBar"
import getCharactersData from "../../services/characterService";
import { CharacterType } from "../../domain/character";
import { Container } from "./Characters.styles";
import { CardList } from "../../components/CardList/CardList";

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
                <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {characters.map((character: CharacterType) => (
                        <li key={character.id}>
                            <CardList 
                                name={character.name} 
                                description={character.description} 
                                backgroundImage={images[character.image_id] || ''}/>
                        </li>
                    ))}
                </ul>
            </Container>
        </>
    )
}

export default CharactersPage