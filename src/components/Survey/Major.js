import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../../CSS/Major.css'


export default function Major() {
  const navigate = useNavigate();

  const buttonClicked = (major) => {
    const pokemonId = majors[major];

    navigate('/result', {state: {major, pokemonId}});
  };

  const goBack = () => {
    navigate('/survey7'); // survey4로 이동
  };


  const majors = {
    "국제어문학부": 1,
    "경영경제학부": 4,
    "법학부": 7,
    "커뮤니케이션학부": 9,
    "상담심리사회복지학부": 15,
    "공간환경시스템공학부": 25,
    "콘텐츠융합디자인학부": 33,
    "생명과학부": 37,
    "전산전자공학부": 58,
    "기계제어공학부": 66,
    "ICT창업학부": 89,
    "창의융합교육원": 133,
    "AI융합교육원": 150,
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
