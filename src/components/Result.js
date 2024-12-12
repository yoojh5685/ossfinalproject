import React, { useEffect, useState } from 'react';
import "../CSS/Result.css";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import axios from 'axios';

export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();

  const [pokemon, setPokemon] = useState(null);
  const { major, pokemonId } = location.state || {};

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemonKoreanName, setPokemonKoreanName] = useState('');



  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        console.log(pokemonId);
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`

        );
        setPokemon(response.data);
        const speciesResponse = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
        );
        const koreanNameEntry = speciesResponse.data.names.find(
          (name) => name.language.name === 'ko'
        );
        if (koreanNameEntry) {
          setPokemonKoreanName(koreanNameEntry.name);
        } else {
          setPokemonKoreanName('이름 없음');
        }

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  const moveToType = () => {
    navigate('/result_pokeList', { state: { major, pokemonId } });
  };

  const goBack = () => {
    navigate('/major');
  };


  const moveToUser = () => {
    navigate('/result_userList', { state: { major, pokemonId } });
  };

  return (
    <div>
      <div className="resultContainer">
        <button className="backbutton" onClick={goBack}> &lt; </button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {pokemon && (
          <>
            <div>포켓몬이 대학에 왔다</div>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemonKoreanName}
              className="pokemonImage"
            />
            <div>
              <strong>{pokemonKoreanName }</strong>
            </div>
            <div>
              <strong>Type:</strong> {pokemon.types.map((t) => t.type.name).join(', ')}
            </div>
            <div>
              <strong>Height:</strong> {pokemon.height}
            </div>
            <div>
              <strong>Weight:</strong> {pokemon.weight}
            </div>
          </>
        )}
        <div>
          <button onClick={moveToType}>타입별로 보기</button>
          <button onClick={moveToUser}>user 보기</button>
        </div>
      </div>
    </div>
  );
}
