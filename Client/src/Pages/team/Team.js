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

import React, { useEffect, useState } from "react";
// import Aryan from './Solankiimg.jpeg';
import Abhi from "./2.jpg";
import Priyansh from "./3.jpg";
import Vashu from "./1.jpg";
import aryan from "./4.jpg";
//import Carousel from "react-elastic-carousel";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./Team.css";
import HashLoader from "react-spinners/HashLoader";
import Teambar from "../../components/teambar/teambar";

export default function Members({ updateUser,updateAdmin }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1250);
  }, []);

  return (
    <>
      {/* <Link to={'/'}><button className="home-from-team">Home</button></Link> */}
      {loading ? (
        <div className="loading">
          <HashLoader
            color={"green"}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="meet">
          <Teambar updateUser={updateUser} updateAdmin={updateAdmin} />
          <h1 className="team-heading">TEAM</h1>
          <div className="detailsz">
            <div className="ashu">
              <div className="book-cardz1">
                <img src={Vashu} alt="ahishek"></img>
                <hr style={{ height: "2px", backgroundColor: "white" }}></hr>
                <div className="links-with">
                  <Link
                    to={
                      "https://www.linkedin.com/in/ashutosh-mishra-690a40251/"
                    }
                  >
                    <BsLinkedin className="linked" />
                  </Link>
                  <Link to={"https://www.instagram.com/ashutosh_mishra.0/"}>
                    <BsInstagram className="insta" />
                  </Link>
                  <Link to={"https://github.com/Ashutosh5548"}>
                    <BsGithub className="hubgit" />
                  </Link>
                </div>
              </div>
              <div className="member-description">
                <h2 style={{ color: "white", fontSize: "1.75rem" }}>
                  Ashutosh Mishra
                </h2>
                <h5 style={{ fontSize: "1.6rem" }}>Frontend Lead</h5>
                <p style={{ color: "white", fontSize: "1.4rem" }}>I was responsible for designing the UI of User, Admin, Landing, and Team page. I created numerous components, maintained the overall CSS of the website, and successfully resolved any encountered bugs.
                </p>
              </div>
            </div>

            <div className="pri">
              <div className="member-description">
                <h2 style={{ color: "white", fontSize: "1.75rem" }}>
                  Priyansh Shrivastav
                </h2>
                <h5 style={{ fontSize: "1.6rem" }}>Project and Backend Lead</h5>
                <p style={{ color: "white", fontSize: "1.4rem" }}>I played a key role in project ideation, developing the Overall backend of the website, designing the Library Page and Login/Signup UI, suggesting frontend improvements, and fixing bugs.
                </p>
              </div>
              <div className="book-cardz">
                <img src={Priyansh} alt="Book 4"></img>
                <hr style={{ height: "2px", backgroundColor: "white" }}></hr>
                <div className="links-with">
                  <Link
                    to={
                      "https://www.linkedin.com/in/priyansh-shrivastav-b5868b229/"
                    }
                  >
                    <BsLinkedin className="linked" />
                  </Link>
                  <Link to={"https://www.instagram.com/priyansh_s_s/"}>
                    <BsInstagram className="insta" />
                  </Link>
                  <Link to={"https://github.com/PSS2134"}>
                    <BsGithub className="hubgit" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="abhi">
              <div className="book-cardz1">
                <img src={Abhi} alt="Book 3"></img>
                <hr style={{ height: "2px", backgroundColor: "white" }}></hr>
                <div className="links-with">
                  <Link to={"https://www.linkedin.com/in/abhishekg2409/"}>
                    <BsLinkedin className="linked" />
                  </Link>
                  <Link to={"https://www.instagram.com/abhi_g_24__/"}>
                    <BsInstagram className="insta" />
                  </Link>
                  <Link to={"https://github.com/Abhi24iitg"}>
                    <BsGithub className="hubgit" />
                  </Link>
                </div>
              </div>
              <div className="member-description">
                <h2 style={{ color: "white", fontSize: "1.75rem" }}>
                  Abhishek Gupta
                </h2>
                <h5 style={{ fontSize: "1.6rem" }}>
                  Frontend Lead and Backend
                </h5>
                <p style={{ color: "white", fontSize: "1.4rem" }}>
                  Developed the UI for Booklist & BookInfo.Improved The
                  CSS.Added the Image and Book Search functionality.Also
                  Contributed in Backend for Logout and Image storing
                </p>
              </div>
            </div>

            <div className="sol">
              <div className="member-description">
                <h2 style={{ color: "white", fontSize: "1.75rem" }}>
                  Aryan Solanki
                </h2>
                <h5 style={{ fontSize: "1.6rem" }}>Frontend</h5>
                <p style={{ color: "white", fontSize: "1.4rem" }}>
                  Made components of landing page and user page. Improved
                  overall css of the website
                </p>
              </div>
              <div className="book-cardz">
                <img src={aryan} alt="Book 1"></img>
                <hr style={{ height: "2px", backgroundColor: "white" }}></hr>
                <div className="links-with">
                  <Link to={"https://www.linkedin.com/in/asolankii/"}>
                    <BsLinkedin className="linked" />
                  </Link>
                  <Link
                    to={
                      "https://instagram.com/solanki____275?igshid=MzNlNGNkZWQ4Mg=="
                    }
                  >
                    <BsInstagram className="insta" />
                  </Link>
                  <Link to={"https://github.com/aldol275"}>
                    <BsGithub className="hubgit" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
