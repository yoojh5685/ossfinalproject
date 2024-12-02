import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../../CSS/Survey2.css'


export default function Survey2() {
  const navigate = useNavigate();

  const buttonClicked = () => {
    navigate('/survey3');
  };

  const goBack = () => {
    navigate('/survey1'); // survey1로 이동
  };

  return (
    <div className="container">      
    <button className="backbutton" onClick={goBack}> &lt; </button>
      <p>방석 연구소</p>
      <br/>

      <hr className="line1" />
      <br/>

      <h2>포켓몬이 대학에 왔다!</h2>
      <p className='page'>2/8</p>
      <br/><br/>


      <div class="line2">
  <div class="part red"></div>
  <div class="part red"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
</div>
      <div className="pokemon-images2">
        <img
          src="https://i.namu.wiki/i/SAfnDplgLnQ8QGJ6QS4OXQdPU8z0PnboYJbHJxXtNlb-qhfkRb4U41-qHR0tORYPJkIxC0NusDFxjNpLa4EMDA.webp"
          alt="뇌문시티 체육관"          
        />
      </div>

      <h3>아침 7시, 밤을 샌 모습으로 뉴턴에서 나오는<br /> 팀 트레이너를 만났다! 이때 드는 생각은?</h3>



      <div className="buttons2">
        <button className="button2" onClick={buttonClicked}>와 멋지다 나도 커서 꼭 저런 트레이너가 돼야지!</button>
        
        <button className="button2" onClick={buttonClicked}>와.. 진짜 힘들겠다 너무 고생하네?</button>
      </div>
  
    </div>
  )
}
