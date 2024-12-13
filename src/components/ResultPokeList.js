import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../CSS/ResultPokeList.module.css'



export default function ResultPokeList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { major, pokemonId ,surveyData} = location.state || {};
  const [pokemonKoreanName, setPokemonKoreanName] = useState([]);
  const [filter, setFilter] = useState(''); // 검색 필터 상태


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
      const pokemonData = response.data.pokemon;

      // ID 추출 및 한국어 이름 가져오기
      const updatedPokemonList = await Promise.all(
        pokemonData.map(async (p) => {
          const id = getPokemonIdFromUrl(p.pokemon.url);
          try {
            const speciesResponse = await axios.get(
              `https://pokeapi.co/api/v2/pokemon-species/${id}`
            );
            const koreanNameEntry = speciesResponse.data.names.find(
              (name) => name.language.name === 'ko'
            );
            return {
              name: p.pokemon.name,
              url: p.pokemon.url,
              id,
              koreanName: koreanNameEntry ? koreanNameEntry.name : '이름 없음', // 한국어 이름
            };
          } catch {
            return {
              name: p.pokemon.name,
              url: p.pokemon.url,
              id,
              koreanName: '이름 없음', // 실패 시 기본값
            };
          }
        })
      );

      setPokemonList(updatedPokemonList); // 타입별 포켓몬 리스트 저장
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

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase());
  };

  // 입력값에 따라 포켓몬 필터링
  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filter)
  );

  return (
    <div className={styles.container}>
    <div style={{ textAlign: 'center' }}>
      <button className={styles.backButton} onClick={goBack}> &lt; </button>




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

      <div style={{ margin: '20px 0' }}>
        <input
          type="text"
          placeholder="포켓몬 이름 검색"
          value={filter}
          onChange={handleFilterChange} // 입력값 변경 시 상태 업데이트
          style={{
            padding: '10px',
            width: '300px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
      </div>    

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredPokemonList.map((pokemon) => {
          const id = getPokemonIdFromUrl(pokemon.url);

          return (
            <div
              key={pokemon.name}
              style={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '10px',
                backgroundColor: 'white',
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
    </div>
  );
}
