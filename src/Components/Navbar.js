import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ userName, setIsAuthenticated, setUserName }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the stored username and reset authentication state
    localStorage.removeItem('userName');
    setIsAuthenticated(false);
    setUserName('');
    navigate('/'); // Redirect to login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/home">
          <img 
            src="./axiom.png" 
            alt="Axiom logo" 
            height="70" 
            className="d-inline-block align-top" 
          />
          <span className="ms-2 fw-bold">Axiom</span>
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-center fw-bold">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            {userName && (
              <>
                <li className="nav-item">
                  <span className="nav-link">Welcome, {userName}</span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-secondary ms-2 fw-bold" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
