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
        <About />
        <Services />
        <Footer />
    </div>
  )
}

export default Landing