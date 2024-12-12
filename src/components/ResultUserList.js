import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from './Modal'; 

export default function ResultUserList() {
  const [error, setError] = useState(null);
  const [users, setUser] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { major, pokemonId } = location.state || {};
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const majors = {
    "국제어문학부": 628,    // 워글 (Braviary)
    "경영경제학부": 52,     // 냐옹 (Meowth)
    "법학부": 493,         // 아르세우스 (Arceus)
    "커뮤니케이션학부": 122, // 마임맨 (Mr. Mime)
    "상담심리사회복지학부": 113, // 럭키 (Chansey)
    "공간환경시스템공학부": 532, // 으랏차 (Timburr)
    "콘텐츠융합디자인학부": 235, // 루브도 (Smeargle)
    "생명과학부": 1,       // 이상해씨 (Bulbasaur)
    "전산전자공학부": 25,   // 피카츄 (Pikachu)
    "기계제어공학부": 601,  // 기기기어르 (Klinklang)
    "ICT창업학부": 202,     // 마자용 (Wobbuffet)
    "창의융합교육원": 133,  // 이브이 (Eevee)
    "AI융합교육원": 137    // 폴리곤 (Porygon)
  };

  useEffect(() => {
    const userData = async () => {
      try {
        const response = await axios.get(
          'https://674c853a54e1fca9290cd1ff.mockapi.io/User'
        );
        setUser(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    userData();
  }, []);

  const goBack = () => {
    navigate('/result', { state: { major, pokemonId } });
  };

  const deleteButtonClicked = async (id) => {
    try {
      await axios.delete('https://674c853a54e1fca9290cd1ff.mockapi.io/User/' + id)
      setUser(users.filter((user) => user.id !== id));
    } catch (error) {
      setError(error.message);
    }
  }

  const openModal = (id) => {
    setSelectedUserId(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedUserId(null);
  };

  const handleMajorSelect = async (selectedMajor) => {
    if (!selectedUserId) return;

    try {
      const updatedMajorId = majors[selectedMajor];
      const response = await axios.put(
        `https://674c853a54e1fca9290cd1ff.mockapi.io/User/${selectedUserId}`,
        { major: selectedMajor, majorId: updatedMajorId }
      );

      // 상태 업데이트
      setUser(
        users.map((user) =>
          user.id === selectedUserId
            ? { ...user, major: response.data.major }
            : user
        )
      );

      closeModal(); // 모달 닫기
    } catch (error) {
      setError(error.message);
    }
  };

  const editButtonClicked = async(id) => {
    try{
      await axios.put('https://674c853a54e1fca9290cd1ff.mockapi.io/User/' + id)
    }catch(error){
      setError(error.message);
    }
  }








  return (
    <div>
      <div>
        <button className="backbutton" onClick={goBack}> &lt; </button>
        {error && <p>Error: {error}</p>}

        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <div >
                <strong>전공:</strong> {user.major} <br />
                <strong>ID:</strong> {user.id} <br />

              </div>
              <button onClick={() => openModal(user.id)}>수정하기</button>
              <button onClick={() => deleteButtonClicked(user.id)}>삭제하기</button>
              <hr />

            </li>
          ))}
        </ul>

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSelect={handleMajorSelect}
          majors={majors}
        />
      </div>
    </div>
  )
}
