import React from 'react'
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare, FaPinterestSquare, FaLinkedin, FaGithubSquare} from 'react-icons/fa'



 const Nav = () => {


  return (
    <>
      <div className="header">

        <div className='socialLinkDivHead'>
          <FaFacebookSquare className='icons'/>
          <FaTwitterSquare className='icons'/>
          <FaPinterestSquare className='icons'/>
          <FaLinkedin className='icons'/>
          <FaGithubSquare className='icons'/>
        </div>

      <div className="nav" id='nav'>
        <Link  className="links firstLink" to="/marvel">
          Marvel
        </Link>
        <Link  className="links firstLink" to="/ ">
          Home
        </Link>

      </div>
    </div>
  </>
  );
  };

  export default Nav
