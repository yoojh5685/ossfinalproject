import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ResultPokeList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { major, pokemonId } = location.state || {};

  const types = [
    "normal", "fire", "water", "electric", "grass", "ice",
    "fighting", "poison", "ground", "flying", "psychic", "bug",
    "rock", "ghost", "dragon", "dark", "steel", "fairy"
  ];

  const goBack = () => {
    navigate('/result', { state: { major, pokemonId } });
  };

  const fetchPokemonByType = async (type) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
      const pokemon = response.data.pokemon.map((p) => ({
        name: p.pokemon.name,
        url: p.pokemon.url,
      }));
      setPokemonList(pokemon);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getPokemonIdFromUrl = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2]; // URL에서 ID 추출
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button className="backbutton" onClick={goBack}> &lt; </button>

      <div style={{ margin: '20px 0' }}>
        {types.map((type) => (
          <button
            key={type}
            onClick={() => fetchPokemonByType(type)}
            style={{ margin: '5px', padding: '10px', cursor: 'pointer' }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)} 타입
          </button>
        ))}
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {pokemonList.map((pokemon) => {
          const id = getPokemonIdFromUrl(pokemon.url); // URL에서 ID 추출
          return (
            <div
              key={pokemon.name}
              style={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '10px',
                margin: '10px',
                textAlign: 'center',
                width: '150px',
              }}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={pokemon.name}
                style={{ width: '100px', height: '100px' }}
              />
              <p>{pokemon.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
