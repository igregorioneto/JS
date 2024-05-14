import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharactersPage from "../pages/Character/CharactersPage";
import MoviesPage from "../pages/Movie/MoviesPage";
import ComicsPage from "../pages/Comic/ComicsPage";
import LoginPage from "../pages/Login/LoginPage";
import SplashScreenPage from "../pages/SplashScreen/SplashScreenPage";
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