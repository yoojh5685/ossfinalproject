import React from 'react'
import { useEffect, useState } from 'react'
import axios
  from 'axios';
export default function ResultPokeList() {

  const [pokemonList, setPokemonList] = useState([]);



  useEffect(() => {

    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => {
        setPokemonList(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching the Pokémon list:', error);
      });
  }, []);



  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {pokemonList.map((pokemon, index) => (
      <div
        key={pokemon.name}
        className="pokemon-card"
      >
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}
          alt={pokemon.name}

        />
        <p>{pokemon.name}</p>
      </div>
    ))}
  </div>
  );
}
