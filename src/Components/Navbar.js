import React from 'react'
import './navbar.css'
import { Link, useNavigate } from "react-router-dom";


import { Link } from 'react-router-dom'

const Navbar = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setIsAuthenticated(false);
    navigate("/");
  };
  return (
 <>
    {/* <div>Navbar</div>
    <Link to="/"  > Home</Link>
    <Link to="/about"  > About</Link>
    <Link to="/contact"  > Contact</Link> */}

  <header>
    <div class="logo">
      <img height={60} src="./axiom.png"/>
      <h1> <Link to="/home" className='color'> Axiom</Link></h1>
    </div>
    <nav>
      <ul>
        <li><Link to="/home"  > Home</Link></li>
        <li><Link to="/about"  > About</Link></li>
        <li><Link to="/services"  > Services</Link></li>
        <li><Link to="/contact"  > Contact</Link></li>
        {/* <li><Link to="/login"  > Login</Link></li>
        <li><Link to="/register"  > Register</Link></li> */}
        

        {/* <li><a href="services.html">Services</a></li> */}
        
      </ul>
    </nav>
  </header>
  


    </>
    
  )
}

export default Navbar