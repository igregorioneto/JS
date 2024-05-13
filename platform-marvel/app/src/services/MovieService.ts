import { MovieType } from "../types/MovieType";

export default async function getMoviesData(typeMovie: string = ''): Promise<MovieType[]> {
    let movieDataString = localStorage.getItem('moviesData');
    let movieData: MovieType[] = [];
    if (movieDataString) {
        movieData = JSON.parse(movieDataString);
    } else {
        const response = await fetch('http://localhost:4000/marvel_movies');
        movieData = await response.json();
        localStorage.setItem('moviesData', JSON.stringify(movieData));
    }

    return movieData;
}