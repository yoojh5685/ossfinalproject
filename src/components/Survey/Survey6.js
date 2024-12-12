import React from 'react'
import { useNavigate, useLocation} from 'react-router-dom';
import '../../CSS/Survey6.css'


export default function Survey6() {
  const navigate = useNavigate();
  const location = useLocation();
  const surveyData = location.state || {};

  const buttonClicked = (value) => {
    const updateSurveyData = { ...surveyData, survey6: value };
    console.log(updateSurveyData);
    navigate('/survey7',{state: updateSurveyData});
  };

  const goBack = () => {
    navigate('/survey5', {state : surveyData}); // survey5로 이동
  };

  return (
    <div className="container">      
    <button className="backbutton" onClick={goBack}> &lt; </button>
      <p>방석 연구소</p>
      <br/>

      <hr className="line1" />
      <br/>

      <h2>포켓몬이 대학에 왔다!</h2>
      <p className='page'>6/8</p>
      <br/><br/>


      <div class="line2">
  <div class="part red"></div>
  <div class="part red"></div>
  <div class="part red"></div>
  <div class="part red"></div>
  <div class="part red"></div>
  <div class="part red"></div>
  <div class="part"></div>
  <div class="part"></div>
</div>
      <div className="pokemon-images6">
        <img
          src="https://cdn.salgoonews.com/news/photo/202211/24647_67935_639.jpg"
          alt="뇌문시티 체육관"          
        />
      </div>

      <h3>친구가 정말 잡고싶었던 포켓몬(수강신청)을 <br/>놓쳤다고 슬퍼하고있는데…</h3>



      <div className="buttons2">
        <button className="button2" onClick={()=>buttonClicked(1)}>어쩌다가? 야 근데 그거 계절에 하는게 훨씬 좋데.</button>
        
        <button className="button2" onClick={()=>buttonClicked(2)}>헐.. 어떡해 속상하다 ㅠㅠ </button>
      </div>
  
    </div>
  )
}
