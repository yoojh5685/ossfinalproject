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


  const shareButton = async () => {
    try {
      if (navigator.share) {

        document.getElementById("share-btn").disabled = true;
  
        await navigator.share({
          title: '😈전공 포켓몬 추천 서비스🔴\n전공도 타입이 있다고?  나랑 맞는 포켓몬은?',
          text: '',
          url: 'https://oss-class3-team1.vercel.app/',
        });
  
        alert("공유가 완료되었습니다!");
      } else {
        alert("공유하기가 지원되지 않는 환경입니다.");
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log("공유가 취소되었습니다."); // 사용자 취소 처리
      } else {
        console.error("공유 중 오류 발생:", error.message);
        alert("공유 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    } finally {

      document.getElementById("share-btn").disabled = false;
    }
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

          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
              className="pokemon-image rotating-image"
            />
            {/* <p>{pokemon.name}</p> */}
          </div>
        ))}
      </div>

      <button id="share-btn" className="button" onClick={shareButton}> 공유하기 </button>     

    </div>
  );
}
