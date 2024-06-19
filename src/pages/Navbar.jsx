import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { MdPerson } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/logo-regular.png";
import { useEffect } from 'react';


const Navbar = () => {
  const [navLink, setNavLink] = useState(false)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 974) {
        setNavLink(true)
      } else {
        setNavLink(false)
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  function handlehHamClick() {
    setNavLink(!navLink)
    console.log("clicked")
  }

  return (
    <nav className='navbar'>
      <div>
        <div>
        <Link to="/">
        <img src={Logo} alt="" />
        </Link>
        </div>
      </div>
      {(navLink || window.innerWidth > 974) && (
      // {/* {navLink÷  && ( */}
        <ul>
          <Link to="/" className='navbar_link'>Shop All</Link>
          <Link to="/" className='navbar_link'>Makeup</Link>
          <Link to="/" className='navbar_link'>Skin Care</Link>
          <Link to="/" className='navbar_link'>Hair Care</Link>
          <Link to="/about" className='navbar_link'>About</Link>
          <Link to="/" className='navbar_link'>Contact</Link>
        </ul>
      )}
      <div className='cart'>
        <div className='person'>
          <MdPerson />
        </div>
        <div className='cart'>
          <p>$0.00</p>
          <BsFillCartFill />
        </div>
      </div>
      <div className='ham'>
        <GiHamburgerMenu onClick={handlehHamClick} />
      </div>
    </nav>
  )
}

export default Navbar