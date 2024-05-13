import { UserType } from "../domain/UserType";

export default async function postLogin(user: UserType): Promise<any> {
    let userDataString = localStorage.getItem('userData');
    let userData: string;
    if (userDataString) {
        userData = JSON.parse(userDataString);
    } else {
        console.log(user.username, user.password)
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (response.status === 401 || response.status === 500) {
            console.error(response.body);
            return false;
        }
        userData = await response.json();
        localStorage.setItem('userData', JSON.stringify(userData));
    }

    return true;
}