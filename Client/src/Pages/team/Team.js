// import './Team.css';

// function Members(){
//     return (
        

// <div class="body">
//  <h1>Meet the Team</h1>

// <div class="card">
//   <img src="https://media.licdn.com/dms/image/D4D03AQH5a-tZaQ0GNQ/profile-displayphoto-shrink_800_800/0/1673769255942?e=2147483647&v=beta&t=pgCkRqmlSaDRv90wvyQ4oPch_UIU5FFzZPcQfwv2VmA" alt="Aryan"></img>
//   <h2>Aryan Solanki</h2>
//   <p>Frontend and Backend Developer</p>
//   <p>Experience: 5 years</p>
// </div>

// <div class="card">

//   <h2>Priyansh S. Shrivastava</h2>
//   <p>Frontend and Backend Developer</p>
//   <p>Experience: 3 years</p>
// </div>

// <div class="card">
//   <img src="https://media.licdn.com/dms/image/D4D03AQF6Y1Un9gFYoQ/profile-displayphoto-shrink_800_800/0/1686673768935?e=2147483647&v=beta&t=T1fMg4uSi2YK_CBBFSzo2sBY8JhMsy6ehgss_-vMOBw" alt="Person 3"></img>
//   <h2>Ashutosh Mishra</h2>
//   <p>Frontend and Backend Developer</p>
//   <p>Experience: 7 years</p>
// </div>

// <div class="card">
//   <img src="person4.jpg" alt="Person 4"></img>
//   <h2>Frontend and UI designer</h2>
//   <p>Position: Content Writer</p>
//   <p>Experience: 2 years</p>
// </div>
      



// </div>

    
import React from "react";
// import Aryan from './Solankiimg.jpeg';
import Abhi from './2.jpg';
import Priyansh from './3.jpg';
import Vashu from './1.jpg';
import aryan from './4.jpg';
//import Carousel from "react-elastic-carousel";
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import "./Team.css";
import Teambar from "../../components/teambar/teambar";

export default function Members({ updateUser }) {
  return (
    <div className="meet">
      {/* <Link to={'/'}><button className="home-from-team">Home</button></Link> */}
      <Teambar updateUser={updateUser} />
      <h1 className="team-heading">TEAM</h1>
      <div className="detailsz">
   
        <div className="ashu">
          <div className="book-cardz">
            <img src={Vashu} alt="ahishek"></img>
            <hr style={{"height":"2px","backgroundColor":"white"}}></hr>
            <div className="links-with">
              <Link to={'www.linkedin.com/in/ashutosh-mishra-690a40251'}><BsLinkedin className="linked"/></Link>
              <Link to={'https://www.instagram.com/ashutosh_mishra.0/'}><BsInstagram className="insta"/></Link>
              <Link to={'https://github.com/Ashutosh5548'}><BsGithub className="hubgit"/></Link>
            </div>
          </div>
          <div className="member-description">
            <h2>Ashutosh Mishra</h2>
            <h5>Frontend</h5>
            <p>Made the User Interface of user and landing page and added so many components in both the pages and other pages as well</p>
          </div>
        </div>
        


        <div className="pri">
          <div className="member-description">
            <h2>Priyansh Shrivastav</h2>
            <h5>Backend</h5>
            <p>Made the User Interface of user and landing page and added so many components in both the pages and other pages as well</p>
          </div>
          <div className="book-cardz">
            <img src={Priyansh} alt="Book 4"></img>
            <hr style={{"height":"2px","backgroundColor":"white"}}></hr>
            <div className="links-with">
              <Link to={'/'}><BsLinkedin className="linked"/></Link>
              <Link to={'/'}><BsInstagram className="insta"/></Link>
              <Link to={'/'}><BsGithub className="hubgit"/></Link>
            </div>
          </div>
          
        </div>

        <div className="abhi">
          <div className="book-cardz">
            <img src={Abhi} alt="Book 3"></img>
            <hr style={{"height":"2px","backgroundColor":"white"}}></hr>
            <div className="links-with">
              <Link to={'/'}><BsLinkedin className="linked"/></Link>
              <Link to={'/'}><BsInstagram className="insta"/></Link>
              <Link to={'/'}><BsGithub className="hubgit"/></Link>
            </div>
          </div>
          <div className="member-description">
            <h2>Abhishek Gupta</h2>
            <h5>Frontend</h5>
            <p>Made the User Interface of user and landing page and added so many components in both the pages and other pages as well</p>
          </div>
        </div>


        <div className="sol">
          <div className="member-description">
            <h2>Aryan Solanki</h2>
            <h5>Frontend</h5>
            <p>Made the User Interface of user and landing page and added so many components in both the pages and other pages as well</p>
          </div>
          <div className="book-cardz">
            <img src={aryan} alt="Book 1"></img>
            <hr style={{"height":"2px","backgroundColor":"white"}}></hr>
            <div className="links-with">
              <Link to={'/'}><BsLinkedin className="linked"/></Link>
              <Link to={'/'}><BsInstagram className="insta"/></Link>
              <Link to={'/'}><BsGithub className="hubgit"/></Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  
    );
}

