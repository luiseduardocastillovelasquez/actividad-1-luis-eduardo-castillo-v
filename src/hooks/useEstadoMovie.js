import  { useEffect, useState } from "react";

export const useEstadoMovie = ({ movieId, onAlquilar }) => {
    const [verPeliculaEnabled, setVerPeliculaEnabled] = useState(false);

    useEffect(() => {
        const handleAlquilerTimeout = () => {
            // Restablecer el estado de alquilar y modificar el objeto en el localStorage
            setVerPeliculaEnabled(false);

            // Obtener la información actual de localStorage
            const storedData = JSON.parse(localStorage.getItem(`movie_${movieId}`)) || {};

            // Modificar el objeto y establecer alquiler a false
            const updatedData = {
                ...storedData,
                alquiler: false,
            };

            // Guardar la información actualizada en localStorage
            localStorage.setItem(`movie_${movieId}`, JSON.stringify(updatedData));
        };

        // Obtener la información del localStorage para la película actual
        const storedData = JSON.parse(localStorage.getItem(`movie_${movieId}`)) || {};

        // Verificar si el estado de alquiler es true en el localStorage
        if (storedData.alquiler) {
            setVerPeliculaEnabled(true);

            // Establecer el temporizador para modificar la información después de 10 segundos
            const timeoutId = setTimeout(() => {
                handleAlquilerTimeout();
                // Limpiar el temporizador al desmontar el componente
                clearTimeout(timeoutId);
            }, 10 * 1000);
        }
    }, [movieId]);

    const handleAlquilar = () => {
        // Actualizar el estado de alquiler
        setVerPeliculaEnabled(true);

        // Obtener la información actual de localStorage
        const storedData = JSON.parse(localStorage.getItem(`movie_${movieId}`)) || {};
        const updatedData = {
            id: movieId,
            alquiler: true,
            comprada: storedData.comprada || false,
        };

        // Guardar la información actualizada en localStorage
        localStorage.setItem(`movie_${movieId}`, JSON.stringify(updatedData));

        // Proporcionar la funcionalidad de alquilar
        if (onAlquilar) {
            onAlquilar();
        }
    };

    return { verPeliculaEnabled, handleAlquilar };
};

export default useEstadoMovie;