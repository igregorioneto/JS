import { Route, RouteProps, redirect } from 'react-router-dom';

interface ProtectedRouteProps extends RouteProps {
    component: React.ComponentType<any>;
}

const ProtectedRouteComponent: React.FC<ProtectedRouteProps> = ({ component: Component, ...rest }) => {
    const isAuthenticated = !!getFromLocalStorage('token');
    return (
        <Route 
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    redirect('/login')
                )
            }
        />
    );
}

export default ProtectedRouteComponent;