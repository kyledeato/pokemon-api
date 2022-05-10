
import { useState } from 'react';
import './App.css';
import Fetch from './modules/Fetch';
import Display from './modules/Display';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const newPokemon = (pokemonsList) => {
    setPokemons(pokemonsList)
  }
  return (
    <div className="App">
      <Fetch newPokemon={newPokemon}/>
      <Display pokemons={pokemons}/> 
    </div>
  );
}

export default App;
