import React, { useState } from 'react';
import Card from './Card'; 

function Formulario() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [mostrarCard, setMostrarCard] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (titulo.trim().length < 3 || /^\s/.test(titulo)) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    if (autor.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    setError('');
    setMostrarCard(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="autor">Autor:</label>
          <input
            type="text"
            id="autor"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Enviar</button>
      </form>
      {mostrarCard && (
        <Card titulo={titulo} autor={autor} />
      )}
    </div>
  );
}

export default Formulario;
