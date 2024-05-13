import { ComicType } from "../domain/comic";

export default async function getComicsData(): Promise<ComicType[]> {
    let comicsDataString = localStorage.getItem('comicsData');
    let comicsData: ComicType[] = [];
    if (comicsDataString) {
        comicsData = JSON.parse(comicsDataString);
    } else {
        const response = await fetch('http://localhost:4000/marvel_comics');
        comicsData = await response.json();
        localStorage.setItem('comicsData', JSON.stringify(comicsData));
    }

    return comicsData;
}