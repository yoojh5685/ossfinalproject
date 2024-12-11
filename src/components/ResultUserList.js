import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ResultUserList() {
  const [error, setError] = useState(null);
  const [users,setUser] = useState([]);
  useEffect( ()=> {
    const userData = async () => {
      try {
        const response = await axios.get(
          'https://674c853a54e1fca9290cd1ff.mockapi.io/User'
        );  
          setUser(response.data);
      } catch(error) {
        setError(error.message);
      }
    };

    userData();
  },[]);



  return (
    <div>
      <div>
        {error && <p>Error: {error}</p>}
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id}>

                <strong>전공:</strong> {user.major} <br />
                <strong>ID:</strong> {user.id} <br />
                <hr />
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}
