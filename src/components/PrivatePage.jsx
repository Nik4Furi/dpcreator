import React, { useEffect, useState } from 'react'

//--------------------- Components Specific Stuff -------------------X
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading';
import { toast } from 'react-toastify';

function PrivatePage({ children }) {
  const navigate = useNavigate();

  //----------------- Check the user is already login or not
  const [loading, setLoading] = useState(false); //Loading a button upto our work is not done
  const [user,setUser] = useState();

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
    console.log('check the data ',data);

    if (!data) {
      toast.warning("Check your connection or data");
      navigate('/login');
      setLoading(false);
      return;
    }

    if (data.success == true) {
      setUser(data.user);
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

  console.log('check user details ',user);

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
