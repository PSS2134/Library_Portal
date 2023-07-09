import React from 'react'
import './landing.css';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import About from '../../components/about/about';
import Services from '../../components/services/services';
import Recommended from '../../components/recommended/recommended';
import Welcome from '../../components/welcome/welcome';

function Landing() {
  return (
    <div className="landing">
        <Navbar />
        <Welcome />
        <About />
        <Services />
        <Recommended />
        <Footer />
    </div>
  )
}

export default Landing