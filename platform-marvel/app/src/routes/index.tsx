import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharactersPage from "../pages/CharactersPage";
import MoviesPage from "../pages/MoviesPage";
import ComicsPage from "../pages/ComicsPage";
import LoginPage from "../pages/LoginPage";
import SplashScreenPage from "../pages/SplashScreenPage";
import { PrivateRoute } from "./privateRoute";

export const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SplashScreenPage />} />
                <Route path='/login' element={<LoginPage />} />

                <Route path='/characters' element={
                    <PrivateRoute>
                        <CharactersPage />
                    </PrivateRoute>
                } />                
                <Route path='/movies' element={
                    <PrivateRoute>
                        <MoviesPage />
                    </PrivateRoute>                    
                } />
                <Route path='/comics' element={
                    <PrivateRoute>
                        <ComicsPage />
                    </PrivateRoute> 
                } />
            </Routes>
        </BrowserRouter>
    );
}