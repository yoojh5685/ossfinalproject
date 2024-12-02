import React from 'react'

export default function Survey1() {
  return (
    <div className="container">
      {/* 빨간 줄 추가 */}
      <hr style={{ border: '1px solid red' }} />

      {/* 제목과 내용 */}
      <h1 style={{ display: 'inline-block' }}>포켓몬이 대학에 왔다!</h1>
      <p style={{ display: 'inline-block', marginLeft: '10px' }}>1/7</p>

      <hr style={{ border: '1px solid red' }} />

      <h2>TA세션이 열린다고 한다.<br /> 내가 원하는 타입의 포켓몬은?</h2>


      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="https://i.namu.wiki/i/GHdxsPKY0wDHKKlWr12EzZGk84qWZWlGA7agxm-IIS53EB4lHMMokzUiOtrnvbVLdzxaeKQPBVP64PB8pI03qA.webp"
          alt="포켓몬 이미지"
          style={{ display: 'inline-block', width: 'auto', height: '200px' }} // 이미지 크기 조정
        />
        <img
          src="https://i.namu.wiki/i/YkAjBtBUK5eD0tQRClNjPavlldgT3eJcQfBQZShRW1D1eHru9SdhDRFKcX_nwexJoYQGQztZijWhz1dz50vsng.webp"
          alt="1/7 이미지"
          style={{ display: 'inline-block', marginLeft: '10px', width: 'auto', height: '200px' }} // 이미지 크기 조정
        />
      </div>

      {/* 버튼들 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button style={{ margin:'50px',padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
          버튼 1
        </button>
        <button style={{ margin:'50px',padding: '10px 20px', backgroundColor: '#008CBA', color: 'white', border: 'none', borderRadius: '5px' }}>
          버튼 2
        </button>
      </div>



    </div>
  )
}