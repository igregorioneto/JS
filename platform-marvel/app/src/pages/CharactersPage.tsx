import { useEffect, useState } from "react"
import MenuBar from "../components/MenuBar"
import getCharactersData from "../services/CharacterService";
import { CharacterType } from "../types/CharacterType";

/**
 * Página de Characters, listagem dos personagens da Marvel.
*/
function CharactersPage() {
    const [characters, setCharacters] = useState<CharacterType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getCharactersData();
                if (response !== null) {
                    setCharacters(response);
                    console.log(response);
                } else {
                    console.error('A respostam da API é nula.');
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
            
            <div>
                <h2>Personagens</h2>
                <ul style={{ listStyleType: 'none', padding: 0, display: 'flex' }}>
                    {characters.map((character: CharacterType) => (
                        <li key={character.id} style={{ margin: '0 10px' }}>
                            {character.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default CharactersPage