import React from 'react'
import './landing.css';
import Footer from '../../components/footer/footer';
import About from '../../components/about/about';
import Services from '../../components/services/services';
import Recommended from '../../components/recommended/recommended';
import Welcome from '../../components/welcome/welcome';
import Header from '../../components/header/header';

function Landing() {
  return (
    <div className="landing">
        <Header />
        <Welcome />
        <About />
        <Services />
        <Recommended />
        <Footer />
    </div>
  )
}

export default Landing