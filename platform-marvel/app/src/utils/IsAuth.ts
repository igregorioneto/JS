import { getFromLocalStorage } from "./LocalStorage";

export const isAuth = () => {
    var token = getFromLocalStorage('userData');
    console.log(token)
    if (token === null)
        return false;
    return true;
}