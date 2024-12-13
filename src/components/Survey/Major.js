import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import '../../CSS/Major.css'


export default function Major() {
  const navigate = useNavigate();
  const location = useLocation();
  const surveyData = location.state || {};


  const buttonClicked = (major) => {
    const pokemonId = majors[major];
    console.log(surveyData)
    navigate('/result', {state: {surveyData,major, pokemonId}});
  };

  const goBack = () => {
    navigate('/survey7',{state:surveyData}); // survey4로 이동
  };


  

  const majors = {
    "국제어문학부": 628,    // 워글 (Braviary)
    "경영경제학부": 52,     // 냐옹 (Meowth)
    "법학부": 493,         // 아르세우스 (Arceus)
    "커뮤니케이션학부": 122, // 마임맨 (Mr. Mime)
    "상담심리사회복지학부": 113, // 럭키 (Chansey)
    "공간환경시스템공학부": 532, // 으랏차 (Timburr)
    "콘텐츠융합디자인학부": 235, // 루브도 (Smeargle)
    "생명과학부": 1,       // 이상해씨 (Bulbasaur)
    "전산전자공학부": 25,   // 피카츄 (Pikachu)
    "기계제어공학부": 601,  // 기기기어르 (Klinklang)
    "ICT창업학부": 202,     // 마자용 (Wobbuffet)
    "창의융합교육원": 133,  // 이브이 (Eevee)
    "AI융합교육원": 137    // 폴리곤 (Porygon)
  };
  

  return (
    <div className="container">
      <button className="backbutton" onClick={goBack}> &lt; </button>
      <p>방석 연구소</p>
      <br />

      <hr className="line1" />
      <br />

      <h2>포켓몬이 대학에 왔다!</h2>
      <p className='page'>8/8</p>
      <br /><br />


      <div class="line2">
        <div class="part red"></div>
        <div class="part red"></div>
        <div class="part red"></div>
        <div class="part red"></div>
        <div class="part red"></div>
        <div class="part red"></div>
        <div class="part red"></div>
        <div class="part red"></div>

      </div>
      <div className="pokemon-images8">
        <img
          src="https://i.namu.wiki/i/7xenEC7cxA9QEbQ8CS-fXbV7BUD183drPr4N8D7JSxIxKOClFq2XCBmF5CLt52wPXLhLfYiXxnTWws3_Ae3Taw.webp"
          alt="뇌문시티 체육관"
        />
      </div>

      <h3>전공 사전 신청 기간이 왔다.<br /> 어디로 가볼까?</h3>


      <div className="buttons8">
        {Object.keys(majors).map((major) => (
          <button
            key={major}
            className="button8"
            onClick={() => buttonClicked(major)}
          >
            {major}
          </button>
        ))}
      </div>

    </div>
  )
}
