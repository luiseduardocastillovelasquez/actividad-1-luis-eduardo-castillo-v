import React from 'react';
import {Link} from "react-router-dom";
import useRedirection from "../hooks/useRedirection";

function Landing() {

    useRedirection("/movies", 3000);

    return (
        <div className="landing">
            <Link to={"/movies"}> {/* Añadimos un enlace a la vista de restaurantes */}
                <h1>Bienvenidos a Nuestro Delivery</h1>
            </Link>
            <span className="laser-pointer"></span> {/* Puntero láser original */}
            <span className="laser-pointer-reverse"></span> {/* Nuevo puntero láser en sentido contrario */}
        </div>
    );
}

export default Landing;
