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
    "국제어문학부": 1,
    "경영경제학부": 4,
    "법학부": 7,
    "커뮤니케이션학부": 9,
    "상담심리사회복지학부": 15,
    "공간환경시스템공학부": 25,
    "콘텐츠융합디자인학부": 33,
    "생명과학부": 37,
    "전산전자공학부": 58,
    "기계제어공학부": 66,
    "ICT창업학부": 89,
    "창의융합교육원": 133,
    "AI융합교육원": 150,
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
