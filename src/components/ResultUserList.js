import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ResultUserList() {
  const [error, setError] = useState(null);
  const [users,setUser] = useState(null);
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
      
      </div>
    </div>
  )
}
