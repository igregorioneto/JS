import { CharacterType } from "../types/CharacterType";

export default async function getCharactersData(): Promise<CharacterType[]> {
    let charactersDataString = localStorage.getItem('charactersData');
    let charactersData: CharacterType[] = [];
    if (charactersDataString) {
        charactersData = JSON.parse(charactersDataString);
    } else {
        const response = await fetch('http://localhost:4000/marvel_characters');
        charactersData = await response.json();
        localStorage.setItem('charactersData', JSON.stringify(charactersData));
    }

    return charactersData;
}