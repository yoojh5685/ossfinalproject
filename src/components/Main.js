import React, { useState } from 'react';
import '../CSS/Main.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function Main() {
  const [count, setCount] = useState(0); // 서버에서 user count세서 바꾸기 
  const navigate = useNavigate();
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
    </div>
  );
}
