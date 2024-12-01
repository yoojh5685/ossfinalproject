import React, { useState } from 'react';
import '../CSS/Main.css';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  // 파이리, 꼬부기, 피카츄 데이터 하드코딩
  const pokemonList = [
    { name: '파이리', id: 4 },
    { name: '꼬부기', id: 7 },
    { name: '피카츄', id: 25 },
  ];

  const buttonClicked = () => {
    setCount(count + 1);
    navigate('/survey1');
  };

  return (
    <div className="container">
      <h1 className="title">포켓몬이 <br /> 대학에 왔다!</h1>
      <div className="description">
        한동에 포켓몬이 출현했다고? <br />
        나의 전공공부를 도와줄 포켓몬을 찾아봐요
      </div>
      <button className="button" onClick={buttonClicked}>
        포켓몬 찾으러 가기
      </button>
      <div className="count-section">
        <div className="count-label">참여자 수</div> 
        <div className="count">{count}</div>
      </div>
      <div className="pokemon-container">
        {pokemonList.map((pokemon) => (
          <div
            key={pokemon.name}
            className="pokemon-card"
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
              className="pokemon-image rotating-image"  

            />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
