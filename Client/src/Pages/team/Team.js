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

import "./Team.css";

export default function Members() {
  return (
    <div className="meet">

  <h2>Meet the team</h2>

    <div className="detailsz">
   
    <div className="ashu">
   <div className="book-cardz">
    <img src={Vashu} alt="ahishek"></img>
    <h3>Ashutosh Mishra </h3>
    <p>Civil</p>
    </div>
  </div>


  <div className="pri">
  <div className="book-cardz">
   <img src={Priyansh} alt="Book 4"></img>
    <h3>Priyansh Shrivastava</h3>
    <p>ECE</p>
    </div>
  </div>

  <div className="abhi">
  <div className="book-cardz">
 <img src={Abhi} alt="Book 3"></img>
    <h3>Abhishek Gupta</h3>
    <p>EEE</p>
    </div>
  </div>


  <div className="sol">
    <div className="book-cardz">
    <img src={aryan} alt="Book 1"></img>
    <h3>Aryan Solanki</h3>
    <p>Civil</p>
  </div>
  </div>


  </div>
  
  
  
 

  </div>
  
    );
}

