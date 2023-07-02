import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand text-highlight" >
            <img src="./images/logo.png" alt="logo" style={{width:"37px"}} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link  to="/" className="nav-link active" aria-current="page" >Home</Link>
              </li>

            </ul>
            <div className="d-flex align-items-center">
            <Link to={"/logout"} > <button className="btn btn-danger mx-2 rounded-start">Logout</button></Link>
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar