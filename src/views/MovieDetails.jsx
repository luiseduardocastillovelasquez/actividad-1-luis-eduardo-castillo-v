import React, {useContext, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {MovieContext} from "../context/MovieContext";
import LinearProgress from "./LinearProgress";
import useEstadoMovie from "../hooks/useEstadoMovie";
const MovieDetails = () => {
    const {movieId} = useParams();
    const {movies} = useContext(MovieContext);
    const movie = movies.find(r => r.id === movieId);

    const [showModal, setShowModal] = useState(false);
    const { verPeliculaEnabled, handleAlquilar } = useEstadoMovie({
        movieId,
        onAlquilar: () => {
            // Aquí puedes agregar lógica adicional después de alquilar
            // por ejemplo, recargar datos o mostrar un mensaje
        },
    });

    const handleAccept = () => {
        // Ocultar la modal
        setShowModal(false);

        // Ejecutar la función de alquilar
        handleAlquilar();
    };

    if (!movies){
        return <h2>Pelicula no encontrada</h2>;
    }

    return (

        movies.length > 0 ? (
        <div className="movie">
            <h2>{movie.name}</h2>
            <img className="cartel" src={movie.imagen} alt={movie.imagen}/>
            <div className="movie-details">
                <div className="column">
                    <p>Sinopsis: <span>{movie.synopsis}</span></p>
                    <p>Director: <span>{movie.director}</span></p>
                    <p>Duracion: <span>{movie.duration} minutos</span></p>
                    <p>Año: <span>{movie.year}</span></p>
                    <p>Valor Compra: <span>${movie.preciocompra} Pesos</span></p>
                </div>
                <div className="column">
                    <p>Criticas: <span>{movie.reviews}</span></p>
                    <p>Actores: <span>{movie.actores}</span></p>
                    <p>Idioma: <span>{movie.idioma}</span></p>
                    <p>Categoria: <span>{movie.categoria}</span></p>
                    <p>Valor Alquiler: <span>${movie.precioalquiler} Pesos</span></p>
                </div>
            </div>
            <Link to={`/movies/${movieId}`}>
                <button className="detalle-button">Comprar</button>
            </Link>
            <button className="detalle-button" onClick={() => setShowModal(true)}>
                Alquilar
            </button>

            <Link to={`/verMovie/${movieId}`}>
                <button
                    className={`detalle-button ${!verPeliculaEnabled ? "disabled-button" : ""}`}
                    disabled={!verPeliculaEnabled}
                >
                    Ver película
                </button>
            </Link>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p>¿Estás seguro de que quieres alquilar?</p>
                        <button className="detalle-button" onClick={handleAccept}>Aceptar</button>
                        <button className="detalle-button" onClick={() => setShowModal(false)}>Cancelar</button>
                    </div>
                </div>
            )}

        </div>
        ):(
            <LinearProgress color="green" />
        )
    );
}

export default MovieDetails;