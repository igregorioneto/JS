import React from "react";

interface AuthContextProps {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

export const AuthContext = React.createContext<AuthContextProps>({
    isAuthenticated: false,
    login: () => {},
    logout: () => {}
});