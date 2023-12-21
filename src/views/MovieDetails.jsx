import React, {useContext, useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {MovieContext} from "../context/MovieContext";
import LinearProgress from "./LinearProgress";
import useEstadoMovie from "../hooks/useEstadoMovie";
const MovieDetails = () => {
    const {movieId} = useParams();
    const {movies} = useContext(MovieContext);
    const movie = movies.find(r => r.id === movieId);

    const { verPeliculaEnabled, handleAlquilar } = useEstadoMovie({
        movieId,
        onAlquilar: () => {
            // Aquí puedes agregar lógica adicional después de alquilar
            // por ejemplo, recargar datos o mostrar un mensaje
        },
    });

    if (!movies){
        return <h2>Pelicula no encontrada</h2>;
    }

    return (

        movies.length > 0 ? (
        <div className="movie">
            <h2>{movie.name}</h2>
            <img className="cartel" src={movie.imagen} alt={movie.imagen}/>
            <p>Sinopsis: {movie.synopsis}</p>
            <p>Director: {movie.director}</p>
            <p>Duracion : {movie.duration} minutos</p>
            <p>Año: {movie.year}</p>
            <p>Criticas: {movie.reviews}</p>
            <p>Actores: {movie.actores}</p>
            <p>Idioma: {movie.idioma}</p>
            <p>Categoria: {movie.categoria}</p>
            <Link to={`/movies/${movieId}`}>
                <button className="detalle-button">Comprar</button>
            </Link>
            <Link to={`/verMovie/${movieId}`}>
                <button
                    className={`detalle-button ${!verPeliculaEnabled ? "disabled-button" : ""}`}
                    disabled={!verPeliculaEnabled}
                >Ver película
                </button>
            </Link>
            <button className="detalle-button" onClick={handleAlquilar}>
                Alquilar
            </button>
        </div>
        ):(
            <LinearProgress color="green" />
        )
    );
}

export default MovieDetails;