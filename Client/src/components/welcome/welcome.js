import React from 'react'
import './welcome.css';
import { Link } from 'react-router-dom';

function Welcome() {

    const user = JSON.parse(localStorage.getItem("user"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return (
        <div className="landing" id='1'>
          <section className="land-wrapper">
            <div className="paddings innerwidth flexcentre land-container ">
                <div className=" land-left">
                  <div className="land-title">
                    <h1>Welcome, to Library!</h1>
                    <div className="land-des">
                        <p style={{"fontSize":"1.3rem","marginLeft":"3%"}}>Your gateway to a world of knowledge and inspiration!</p>
                        {/* <div className='flex-btn'>
                            <h3>New to this app</h3>
                            <Link to={'/signup'}><button className='wel-btn'>Register</button></Link>
                        </div> */}

                        {!user&&!admin &&
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