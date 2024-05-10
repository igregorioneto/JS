import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import SplashScreenPage from './pages/SplashScreenPage'
import LoginPage from './pages/LoginPage';
import CharactersPage from './pages/CharactersPage';
import MoviesPage from './pages/MoviesPage';
import ComicsPage from './pages/ComicsPage';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<SplashScreenPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/characters' element={<CharactersPage />} />
      <Route path='/movies' element={<MoviesPage />} />
      <Route path='/comics' element={<ComicsPage />} />
    </Routes>
  </Router>
);

export default App
