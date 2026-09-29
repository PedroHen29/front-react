import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  // useState cria uma variavel e uma função para mudar essa variavel
  // serve para armazenar estador
  // este aqui armazena o pokemon
  const [pokemon, setPokemon] = useState(null);

  // esse aqui armazena se esta carregando ou nao
  const [loading, setLoading] = useState(false);

  async function buscarPokemon() {
    // gera um numero aleatorio
    const id = Math.floor(Math.random() * 1025) + 1;

    setLoading(true);

    try {
      const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

      const dados = await resposta.json();

      setPokemon(dados);
    } catch (err) {
      console.log("Erro ao buscar Pokemon", err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      <h1>Pokémon Aleatório</h1>
      <button onClick={buscarPokemon}>Buscar Pokemon</button>

      {/** O paragrafo so aparece quando o loading é true */}
      {loading && <p>Carregando...</p>}

      {/** quando pokemon for true e loading for false */}
      {pokemon && !false && (
        <div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />

          <h2>{pokemon.name}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
