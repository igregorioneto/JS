import { Link, useLocation } from "react-router-dom";
import './Nav.css';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;
    

    return (
        <nav>
            <Link 
                to='/characters'
                className={isActive('/characters') ? 'active' : ''}
            >Personagens</Link>
            <Link 
                to='/movies'
                className={isActive('/movies') ? 'active' : ''}    
            >Filmes</Link>
            <Link 
                to='/comics'
                className={isActive('/comics') ? 'active' : ''}
            >HQs</Link>
        </nav>
    );
};

export default Navbar;