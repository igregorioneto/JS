import { ComicType } from "../types/ComicType";

export default async function getComicsData(): Promise<ComicType[]> {
    let comicsDataString = localStorage.getItem('charactersData');
    let comicsData: ComicType[] = [];
    if (comicsDataString) {
        comicsData = JSON.parse(comicsDataString);
    } else {
        const response = await fetch('http://localhost:4000/marvel_comics');
        comicsData = await response.json();
        localStorage.setItem('charactersData', JSON.stringify(comicsData));
    }

    return comicsData;
}