import React from "react";
import { Link } from "react-router-dom";

export const Movie = ({id, name, director, year, synopsis, reviews, duration, categoria, idioma, actores, imagen}) => {
    return (
        <div className="movie">
            <h2>{name}</h2>
            <img className="cartel" src={imagen} alt={imagen}/>
            <p>Sinopsis: {synopsis}</p>
            <p>Director: {director}</p>
            <p>Duracion : {duration} minutos</p>
            <p>Año: {year}</p>
            <p>Critica: {reviews}</p>
            <p>Categoria: {categoria}</p>
            <p>Idioma: {idioma}</p>
            <p>Actores: {actores}</p>
            <Link to={`/movies/${id}`}>
                <button className="detalle-button"> Ver Detalle</button>
            </Link>
        </div>
    );
}