import React, { useEffect, useState } from 'react'

//---------------- Packages
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

//--------------------- Components Specific Stuff -------------------X
import Loading from './Loading';
import Navbar from './Navbar'
import Footer from './Footer'

function PrivatePage({ children }) {
  const navigate = useNavigate();

  //----------------- Check the user is already login or not
  const [loading, setLoading] = useState(false); //Loading a button upto our work is not done

  const fetchUserInfo = async () => {
    const token = sessionStorage.getItem('token');

    const res = await fetch(`${import.meta.env.VITE_LOCAL_API}/api/user/getUser`, {
      method: 'GET',
      headers: {
        'Content-Type': "application/json",
        "auth-token": token,
      }
    })
    const data = await res.json();

    if (!data) {
      toast.warning("Check your connection or data");
      navigate('/login');
      setLoading(false);
      return;
    }

    if (data.success == true) {
      navigate('/');
      setLoading(false);
      return;
    }

    else if (data.success == false) {
      navigate('/login');
      setLoading(false);
      return;
    }
  }

  
  useEffect(() => {
    //Now call the api to check the user is valid
    fetchUserInfo();   
  }, []);

  return (
    <>
      {loading && <Loading />}

      {/* Navbar Component  */}
      <Navbar />

      {children}

      {/* Footer Component  */}
      <Footer />

    </>
  )
}

export default PrivatePage
