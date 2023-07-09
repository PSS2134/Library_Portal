import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';

function Header() {
    return (
      <nav className="header">
        <div className="leftbarr">
            <div class="dropdown">
              <button class="dropbtn-head">LIBRARY</button>
              {/* <div class="dropdown-content">
                <a href="/library/Fiction">Fiction</a>
                <a href="/library/Competitive">Competitive</a>
                <a href="/library/Autobiography">Autobiography</a>
                <a href="/library/Others">Others</a>
              </div> */}
            </div>
            
        </div>
        <div className="middlebarr">
            <Link to={'/'}><button className="head-btn">Home</button></Link>
            <button className="head-btn">About</button>
            <button className="head-btn">Services</button>
            <button className="head-btn">Recommended</button>
            
        </div>  
        <div className="rightbarr">
            <Link to={'/user'}><button className="head-btn user-btnx">Team</button></Link>
        </div> 
      </nav>
    )
  }
  
  export default Header