import React, { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";

const useAlquilar = ({ onClose, onAlquilar }) => {
    const handleAlquilar = () => {
        onAlquilar();
        onClose();
    };

    return (
        <div className="popup">
            <h3>¿Deseas alquilar la película?</h3>
            <button onClick={handleAlquilar}>Alquilar</button>
            <button onClick={onClose}>Cancelar</button>
        </div>
    );
};

export default useAlquilar;
