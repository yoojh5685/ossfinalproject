import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PokemonGif.css'; // CSS 파일을 불러옴

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    // 포켓몬 리스트 가져오기
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=1010')
      .then(response => {
        setPokemonList(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching the Pokémon list:', error);
      });
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>포켓몬 리스트</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {pokemonList.map((pokemon, index) => (
          <div
            key={pokemon.name}
            className="pokemon-card"
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              alt={pokemon.name}
              className="rotating-image" // CSS 클래스 추가
            />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
