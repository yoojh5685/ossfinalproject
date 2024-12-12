import React, { useEffect, useState } from 'react';
import "../CSS/Result.css";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import axios from 'axios';

export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();

  const [pokemon, setPokemon] = useState(null);
  const { major, pokemonId,surveyData} = location.state || {};

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemonKoreanName, setPokemonKoreanName] = useState('');
  const [nickname, setNickname] = useState('');

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

  
  const moveToMain = () => {
    navigate('/')
  }

  const postData = () => {
    const Data = {
      ...surveyData,
      major,
      nickname,
    };

    axios.post('https://674c853a54e1fca9290cd1ff.mockapi.io/User', Data)
    .then(response => {
      alert("성공적으로 추가되었습니다.")
      console.log('Data submitted successfully:', response.data);
  })
    .catch(error => {
      console.error('Error submitting data:', error);
    })
  };



  return (
    <div>
      <div className="resultContainer">
        <button className="backButton" onClick={goBack}> &lt; </button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {pokemon && (
          <>
            
            <h2>포켓몬이 대학에 왔다</h2>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemonKoreanName}
              className="pokemonImage"
            />
            <div>
              <h3>{pokemonKoreanName}</h3>
            </div>
            <div>
              <strong>타입:</strong> {pokemon.types.map((t) => t.type.name).join(', ')}
            </div>
            

            <div>
              <label> 닉네임:  </label>
              <input 
                type="text"
                value={nickname}
                placeholder='닉네임을 입력해주세요'
                onChange={(e) => setNickname(e.target.value)}

              />
            </div>
            <button onClick={postData}>내 정보 저장하기 </button>
          </>
        )}
        <div>
         
          <button onClick={moveToType}>타입별로 보기</button>
          <button onClick={moveToUser}>user 보기</button>
          <button onClick={moveToMain}>처음으로</button>
        </div>
      </div>
    </div>
  );
}
