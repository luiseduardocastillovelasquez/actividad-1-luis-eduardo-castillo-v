import React from "react";

const ModalPay = ({ show, onClose, onAccept, movie }) => {
    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{movie.name}</h2>
                {/* Otras propiedades del movie que desees mostrar en la modal */}
                {/* Botón "Aceptar" ahora ejecuta la función onAccept */}
                <button onClick={() => onAccept(movie)}>Aceptar</button>
                {/* Botón "Cerrar" ahora maneja la lógica necesaria */}
                <button onClick={() => onClose(movie)}>Cerrar</button>
            </div>
        </div>
    );
};

export default ModalPay;