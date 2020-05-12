import React, { useState, useEffect } from 'react';

import HolaMundo from './components/HolaMundo';

import './App.css';

const App = () => {  
  // Codigo JavaScript

      //Variable , Cambiar      / useState(Valor predeterminado)
  const [color, setColor] = useState('blue');

  useEffect(() => {
    // Ejecuta lo que este aca adentro
    console.log('Cambio Color');
  }, [color] // Cada vez que el input cambia el valor, ejecuta lo que se encuentra dentro del efecto
  )

  useEffect(() => {
    // Ejecuta lo que este aca adentro
    
  }, []) // Pasando un arreglo vacio al efecto hacemos de que se ejecute solo cuando el componente se monte la primera vez


  return (
    <div className='padre'>

      <HolaMundo
        contenido={'Este es un prop enviado desde padre'}
        titulo={'Hola Mundo'}  
        color={color}
        cambiarColor={setColor}     
      />

      <div>
        <button onClick={() => {setColor('red')}}>Cambiar a Rojo</button>
        <button onClick={() => {setColor('blue')}}>Cambiar a Azul</button>
        <button onClick={() => {setColor('green')}}>Cambiar a Verde</button>
      </div>
    </div>
  );
}

export default App;
