import React from 'react'

function Navbar() {
  return (
    <>
        <nav className="navbar">
        <img src="./mds.jpg" alt="mds" className='imgmds'/>
        <ul className="navbar-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div className="navbar-actions">
            <button className="btn-login">Login</button>
        </div>
        </nav>
    </>
  );
}

export default Navbar;