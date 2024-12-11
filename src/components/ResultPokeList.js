import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Location, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function ResultPokeList() {

  const [pokemonList, setPokemonList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { major, pokemonId } = location.state || {};
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const goBack = () => {
    navigate('/result', { state: { major, pokemonId } });
  };

  // useEffect(() => {

  //   axios.get('https://pokeapi.co/api/v2/pokemon?limit=30')
  //   // axios.get('https://pokeapi.co/api/v2/language/3')
  //     .then(response => {
  //       setPokemonList(response.data.results);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching the Pokémon list:', error);
  //     });
  // }, []);

  const types = [
    "normal", "fire", "water", "electric", "grass", "ice",
    "fighting", "poison", "ground", "flying", "psychic", "bug",
    "rock", "ghost", "dragon", "dark", "steel", "fairy"
  ];
  
  const fetchPokemonByType = async (type) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
      const pokemon = response.data.pokemon.map((p) => p.pokemon.name); // 포켓몬 이름만 추출
      setPokemonList(pokemon);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <button className="backbutton" onClick={goBack}> &lt; </button>

      <div>
    {types.map((type) => (
      <button key={type} onClick={() => fetchPokemonByType(type)}>
        {type.charAt(0).toUpperCase() + type.slice(1)} 타입
      </button>
    ))}
  </div>

      {pokemonList.map((pokemon, index) => (
        <div
          key={pokemon.name}
          className="pokemon-card"
        >
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
            alt={pokemon.name}

          />
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
}
