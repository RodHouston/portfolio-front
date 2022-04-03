import React, {useRef} from 'react'
import { NavLink } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare, FaPinterestSquare, FaLinkedin, FaGithubSquare} from 'react-icons/fa'
import { MdRealEstateAgent} from 'react-icons/md';


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

        <NavLink  className="links firstLink" to="/marvel">
          Marvel
        </NavLink>
        <NavLink  className="links firstLink" to="/ ">
          Home
        </NavLink>

      </div>
    </div>
  </>
  );
  };

  export default Nav
