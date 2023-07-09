import React from 'react'
import './welcome.css';
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <div className="landing">
          <section className="land-wrapper">
            <div className="paddings innerwidth flexcentre land-container ">
                <div className=" land-left">
                  <div className="land-title">
                    <h1>Welcome, To Library_Portal</h1>
                    <div className="land-des">
                        <div className='flex-btn'>
                            <h3>New to this app</h3>
                            <Link to={'/signup'}><button className='wel-btn'>Register</button></Link>
                        </div>
                        <div className='flex-btn'>
                            <h3>Already Registered</h3>
                            <Link to={'/login'}><button className='wel-btn'>Login</button></Link>
                        </div>
                    </div>
                  </div>
                </div>
                {/* <div className="land-right">
                  <div className="image-container">
                    <img src="https://img.freepik.com/free-vector/movie-theater-signboard-blue_34230-295.jpg?size=338&ext=jpg" alt="" />
                  </div>
                </div> */}
            </div>
          </section>
        </div>  
      )
}

export default Welcome