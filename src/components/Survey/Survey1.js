import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../CSS/Survey1.css';

export default function Survey1() {
  const navigate = useNavigate();

  const buttonClicked = () => {
    navigate('/survey2');
  };

  const goBack = () => {
    navigate('/'); // Main.js로 이동
  };

  return (
    <div className="container">
      <button className="backbutton" onClick={goBack}> &lt; </button>
      <p>방석 연구소</p>
      <br/>

      <hr className="line1" />
      <br/>

      <h2>포켓몬이 대학에 왔다!</h2>
      <p className='page'>1/8</p>
      <br/><br/>


      <div class="line2">
  <div class="part red"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
</div>

      <h3>TA세션이 열린다고 한다.<br /> 내가 원하는 타입의 포켓몬은?</h3>

      <div className="pokemon-images">
        <img
          src="https://i.namu.wiki/i/GHdxsPKY0wDHKKlWr12EzZGk84qWZWlGA7agxm-IIS53EB4lHMMokzUiOtrnvbVLdzxaeKQPBVP64PB8pI03qA.webp"
          alt="든든한 포켓몬"          
        />
        <img
          src="https://i.namu.wiki/i/YkAjBtBUK5eD0tQRClNjPavlldgT3eJcQfBQZShRW1D1eHru9SdhDRFKcX_nwexJoYQGQztZijWhz1dz50vsng.webp"
          alt="지적인 포켓몬"
        />
      </div>
      <p>든든한 포켓몬</p>
      <p>지적인 포켓몬</p>


      <div className="buttons">
        <button className="button" onClick={buttonClicked}>버튼 1</button>
        <button className="button" onClick={buttonClicked}>버튼 2</button>
      </div>
    </div>
  );
}
