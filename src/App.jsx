import React, { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

//------------------ Toastify or notification specific stuff-------------------X
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//------------------- Components Specific Stuff------------X
// import Navbar from './components/Navbar'

//---------------------------- Pages Specfic Stuff-----------------------X
import PrivatePage from './components/PrivatePage';
//Private Pages
import Home from './pages/Home'
import Logout from './pages/Logout';

//Public Pages
import Register from './pages/Register'
import Login from './pages/Login'
import AddImage from './pages/AddImage';

function App() {

  return (
    <>
      <BrowserRouter>

        {/* Navbar Component  */}
        {/* <Navbar /> */}


        <Routes >
          {/* Home/Secret Page  */}
          <Route path='/' element={<PrivatePage> <Home /> </PrivatePage>} > </Route>

        {/* Upload image Page  */}
          <Route path='/upload' element={<PrivatePage> <AddImage /> </PrivatePage>} > </Route>

          {/* Register Page  */}
          <Route path='/register' element={<Register />} ></Route>

          {/* Login Page  */}
          <Route path='/login' element={<Login />} ></Route>

          {/* Logout Page  */}
          <Route path='/logout' element={<PrivatePage > <Logout /> </PrivatePage>} ></Route>

        </Routes>

        {/* Toast Container to show our messages  */}
        <ToastContainer autoClose={2000} />

      </BrowserRouter>
    </>
  )
}

export default App
