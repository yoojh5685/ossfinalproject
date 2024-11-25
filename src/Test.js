import React, { useEffect } from 'react';
import axios from 'axios';

export default function Test() {
  useEffect(() => {
    // 포켓몬 리스트 가져오기
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => {
        // 가져온 데이터를 console에 출력
        console.log(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching the Pokémon list:', error);
      });
  }, []); // 빈 배열: 컴포넌트가 처음 렌더링될 때만 실행

  return (
    <div>
      <h1>포켓몬 리스트 테스트</h1>
      <p>콘솔을 확인하세요!</p>
    </div>
  );
}
