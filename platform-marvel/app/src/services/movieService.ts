import { MovieType } from "../domain/movie";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";

export default async function getMoviesData(typeMovie: string = ''): Promise<MovieType[]> {
    let movieDataString = getFromLocalStorage('moviesData');
    let movieData: MovieType[] = [];
    if (movieDataString) {
        movieData = JSON.parse(movieDataString);
    } else {
        const response = await fetch('http://localhost:4000/marvel_movies');
        movieData = await response.json();
        saveToLocalStorage('moviesData', JSON.stringify(movieData));
    }

    return movieData;
}