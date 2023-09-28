import { useState } from 'react'
import React from 'react'
import Logo from '../../Assets/logo.png'
import './Header.css'
import Login from '../Login/Login'

const Header = () => {
  const [seen, setSeen] = useState(false);
  function togglePop () {
    setSeen(!seen);
};
  return (
  <header className='header'>
    <img src={Logo} alt="logoimg" className='logo' />
    <nav className='navbar'>
      <ul className='navbar-lists'>
    <li><a href='#' className='navbar-link home-link'>Home</a></li>
    <li><a href='#' className='navbar-link about-link'>About</a></li>
    <li><a href='#' className='navbar-link services-link'>Services</a></li>
    <li><a href='#' className='navbar-link clients-link'>Clients</a></li>
    <li><a href='#' className='navbar-link contact-link'>Contact Us</a></li>
    <button className='btn' onClick={togglePop}>Login</button>
            {seen ? <Login toggle={togglePop} /> : null}
      </ul>
    </nav>



  </header>
  )
}

export default Header
