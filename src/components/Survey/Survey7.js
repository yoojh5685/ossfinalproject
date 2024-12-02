import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../../CSS/Survey7.css'


export default function Survey7() {
  const navigate = useNavigate();

  const buttonClicked = () => {
    navigate('/major');
  };

  const goBack = () => {
    navigate('/survey6'); // survey6로 이동
  };

  return (
    <div className="container">      
    <button className="backbutton" onClick={goBack}> &lt; </button>
      <p>방석 연구소</p>
      <br/>

      <hr className="line1" />
      <br/>

      <h2>포켓몬이 대학에 왔다!</h2>
      <p className='page'>7/8</p>
      <br/><br/>


      <div class="line2">
  <div class="part red"></div>
  <div class="part red"></div>
  <div class="part red"></div>
  <div class="part red"></div>
  <div class="part red"></div>
  <div class="part red"></div>
  <div class="part red"></div>
  <div class="part"></div>
</div>
      <div className="pokemon-images7">
        <img
          src="https://i.pinimg.com/736x/4a/f5/61/4af561364252927306f4c344b4ffc534.jpg"
          alt="뇌문시티 체육관"          
        />
      </div>

      <h3>팀 누나(오빠)가 23:00에 <br/> 한한하자고 연락이 왔다.</h3>



      <div className="buttons7">
        <button className="button7" onClick={buttonClicked}>아 갑자기….? 피곤하다고 거절한다. .</button>
        
        <button className="button7" onClick={buttonClicked}>엇.. 내가 오늘 할게 얼마나 있지? 오늘 당장해야하는게 있나? 아 없나? 그럼 그냥 나가야겠다! </button>
      </div>
  
    </div>
  )
}
