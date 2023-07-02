import React from 'react'
import './navbar.css';
import { GiBookshelf } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';

function Navbar() {
    return (
      <nav className="navbar">
          <div className="books">
            <GiBookshelf className='book'/>
          </div>
          <div className="name">
            <h1>LIBRARY MANAGEMENT</h1>
            
          </div>
          <div className='bar'>
            <div className="home">
                <Link to={'/'}><button className="btn">Home</button></Link>
            </div>
            <div className="about">
                <button className="btn">About</button>
            </div>
            <div className="services">
                <button className="btn">Services</button>
            </div>
            <div className="recommend">
                <button className="btn">Recommended</button>
            </div>
            <div className="log-user">
              <div className="logout">
                  <button className="btn">Logout</button>
              </div>
              <div className="profile">
                  <Link to={'/user'}><button className="btn"><BiUserCircle className='user-icon'/></button></Link>
              </div>
            </div>
              
          </div>  
      </nav>
    )
  }
  
  export default Navbar