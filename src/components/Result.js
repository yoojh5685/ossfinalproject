import React from 'react'
import "../CSS/Result.css"
import { useNavigate } from 'react-router-dom'
export default function Result() {
  const navigate = useNavigate();

  const moveToType = () => {
    navigate('/result_pokeList');
  };

  

  const moveToUser = () => {
    navigate('/result_userList');
  };

  return (
    <div>
      <div className ='resultContainer'>
        <div> 포켓몬이 대학에 왔다</div>
        <img/>

        <div> 포켓몬 설명  </div>
        <div> 전공 설명  </div>
        
        <div> 
          <button onClick={moveToType}>타입별로 보기 </button>
          <button onClick={moveToUser}>user 보기 </button>
        </div>

      </div>
    </div>
  )
}

