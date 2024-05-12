import { redirect } from 'react-router-dom';

const AuthComponent = ({ children }) => {
    // Verificar se o token esta no localStorage
    const isAuthenticated = !!getFromLocalStorage('token');

    if (isAuthenticated) {
        return <>{children}</>;
    } else {
        return redirect('/login');
    }
};

export default AuthComponent;