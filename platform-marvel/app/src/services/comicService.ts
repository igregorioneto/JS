import { ComicType } from "../domain/comic";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";

export default async function getComicsData(): Promise<ComicType[]> {
    let comicsDataString = getFromLocalStorage('comicsData');
    let comicsData: ComicType[] = [];
    if (comicsDataString) {
        comicsData = JSON.parse(comicsDataString);
    } else {
        const response = await fetch('http://localhost:4000/marvel_comics');
        comicsData = await response.json();
        saveToLocalStorage('comicsData', JSON.stringify(comicsData));
    }

    return comicsData;
}