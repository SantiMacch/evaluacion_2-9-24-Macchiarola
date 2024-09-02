import './App.css';
import { useState } from 'react';

function App() {
  const [frase, setFrase] = useState('')
  const [busca, setBusca] = useState('')

  const obtenerfrase = () =>{
    fetch(`https://api.adviceslip.com/advice`)
    .then(response => response.json())
    .then(data => setBusca(data))
    .catch(error => console.error(error))

  }

  const buscarfrase = () =>{
    fetch(`https://api.adviceslip.com/advice/${frase}`)
    .then(response => response.json())
    .then(data => setBusca(data))
    .catch(error => console.error(error))

    }
    
  const handleTermChange = (event) => {
    setFrase(event.target.value);
    }

  return (
    <main>

      <h1>Evaluación React - Requests</h1>
      <h1>Consejos de vida</h1>

      <div>
        <h2>Obtener un consejo aleatorio</h2>
        <button onClick={obtenerfrase}>Obtener</button>
        <p className="result-box">{frase.slip.advice}</p>
      </div>

      <div>
        <h2>Buscar un consejo</h2>
        <input type="text" onChange={handleTermChange} />
        <button onClick={buscarfrase}>Enviar</button>
        <h3>Resultados de búsqueda:</h3>
        <ul className="result-box">
          {busca.map((busca,id) => <li key={id}>{busca.slip.advice}</li>)}
        </ul>
      </div>

    </main>
  );
}

export default App;
