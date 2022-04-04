import React from 'react'
import { NavLink } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare} from 'react-icons/fa'



 const Nav = () => {


  return (
    <>
      <div className="header">

        <div className='socialLinkDivHead'>
          <FaFacebookSquare className='icons'/>
          <FaTwitterSquare className='icons'/>
          <FaInstagramSquare className='icons'/>
          <FaLinkedin className='icons'/>
          <FaGithubSquare className='icons'/>
        </div>

      <div className="nav" id='nav'>


      </div>
    </div>
  </>
  );
  };

  export default Nav
