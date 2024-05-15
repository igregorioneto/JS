import { UserType } from "../domain/user";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";

export default async function postLogin(user: UserType): Promise<any> {
    let userDataString = getFromLocalStorage('userData');
    let userData: string;
    if (userDataString) {
        userData = JSON.parse(userDataString);
    } else {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (response.status === 401 || response.status === 500) {
            return false;
        }
        userData = await response.json();
        saveToLocalStorage('userData', JSON.stringify(userData));
    }

    return true;
}