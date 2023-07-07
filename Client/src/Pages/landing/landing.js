import React from 'react'
import './landing.css';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import About from '../../components/about/about';
import Services from '../../components/services/services';

function Landing() {
  return (
    <div className="landing">
        <Navbar />
        <div className="above-about">
          <h1 className='welcoming'>Welcome, to the LIBRARY PORTAL</h1> 
          <span></span>
        </div>
        <About />
        <Services />
        <Footer />
    </div>
  )
}

export default Landing