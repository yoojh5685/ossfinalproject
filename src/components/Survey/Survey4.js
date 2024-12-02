import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../../CSS/Survey4.css'


export default function Survey4() {
  const navigate = useNavigate();

  const buttonClicked = () => {
    navigate('/survey5');
  };

  const goBack = () => {
    navigate('/survey3'); // survey3로 이동
  };

  return (
    <div className="container">      
    <button className="backbutton" onClick={goBack}> &lt; </button>
      <p>방석 연구소</p>
      <br/>

      <hr className="line1" />
      <br/>

      <h2>포켓몬이 대학에 왔다!</h2>
      <p className='page'>4/8</p>
      <br/><br/>


      <div class="line2">
  <div class="part red"></div>
  <div class="part red"></div>
  <div class="part red"></div>
  <div class="part red"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
</div>
      <div className="pokemon-images4">
        <img
          src="https://gaymingmag.com/wp-content/uploads/2021/02/cosplaypikachu.jpg"
          alt="뇌문시티 체육관"          
        />
      </div>

      <h3>팀CC를 하게 되었다! 가장 마음에 드는 상대는?</h3>



      <div className="buttons4">
        <button className="button4" onClick={buttonClicked}>나한테 잘해주는데 평판이 진짜 별로인 트레이너</button>
        
        <button className="button4" onClick={buttonClicked}>내 앞에서는 진짜 어색한데 다른 사람한테는 엄청 잘해주는 트레이너</button>
      </div>
  
    </div>
  )
}
