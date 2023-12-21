import React, { useEffect, useState } from 'react';

const LinearProgress = ({ color = 'blue', progress = 70 }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        // Actualiza el ancho de la barra de progreso cuando cambia la propiedad 'progress'
        setWidth(progress);
    }, [progress]);

    return (
        <div className="linear-progress">
            <div className={`progress-bar ${color}`} style={{ width: `${width}%` }}></div>
        </div>
    );
};

export default LinearProgress;
