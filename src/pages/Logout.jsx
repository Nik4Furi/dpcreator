import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  //------------------ Login users can logout
  useEffect(()=>{
    sessionStorage.removeItem('token');

    navigate('/login');
  },[])

  return (
    <>
      <h2>Please wait to logout............</h2>
    </>
  )
}

export default Logout
