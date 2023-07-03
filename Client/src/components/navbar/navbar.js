import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';

function Navbar() {
    return (
      <nav className="navbar">
        <div className="leftbar">
        {/* <h1 className='app-name'>LIBRARY_MANAGEMENT</h1>  */}
            <h1 className='app-name'>LIBRARY_PORTAL</h1>
        </div>
        <div className="middlebar">
            <Link to={'/'}><button className="nav-btn">Home</button></Link>
            <button className="nav-btn">About</button>
            <button className="nav-btn">Services</button>
            <button className="nav-btn">Recommended</button>
        </div>  
        <div className="rightbar">
            <Link to={'/user'}><button className="nav-btn user-btn"><BiUserCircle className='user-icon'/></button></Link>
            <button className="logout-btn">Logout</button>
        </div> 
      </nav>
    )
  }
  
  export default Navbar