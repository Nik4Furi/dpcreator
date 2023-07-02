import React from 'react'

function Footer() {
  return (
    <>
      <footer id="footer" className="d-flex align-items-center justify-content-around text-bg-dark">
        <p className="fs-5">Copyright &copy; <span className="text-highlight"> dbcreators@2k23 </span> || All rights reserved  </p>
        <div className=''>
         <a href="https://www.linkedin.com/in/nikhil-gurjar-76b0a3210" target='blank' > <img src="/images/linkedin.png" alt="linkedin" className='rounded-pill mx-2' style={{width:"29px"}}/> </a>
          <a href="mailto:nikhilgurjar2212@gmail.com"> <img className='rounded-pill mx-2' src="/images/mail.png" alt="mail" style={{width:"32px"}} /></a>
        </div>
      </footer>
    </>
  )
}

export default Footer
