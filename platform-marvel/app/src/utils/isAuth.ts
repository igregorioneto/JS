import { getFromLocalStorage } from "./localStorage";

export const isAuth = () => {
    var token = getFromLocalStorage('userData');
    if (token === null)
        return false;
    return true;
}