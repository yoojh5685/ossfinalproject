import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../../CSS/Major.css'


export default function Major() {
  const navigate = useNavigate();

  const buttonClicked = () => {
    navigate('/result');
  };

  const goBack = () => {
    navigate('/survey7'); // survey4로 이동
  };

  return (
    <div className="container">      
    <button className="backbutton" onClick={goBack}> &lt; </button>
      <p>방석 연구소</p>
      <br/>

      <hr className="line1" />
      <br/>

      <h2>포켓몬이 대학에 왔다!</h2>
      <p className='page'>8/8</p>
      <br/><br/>


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

      <h3>전공 사전 신청 기간이 왔다.<br/> 어디로 가볼까?</h3>



      <div className="buttons8">
        <button className="button8" onClick={buttonClicked}>국제어문학부</button>
        <button className="button8" onClick={buttonClicked}>경영경제학부</button>
        <button className="button8" onClick={buttonClicked}>법학부</button>
        <button className="button8" onClick={buttonClicked}>커뮤니케이션학부</button>
        <button className="button8" onClick={buttonClicked}>상담심리<br/>사회복지학부</button>
        <button className="button8" onClick={buttonClicked}>공간환경<br/>시스템공학부</button>
        <button className="button8" onClick={buttonClicked}>콘텐츠융합<br/> 디자인학부</button>
        <button className="button8" onClick={buttonClicked}>생명과학부</button>
        <button className="button8" onClick={buttonClicked}>전산전자공학부</button>
        <button className="button8" onClick={buttonClicked}>기계제어공학부</button>
        <button className="button8" onClick={buttonClicked}>ICT창업학부</button>
        <button className="button8" onClick={buttonClicked}>창의융합교육원</button>
        <button className="button8" onClick={buttonClicked}>AI융합교육원</button>
      </div>
  
    </div>
  )
}
