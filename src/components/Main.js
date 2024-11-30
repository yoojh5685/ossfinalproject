import React, { useState } from 'react';
import '../CSS/Main.css';

export default function Main() {
  const [count, setCount] = useState(0); // 서버에서 user count세서 바꾸기 

  const buttonClicked = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <h1 className="title">포켓몬이 <br /> 대학에 왔다!</h1>
      <div className="description">
        한동에 포켓몬이 출현했다고? <br />
        나의 전공공부를 도와줄 아가를 찾아봐요
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
