import { useEffect, useState } from "react";
import MenuBar from "../components/MenuBar"
import { MovieType } from "../domain/movie"
import getMoviesData from "../services/movieService";
import { getFromLocalStorage } from "../utils/localStorage";

/**
 * Página de Movies, listagem dos personagens da Marvel.
*/
function MoviesPage() {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [typeMovie, setTypeMovie] = useState('');

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

    useEffect(() => {    
        fetchData();
    }, []);

    const handleChangeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectType = event.target.value;
        setTypeMovie(selectType);

        const moviesString = getFromLocalStorage('moviesData');        
        if (moviesString) {
            let movies: MovieType[] = JSON.parse(moviesString);
            let filteredMovies = selectType ? movies.filter(movie => movie.type_launch === selectType) : movies;
            console.log(filteredMovies);
            setMovies(filteredMovies);            
        } else {
            console.error(`Não foram encontrados filmes do tipo: ${selectType}`);
        }        
    }
        

    return (
        <>
            <MenuBar />
            
            <div>
                <h2>Filmes</h2>
                <select id="mySelector" value={typeMovie} onChange={handleChangeType}>
                    <option value=''>Filtrar por</option>
                    <option value='launch'>Lançamento</option>
                    <option value='chronology'>Cronologia</option>
                </select>
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