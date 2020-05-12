import React from 'react'

// Importar estilo
import './HolaMundo.css';

// Componente HolaMundo
const HolaMundo = ({contenido, titulo, color, cambiarColor}) => {

    // Codigo JavaScript

    // Deconstruccion de props
    // const { contenido, titulo, color } = props; //Se pueden deconstruir directamente en los parametros de la funcion

    // Renderizado del componente
    return (
        <div className={`hijo ${color}`} onClick={() => {cambiarColor('red')}}>
            <div>
                {titulo}
            </div>
            <p>
                {contenido}
            </p>
        </div>
    )
}

// Exportar Componente
export default HolaMundo;
