import { useEffect, useState } from "react";
import MenuBar from "../components/MenuBar"
import { MovieType } from "../types/MovieType"
import getMoviesData from "../services/MovieService";

/**
 * Página de Movies, listagem dos personagens da Marvel.
*/
function MoviesPage() {
    const [movies, setMovies] = useState<MovieType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getMoviesData();
                if (response !== null) {
                    setMovies(response);
                } else {
                    console.error('A resposta da API é nula.');
                }
            } catch (error) {
                console.error('Erro ao obter dados dos Filmes:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <MenuBar />
            
            <div>
                <h2>Filmes</h2>
                <ul style={{ listStyleType: 'none', padding: 0, display: 'flex' }}>
                    {movies.map((movie: MovieType) => (
                        <li key={movie.id} style={{ margin: '0 10px' }}>
                            {movie.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default MoviesPage