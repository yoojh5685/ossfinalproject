import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import '../../CSS/Survey3.css'


export default function Survey3() {
  const navigate = useNavigate();
  const location = useLocation();
  const surveyData = location.state || {};

  const buttonClicked = (value) => {
    const updateSurveyData = { ...surveyData, survey3: value };
    console.log(updateSurveyData);
    navigate('/survey4',{state: updateSurveyData});
  };

  const goBack = () => {
    navigate('/survey2'); // survey2로 이동
  };

  return (
    <div className="container">      
    <button className="backbutton" onClick={goBack}> &lt; </button>
      <p>방석 연구소</p>
      <br/>

      <hr className="line1" />
      <br/>

      <h2>포켓몬이 대학에 왔다!</h2>
      <p className='page'>3/8</p>
      <br/><br/>


      <div class="line2">
  <div class="part red"></div>
  <div class="part red"></div>
  <div class="part red"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
</div>
      <div className="pokemon-images3">
        <img
          src="https://1.bp.blogspot.com/-KMk2RmHV_34/XqrAYNHn6rI/AAAAAAAANsk/EyMIlZd8SQM-hA3pBnpQtE-3xXt2ixRBwCLcBGAsYHQ/s1600/pokemon-i-choose-you-contains-a.jpg"
          alt="스타팅"          
        />
      </div>

      <h3>드디어 2학년이 되었다!<br />  포켓몬을 찾아 떠날 준비가 되었는데, <br /> 가장 먼저 어디로 갈까?</h3>



      <div className="buttons2">
        <button className="button2" onClick={()=>buttonClicked(1)}>톡톡튀는 사람들이 모여있데! 에벤에셀로 간다.</button>
        <button className="button2" onClick={()=>buttonClicked(2)}>우락부락한 사람들이 모여있데! 코너스톤으로 간다.</button>
        <button className="button2" onClick={()=>buttonClicked(3)}>빠릿빠릿한 사람들이 모여있데! 뉴턴으로 간다.</button>
        <button className="button2" onClick={()=>buttonClicked(4)}>반짝반짝한 사람들이 모여있데! 느헤미아로 간다.</button>
      </div>
  
    </div>
  )
}
