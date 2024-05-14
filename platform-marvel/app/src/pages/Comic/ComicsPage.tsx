import { useEffect, useState } from "react"
import MenuBar from "../../components/MenuBar"
import { ComicType } from "../../domain/comic"
import getComicsData from "../../services/comicService";

/**
 * Página de Comics, listagem dos personagens da Marvel.
*/
function ComicsPage() {
    const [comics, setComics] = useState<ComicType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getComicsData();
                if (response !== null) {
                    setComics(response);
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
            
            <div>
                <h2>HQs</h2>
                <ul style={{ listStyleType: 'none', padding: 0, display: 'flex' }}>
                    {comics.map((comic: ComicType) => (
                        <li key={comic.id} style={{ margin: '0 10px' }}>
                            {comic.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ComicsPage