import { CharacterType } from "../domain/character";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";

export default async function getCharactersData(): Promise<CharacterType[]> {
    let charactersDataString = getFromLocalStorage('charactersData');
    let charactersData: CharacterType[] = [];
    if (charactersDataString) {
        charactersData = JSON.parse(charactersDataString);
    } else {
        const response = await fetch('http://localhost:4000/marvel_characters');
        charactersData = await response.json();
        saveToLocalStorage('charactersData', JSON.stringify(charactersData));
    }

    return charactersData;
}