import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Location } from 'react-router-dom';
export default function ResultUserList() {
  const [error, setError] = useState(null);
  const [users, setUser] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { major, pokemonId } = location.state || {}; 

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
    navigate('/result', {state : {major,pokemonId}});
  };


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
              <button>수정하기</button>
              <button>삭제하기</button>
              <hr />

            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}
