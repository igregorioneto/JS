import { Navigate } from "react-router-dom";
import { isAuth } from "../utils/IsAuth";


export const PrivateRoute = ({ children } : {children: JSX.Element}) => {
    const isAuthenticated  = isAuth();

    return isAuthenticated ? children : <Navigate to='/login' />;
};