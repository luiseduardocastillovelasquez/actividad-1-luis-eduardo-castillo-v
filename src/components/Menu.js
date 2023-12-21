import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
        <Link to={`/`} className="menu-link">
            <button className="menu-button">Home</button>
        </Link>
        <Link to={`/movies/`} className="menu-link">
            <button className="menu-button">Documentales</button>
        </Link>
        <Link to={`/movies/`} className="menu-link">
            <button className="menu-button">Peliculas</button>
        </Link>
        </div>
    );
};

export default Menu;