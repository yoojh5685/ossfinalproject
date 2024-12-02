import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../../CSS/Survey5.css'


export default function Survey5() {
  const navigate = useNavigate();

  const buttonClicked = () => {
    navigate('/survey6');
  };

  const goBack = () => {
    navigate('/survey4'); // survey4로 이동
  };

  return (
    <div className="container">      
    <button className="backbutton" onClick={goBack}> &lt; </button>
      <p>방석 연구소</p>
      <br/>

      <hr className="line1" />
      <br/>

      <h2>포켓몬이 대학에 왔다!</h2>
      <p className='page'>5/8</p>
      <br/><br/>


      <div class="line2">
  <div class="part red"></div>
  <div class="part red"></div>
  <div class="part red"></div>
  <div class="part red"></div>
  <div class="part red"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
</div>
      <div className="pokemon-images5">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3lJ5Y7kLew-4et1vJF4wAiPCNuZTx_HsJkA&s"
          alt="뇌문시티 체육관"          
        />
      </div>

      <h3>점심시간이 되었다. 오늘 나의 메뉴는?</h3>



      <div className="buttons5">
        <button className="button5" onClick={buttonClicked}>CU</button>
        <button className="button5" onClick={buttonClicked}>GS25</button>
        <button className="button5" onClick={buttonClicked}>맘스</button>
        <button className="button5" onClick={buttonClicked}>학관</button>
        <button className="button5" onClick={buttonClicked}>라운지</button>
        <button className="button5" onClick={buttonClicked}>예소드</button>
        <button className="button5" onClick={buttonClicked}>버거킹</button>
        <button className="button5" onClick={buttonClicked}>명성</button>
        <button className="button5" onClick={buttonClicked}>샐러디</button>
      </div>
  
    </div>
  )
}
