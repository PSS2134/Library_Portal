import React from 'react'
import './welcome.css';
import { Link } from 'react-router-dom';

function Welcome() {

    const user = JSON.parse(localStorage.getItem("user"));
  
    return (
        <div className="landing" id='1'>
          <section className="land-wrapper">
            <div className="paddings innerwidth flexcentre land-container ">
                <div className=" land-left">
                  <div className="land-title">
                    <h1>Welcome, To Library!</h1>
                    <div className="land-des">
                        <p>Your gateway to a world of knowledge and inspiration! Discover a world of knowledge and endless possibilities with our vast collection of books.Whether you're a passionate reader or a curious learner, our library has something for everyone.</p>
                        {/* <div className='flex-btn'>
                            <h3>New to this app</h3>
                            <Link to={'/signup'}><button className='wel-btn'>Register</button></Link>
                        </div> */}

                        {!user &&
                          <div className='flex-btn'>
                              <Link to={'/signup'}><button className='wel-btn'>Register</button></Link>
                              <Link to={'/login'}><button className='wel-btn'>Login</button></Link>
                          </div>
                        }       
                    </div>
                  </div>
                </div>
                <div className="land-right">
                  <div className="image-container">
                    <img src="https://thumbs.dreamstime.com/b/d-people-guy-reading-books-78621393.jpg" alt="" />
                  </div>
                </div>
            </div>
          </section>
        </div>  
      )
}

export default Welcome