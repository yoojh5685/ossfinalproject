import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PokemonGif.css'; // CSS 파일을 별도로 작성

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    // 포켓몬 리스트 가져오기
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
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
            style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '10px',
              margin: '10px',
              width: '150px',
              textAlign: 'center',
            }}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              alt={pokemon.name}
              style={{ width: '100px', height: '100px' }}
            />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
